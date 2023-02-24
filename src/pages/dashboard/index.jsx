import React from "react";
import { getCookie, getCookies, hasCookie, deleteCookie } from "cookies-next";
import { handleGetUserData } from "@/api/auth";
import { connectToReport, getAllReports } from "@/api/report";
import Home from "@/components/Dashboard/Home";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import { selectAuthState, setAuthState } from "@/store/authSlice";
import { wrapper } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
export default function index({ accessToken, user, report }) {
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
		<div>
			{user ? (
				<Home user={user} accessToken={accessToken} report={report} />
			) : (
				<>
					<CircularProgress />
				</>
			)}
		</div>
	);
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
	try {
		let isAuth = "";
		const cookies = getCookies({ req, res });
		if (!cookies.accessToken) {
			return { props: { accessToken: false } };
		}
		isAuth = cookies.accessToken;
		const user = await handleGetUserData(isAuth);
		if (!user) return { props: { accessToken: false } };

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
				props: { accessToken: isAuth, user: user.data, report: foundAndConnected },
			};
		}
		return { props: { accessToken: isAuth, user: user.data } };
	} catch (error) {
		console.log(error);
		return { props: { accessToken: false } };
	}
});
