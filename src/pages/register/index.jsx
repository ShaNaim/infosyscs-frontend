import React from "react";
import Box from "@mui/material/Box";
import Auth from "@/components/Auth/Auth";
import HeadUI from "@/components/UI/HeadUI";
import { selectAuthState } from "@/store/authSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function index({ accessToken }) {
	const router = useRouter();
	const authState = useSelector(selectAuthState);

	React.useEffect(() => {
		if (authState.accessToken) {
			router.push("/dashboard");
		}
	}, [authState]);
	return (
		<>
			<HeadUI pageTitle={"Register"} />
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
				<Auth isPage={true} />
			</Box>
		</>
	);
}
