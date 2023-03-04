import { handleUserLogout } from "@/api/auth";
import Loading from "@/components/UI/Loading";
import { setAuthState } from "@/store/authSlice";
import { wrapper } from "@/store/store";
import { deleteCookie, getCookies } from "cookies-next";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
export default function logout({ redirectUrl = "/login" }) {
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
			redirectUrl && router.push(redirectUrl);
		};
	}, [redirectUrl]);
	return <Loading />;
}

// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
// 	try {
// 		const cookies = getCookies({ req, res });
// 		if (cookies.accessToken) {
// 			await handleUserLogout(cookies.accessToken);
// 			deleteCookie("accessToken", { req, res });
// 			deleteCookie("refreshToken", { req, res });
// 			await store.dispatch(
// 				setAuthState({
// 					isLogedUser: false,
// 					accessToken: null,
// 					user: {},
// 				})
// 			);
// 		}
// 		return { props: { redirectUrl: "/login" } };
// 	} catch (error) {
// 		console.log(error);
// 		return { props: { redirectUrl: "/login" } };
// 	}
// });
