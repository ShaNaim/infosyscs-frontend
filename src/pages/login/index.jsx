import Auth from "@/components/Auth/Auth";
import HeadUI from "@/components/UI/HeadUI";
import Box from "@mui/material/Box";
import React from "react";
import { useRouter } from "next/router";
import { selectAuthState } from "@/store/authSlice";
import { useSelector } from "react-redux";

export default function index() {
	const router = useRouter();
	const authState = useSelector(selectAuthState);

	React.useEffect(() => {
		if (authState.accessToken) {
			router.push("/dashboard");
		}
	}, [authState]);

	return (
		<>
			<HeadUI pageTitle={"Login"} />
			<Box
				sx={{
					margin: "auto",
					px: {
						xs: "2%",
						md: "10%",
						lg: "20%",
					},
				}}
			>
				<Auth login={true} isPage={true} />
			</Box>
		</>
	);
}
