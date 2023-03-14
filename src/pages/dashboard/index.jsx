import { connectToReport } from "@/api/report";
import { handleGetUserData } from "@/api/auth";
import Home from "@/components/Dashboard/Home";
import HeadUI from "@/components/UI/HeadUI";
import Loading from "@/components/UI/Loading";
import { selectAuthState } from "@/store/authSlice";
import { selectReportState, setReportState } from "@/store/reportSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookies } from "cookies-next";
export default function index() {
	const [user, setUser] = React.useState({});
	const router = useRouter();
	const dispatch = useDispatch();
	const authState = useSelector(selectAuthState);
	const reportState = useSelector(selectReportState);
	React.useEffect(() => {
		async function handleDashboard() {
			try {
				if (!authState.accessToken) {
					return router.push("/register");
				} else {
					const userData = await handleGetUserData(authState.accessToken);
					if (userData.data.id !== authState.user.id) return router.push("/register");
					setUser(authState.user);
					if (reportState.reportRef) {
						await connectToReport(authState.accessToken, reportState.reportRef);
						dispatch(
							setReportState({
								hasDisconnectedReport: false,
								reportRef: null,
								reportId: null,
							})
						);
					}
				}
			} catch (error) {
				console.error({ error: error });
				setUser(null);
			}
		}
		handleDashboard();
	}, [authState, reportState]);

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

export const getServerSideProps = async ({ req, res }) => {
	const accessCookies = getCookies({ req, res });
	console.log({ accessCookies });
	return { props: { accessToken: false } };
};

// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
// 	try {
// 		let isAuth = "";
// 		const cookies = getCookies({ req, res });
// 		if (!cookies.accessToken) {
// 			res.setHeader("location", "/login");
// 			res.statusCode = 302;
// 			res.end();
// 			return;
// 		}
// 		isAuth = cookies.accessToken;
// 		const user = await handleGetUserData(isAuth);
// 		if (!user) {
// 			res.setHeader("location", "/login");
// 			res.statusCode = 302;
// 			res.end();
// 			return;
// 		}
// 		await store.dispatch(
// 			setAuthState({
// 				isLogedUser: true,
// 				accessToken: cookies.accessToken,
// 				user: user.data,
// 			})
// 		);
// 		const auth = store.getState(selectAuthState);
// 		console.log(auth);
// 		if (cookies.report_auth_token) {
// 			const foundAndConnected = await connectToReport(isAuth, cookies.report_auth_token);
// 			if (!foundAndConnected) return { props: { accessToken: isAuth, user: user.data } };
// 			deleteCookie("report_auth_token", { req, res });
// 			return {
// 				props: { accessToken: isAuth, user: user.data },
// 			};
// 		}
// 		return { props: { accessToken: isAuth, user: user.data } };
// 	} catch (error) {
// 		res.setHeader("location", "/login");
// 		res.statusCode = 302;
// 		res.end();
// 		return;
// 	}
// });
