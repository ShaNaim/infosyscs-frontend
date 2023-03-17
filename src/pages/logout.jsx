import Loading from "@/components/UI/Loading";
import { setAuthState } from "@/store/authSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { getCookies } from "cookies-next";
import { handleUserLogout } from "@/api/auth";
export default function logout() {
	const router = useRouter();
	const dispatch = useDispatch();
	React.useEffect(() => {
		return () => {
			dispatch(
				setAuthState({
					isLogedUser: false,
					accessToken: null,
					user: null,
				})
			);
			router.push("/login");
		};
	}, []);
	return <Loading />;
}

export const getServerSideProps = async ({ req, res }) => {
	try {
		const cookies = getCookies({ req, res });
		if (cookies.accessToken) {
			await handleUserLogout(cookies.accessToken);
			console.log("deleteing cookei");
			deleteCookie("accessToken", { req, res });
			deleteCookie("refreshToken", { req, res });
		}
		return { props: { redirectUrl: "/login" } };
	} catch (error) {
		console.log(error);
		return { props: { redirectUrl: "/login" } };
	}
};
