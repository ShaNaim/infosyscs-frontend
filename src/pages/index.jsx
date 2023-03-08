import LeftSections from "@/components/Home/LeftSections";
import MainSection from "@/components/Home/MainSection";
import RightSection from "@/components/Home/RightSection";
import HeadUI from "@/components/UI/HeadUI";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import React from "react";

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
						alignItems="flex-start"
						spacing={0}
					>
						<Box sx={{ flex: 1, ml: { xs: 0, md: 2 }, width: "100%" }}>
							<LeftSections />
						</Box>
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
						<Box sx={{ flex: 1, mr: { xs: 0, md: 2 }, width: "100%" }}>
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
