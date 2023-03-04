import { handleGetUserData } from "@/api/auth";
import { connectToReport } from "@/api/report";
import Home from "@/components/Dashboard/Home";
import HeadUI from "@/components/UI/HeadUI";
import Loading from "@/components/UI/Loading";
import { setAuthState } from "@/store/authSlice";
import { wrapper } from "@/store/store";
import { deleteCookie, getCookies } from "cookies-next";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import React from "react";

import { useDispatch } from "react-redux";
import { selectAuthState } from "@/store/authSlice";
import { setReportState, selectReportState } from "@/store/reportSlice";
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
					router.push("/register");
				} else {
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
				console.error(error);
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
