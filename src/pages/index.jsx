import { handleGetUserData } from "@/api/auth";
import FileUpload from "@/components/FileUploader/inedx";
import HeadUI from "@/components/UI/HeadUI";
import { setAuthState } from "@/store/authSlice";
import { wrapper } from "@/store/store";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { getCookies } from "cookies-next";
import React from "react";
import TermsAndCondition from "@/components/TermsAndConditions";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Home() {
	return (
		<>
			<CssBaseline />
			<HeadUI pageTitle={"Home"}></HeadUI>
			<React.Fragment>
				<Container maxWidth="lg">
					<Stack
						sx={{ width: "100%", mb: 3 }}
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={3}
					>
						<Typography
							variant="h6"
							component="h1"
							sx={{
								fontWeight: 700,
								fontSize: { xs: "18px", md: "24px" },
								color: "inherit",
								textDecoration: "none",
							}}
						>
							Qualitative Data Analysis Assistant
						</Typography>
						<Typography
							variant="h6"
							component="h2"
							sx={{
								fontWeight: 600,
								fontSize: { xs: "16px", md: "20px" },
								color: "inherit",
								textDecoration: "none",
							}}
						>
							Thematic Analysis
						</Typography>
						<Paper
							elevation={4}
							sx={{ bgcolor: "#474747", marginTop: "8%", color: "white", borderRadius: "12px" }}
						>
							<Stack
								sx={{ width: "100%" }}
								direction="column"
								justifyContent="center"
								alignItems="center"
								spacing={3}
							>
								<FileUpload />
							</Stack>
						</Paper>
					</Stack>
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
