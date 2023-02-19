import React from "react";
import { getCookie, getCookies, hasCookie, deleteCookie } from "cookies-next";
import { handleGetUserData } from "../../api/auth";
export default function index({ accessToken, user, userFileId }) {
	console.log("accessToken :", accessToken);
	console.log("user :", user);
	console.log("userFileId :", userFileId);
	if (accessToken) return <div>Auth</div>;
	return <div>No Auth</div>;
}

export const getServerSideProps = async ({ req, res }) => {
	let isAuth = "";
	let userFileId = "";
	const cookies = getCookies({ req, res });
	if (!cookies.accessToken) {
		return { props: { accessToken: false } };
	}
	isAuth = cookies.accessToken;
	userFileId = cookies.userFileId;
	const user = await handleGetUserData(isAuth);
	console.log(user.data);
	return { props: { accessToken: isAuth, user: user.data, userFileId } };
};
