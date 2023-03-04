import { handleGetUserData } from "@/api/auth";
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
import FileUpload from "@/components/FileUploader/inedx";
import Hero from "@/components/Home/Hero";
import Demo from "@/components/Home/Demo";
import MainSection from "@/components/Home/MainSection";
import RightSection from "@/components/Home/RightSection";
export default function Home() {
	return (
		<>
			<CssBaseline />
			<HeadUI pageTitle={"Home"}></HeadUI>
			<React.Fragment>
				<Box sx={{ p: 1 }}>
					<Stack
						sx={{ width: "100%", mb: 3 }}
						direction={{ sx: "column", md: "row" }}
						justifyContent="center"
						alignItems="center"
						spacing={0}
					>
						<Box sx={{ flex: 1 }}></Box>
						<Box sx={{ flex: 3 }}>
							<Stack
								sx={{ width: "100%", mb: 3 }}
								direction="column"
								justifyContent="center"
								alignItems="center"
								spacing={1}
							>
								<MainSection />
							</Stack>
						</Box>
						<Box sx={{ flex: 1, mr: 2, width: "100%" }}>
							<Paper
								elevation={4}
								sx={{
									mr: { md: 4, sx: 0 },
									mt: 1,
									p: 2,
									bgcolor: "#474747",
									color: "white",
									width: "100%",
									borderRadius: "12px",
								}}
							>
								<RightSection />
							</Paper>
						</Box>
					</Stack>
				</Box>
			</React.Fragment>
		</>
	);
}

// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
// 	try {
// 		let isAuth = "";
// 		const cookies = getCookies({ req, res });
// 		if (!cookies.accessToken) {
// 			return { props: {} };
// 		}
// 		isAuth = cookies.accessToken;
// 		const user = await handleGetUserData(isAuth);
// 		if (!user) return { props: {} };
// 		await store.dispatch(
// 			setAuthState({
// 				isLogedUser: true,
// 				accessToken: cookies.accessToken,
// 				user: user.data,
// 			})
// 		);
// 		if (cookies.report_auth_token) {
// 			const foundAndConnected = await connectToReport(isAuth, cookies.report_auth_token);
// 			if (!foundAndConnected) return { props: {} };
// 			return {
// 				props: {},
// 			};
// 		}
// 		return { props: {} };
// 	} catch (error) {
// 		return { props: {} };
// 	}
// });
