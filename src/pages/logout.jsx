import Loading from "@/components/UI/Loading";
import { useRouter } from "next/router";
import React from "react";
import { selectAuthState, setAuthState } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie } from "cookies-next";
import { handleUserLogout } from "@/api/auth";
export default function logout() {
	const authState = useSelector(selectAuthState);
	const router = useRouter();
	const dispatch = useDispatch();
	async function handleLogout(token) {
		await handleUserLogout(token);
	}
	React.useEffect(() => {
		return async () => {
			authState?.accessToken && (await handleLogout(authState?.accessToken));
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

export const getServerSideProps = async (context) => {
	try {
		deleteCookie("refreshToken", { req: context.req, res: context.res });
		deleteCookie("accessToken", { req: context.req, res: context.res });
		return { props: {} };
	} catch (error) {
		console.error({ error });
		console.error({ error: error.response?.data });
		return { props: {} };
	}
};
