import { handleGetUserData } from "@/api/auth";
import FileUpload from "@/components/FileUploader/inedx";
import HeadUI from "@/components/UI/HeadUI";
import { setAuthState } from "@/store/authSlice";
import { wrapper } from "@/store/store";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { getCookies } from "cookies-next";
import React from "react";
import TermsAndCondition from "@/components/TermsAndConditions";
export default function Home() {
	return (
		<>
			<CssBaseline />
			<HeadUI pageTitle={"Home"}></HeadUI>
			<React.Fragment>
				<Container maxWidth="lg">
					<Box sx={{ bgcolor: "#faf9f9" }}>
						<Box sx={{ marginTop: "8%" }}>
							<FileUpload />
						</Box>
					</Box>
					<TermsAndCondition />
				</Container>
			</React.Fragment>
		</>
	);
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
	try {
		let isAuth = "";
		const cookies = getCookies({ req, res });
		if (!cookies.accessToken) {
			return { props: {} };
		}
		isAuth = cookies.accessToken;
		const user = await handleGetUserData(isAuth);
		if (!user) return { props: {} };
		await store.dispatch(
			setAuthState({
				isLogedUser: true,
				accessToken: cookies.accessToken,
				user: user.data,
			})
		);
		if (cookies.report_auth_token) {
			const foundAndConnected = await connectToReport(isAuth, cookies.report_auth_token);
			if (!foundAndConnected) return { props: {} };
			return {
				props: {},
			};
		}
		return { props: {} };
	} catch (error) {
		return { props: {} };
	}
});
