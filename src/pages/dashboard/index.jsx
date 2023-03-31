import { handleGetUserData } from "@/api/auth";
import Home from "@/components/Dashboard/Home";
import HeadUI from "@/components/UI/HeadUI";
import Loading from "@/components/UI/Loading";

import { useRouter } from "next/router";
import React from "react";
import { setAuthState } from "@/store/authSlice";
import { selectAuthState } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { parse } from "cookie";

export async function getServerSideProps({ req, res, query }) {
	try {
		const { token } = query;
		if (token) {
			return { props: { googleAccessToken: token } };
		}
		const cookies = parse(req.headers.cookie || "");
		if (!cookies.accessToken) {
			res.setHeader("location", "/login");
			res.statusCode = 302;
			res.end();
			return { props: { googleAccessToken: null } };
		}
		return { props: { googleAccessToken: cookies.accessToken } };
	} catch (error) {
		console.log({ error });
		console.error({ error: error.response?.data });
		res.setHeader("location", "/login");
		res.statusCode = 302;
		res.end();
		return { props: { googleAccessToken: null } };
	}
}

export default function index({ googleAccessToken }) {
	const [loading, isLoading] = React.useState(true);
	const router = useRouter();
	const dispatch = useDispatch();
	const authState = useSelector(selectAuthState);

	React.useEffect(() => {
		async function handleDashboard(token) {
			try {
				if (!token) {
					return router.push("/login");
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
					router.push("/dashboard");
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
	}, [googleAccessToken]);

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
