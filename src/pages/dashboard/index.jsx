import React from "react";
import { getCookie, getCookies, hasCookie, deleteCookie } from "cookies-next";
import { handleGetUserData } from "../../api/auth";
import Home from "@/components/Dashboard/Home";
export default function index({ accessToken, user }) {
	console.log("accessToken :", accessToken);
	console.log("user :", user);
	if (accessToken) return <div>Auth</div>;
	return (
		<div>
			<Home />
		</div>
	);
}

export const getServerSideProps = async ({ req, res }) => {
	let isAuth = "";
	const cookies = getCookies({ req, res });
	if (!cookies.accessToken) {
		return { props: { accessToken: false } };
	}
	isAuth = cookies.accessToken;
	const user = await handleGetUserData(isAuth);
	console.log(user.data);
	return { props: { accessToken: isAuth, user: user.data } };
};
