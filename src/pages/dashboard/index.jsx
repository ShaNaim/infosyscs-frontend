import { connectToReport } from "@/api/report";
import { handleGetUserData } from "@/api/auth";
import Home from "@/components/Dashboard/Home";
import HeadUI from "@/components/UI/HeadUI";
import Loading from "@/components/UI/Loading";
import { selectAuthState } from "@/store/authSlice";
import { selectReportState, setReportState } from "@/store/reportSlice";
import { useRouter } from "next/router";
import React from "react";
import { setAuthState } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCookies } from "cookies-next";
export default function index({ googleAccessToken }) {
	const [loading, isLoading] = React.useState(true);
	const router = useRouter();
	const dispatch = useDispatch();
	const authState = useSelector(selectAuthState);
	const reportState = useSelector(selectReportState);

	React.useEffect(() => {
		async function handleDashboard(token) {
			try {
				if (!token) {
					return router.push("/register");
				} else {
					isLoading(false);
					const userData = await handleGetUserData(token);

					dispatch(
						setAuthState({
							isLogedUser: true,
							accessToken: token,
							user: userData.data,
						})
					);
					if (reportState.reportRef) {
						await connectToReport(token, reportState.reportRef);
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
				isLoading(true);
			}
		}
		if (authState.isLogedUser) {
			handleDashboard(authState.accessToken);
		} else {
			if (googleAccessToken) handleDashboard(googleAccessToken);
		}
	}, [reportState, googleAccessToken]);

	return (
		<>
			<HeadUI pageTitle={"Dashboard"} />
			<div>
				{!loading ? (
					<Home user={authState.user} />
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
	try {
		const accessCookies = getCookies({ req, res });
		console.log({ accessCookies });
		if (!accessCookies.accessToken) {
			res.setHeader("location", "/login");
			res.statusCode = 302;
			res.end();
			return;
		}
		return { props: { googleAccessToken: accessCookies.accessToken } };
	} catch (error) {
		console.error({ error: error.response?.data });
		res.setHeader("location", "/login");
		res.statusCode = 302;
		res.end();
		return;
	}
};
