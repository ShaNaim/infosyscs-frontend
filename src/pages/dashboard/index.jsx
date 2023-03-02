import { handleGetUserData } from "@/api/auth";
import { connectToReport } from "@/api/report";
import Home from "@/components/Dashboard/Home";
import HeadUI from "@/components/UI/HeadUI";
import Loading from "@/components/UI/Loading";
import { setAuthState } from "@/store/authSlice";
import { wrapper } from "@/store/store";
import { deleteCookie, getCookies } from "cookies-next";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function index({ accessToken, user }) {
	const router = useRouter();
	const dispatch = useDispatch();
	React.useEffect(() => {
		if (!accessToken) {
			router.push("/register");
		} else {
			dispatch(
				setAuthState({
					isLogedUser: true,
					accessToken: accessToken,
					user: user.data,
				})
			);
		}
	}, [accessToken, user]);

	return (
		<>
			<HeadUI pageTitle={"Dashboard"} />
			<div>
				{user ? (
					<Home user={user} />
				) : (
					<>
						<Loading />
					</>
				)}
			</div>
		</>
	);
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
	try {
		let isAuth = "";
		const cookies = getCookies({ req, res });
		if (!cookies.accessToken) {
			res.setHeader("location", "/login");
			res.statusCode = 302;
			res.end();
			return;
		}
		isAuth = cookies.accessToken;
		const user = await handleGetUserData(isAuth);
		if (!user) {
			res.setHeader("location", "/login");
			res.statusCode = 302;
			res.end();
			return;
		}
		await store.dispatch(
			setAuthState({
				isLogedUser: true,
				accessToken: cookies.accessToken,
				user: user.data,
			})
		);
		if (cookies.report_auth_token) {
			const foundAndConnected = await connectToReport(isAuth, cookies.report_auth_token);
			if (!foundAndConnected) return { props: { accessToken: isAuth, user: user.data } };
			deleteCookie("report_auth_token", { req, res });
			return {
				props: { accessToken: isAuth, user: user.data },
			};
		}
		return { props: { accessToken: isAuth, user: user.data } };
	} catch (error) {
		console.log(error);
		res.setHeader("location", "/login");
		res.statusCode = 302;
		res.end();
		return;
	}
});
