import { handleGetAdminData } from "@/api/auth";
import { connectToReport } from "@/api/report";
import Home from "@/components/Dashboard/Home";
import HeadUI from "@/components/UI/HeadUI";
import Loading from "@/components/UI/Loading";
import { setAuthState } from "@/store/authSlice";
import { wrapper } from "@/store/store";
import { deleteCookie, getCookies } from "cookies-next";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { selectAuthState } from "@/store/authSlice";
import AdminHome from "@/components/Admin";
import { useSelector } from "react-redux";

export default function index() {
	const [user, setUser] = React.useState({});
	const router = useRouter();
	const dispatch = useDispatch();
	const authState = useSelector(selectAuthState);
	React.useEffect(() => {
		async function handleAdmin() {
			try {
				if (!authState.accessToken) {
					router.push("/404");
				} else {
					const admin = await handleGetAdminData(authState.accessToken);
					console.log({ admin });
					if (admin) {
						setUser(admin.data);
					}
				}
			} catch (error) {
				router.push("/404");
			}
		}
		handleAdmin();
	}, [authState]);

	return (
		<>
			<HeadUI pageTitle={"Admin Panel"} />
			<div>
				{user ? (
					<AdminHome />
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
// 			res.setHeader("location", "/404");
// 			res.statusCode = 302;
// 			res.end();
// 			return;
// 		}
// 		isAuth = cookies.accessToken;
// 		const user = await handleGetAdminData(isAuth);
// 		if (!user) {
// 			res.setHeader("location", "/404");
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
// 		return { props: { accessToken: isAuth, user: user.data } };
// 	} catch (error) {
// 		console.log(error);
// 		res.setHeader("location", "/404");
// 		res.statusCode = 302;
// 		res.end();
// 		return;
// 	}
// });
