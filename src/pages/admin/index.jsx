import { handleGetAdminData } from "@/api/auth";
import AdminHome from "@/components/Admin";
import HeadUI from "@/components/UI/HeadUI";
import Loading from "@/components/UI/Loading";
import { selectAuthState } from "@/store/authSlice";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

export default function index() {
	const [user, setUser] = React.useState({});
	const router = useRouter();
	const authState = useSelector(selectAuthState);
	React.useEffect(() => {
		async function handleAdmin() {
			try {
				if (!authState.accessToken) {
					router.push("/404");
				} else {
					const admin = await handleGetAdminData(authState.accessToken);
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
