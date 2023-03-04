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

export default function RightSection() {
	return (
		<>
			<Stack
				direction="column"
				sx={{ width: "100%", mb: 3 }}
				justifyContent="center"
				alignItems="center"
			>
				<Box sx={{ p: 3, width: "100%" }}>
					<Typography
						variant="h6"
						component="h6"
						sx={{
							fontWeight: 700,
							fontSize: { xs: "14px", md: "18px" },
							color: "inherit",
							textDecoration: "none",
							mb: 1,
						}}
					>
						Upcoming Software as a Service
					</Typography>
					<ul>
						<Typography
							variant="h6"
							component="li"
							sx={{
								fontSize: {
									xs: "12px",
									md: "16px",
								},
								m: 1,
								ml: 3,
							}}
						>
							Audio/Video to Text
						</Typography>
						<Typography
							variant="h6"
							component="li"
							sx={{
								fontSize: {
									xs: "12px",
									md: "16px",
								},
								m: 1,
								ml: 3,
							}}
						>
							Multi Language
						</Typography>
						<Typography
							variant="h6"
							component="li"
							sx={{
								fontSize: {
									xs: "12px",
									md: "16px",
								},
								m: 1,
								ml: 3,
							}}
						>
							Text Analytics
						</Typography>
						<Typography
							variant="h6"
							component="li"
							sx={{
								fontSize: {
									xs: "12px",
									md: "16px",
								},
								m: 1,
								ml: 3,
							}}
						>
							Content Analytics
						</Typography>
						<Typography
							variant="h6"
							component="li"
							sx={{
								fontSize: {
									xs: "12px",
									md: "16px",
								},
								m: 1,
								ml: 3,
							}}
						>
							Narrative Analytics
						</Typography>
						<Typography
							variant="h6"
							component="li"
							sx={{
								fontSize: {
									xs: "12px",
									md: "16px",
								},
								m: 1,
								ml: 3,
							}}
						>
							Discourse Analytics
						</Typography>
						<Typography
							variant="h6"
							component="li"
							sx={{
								fontSize: {
									xs: "12px",
									md: "16px",
								},
								m: 1,
								ml: 3,
							}}
						>
							Media Analytics
						</Typography>
						<Typography
							variant="h6"
							component="li"
							sx={{
								fontSize: {
									xs: "12px",
									md: "16px",
								},
								m: 1,
								ml: 3,
							}}
						>
							Comparative Analytics
						</Typography>
						<Typography
							variant="h6"
							component="li"
							sx={{
								fontSize: {
									xs: "12px",
									md: "16px",
								},
								m: 1,
								ml: 3,
							}}
						>
							Context Analytics
						</Typography>
						<Typography
							variant="h6"
							component="li"
							sx={{
								fontSize: {
									xs: "12px",
									md: "16px",
								},
								m: 1,
								ml: 3,
							}}
						>
							Sentiment Analytics
						</Typography>
						<Typography
							variant="h6"
							component="li"
							sx={{
								fontSize: {
									xs: "12px",
									md: "16px",
								},
								m: 1,
								ml: 3,
							}}
						>
							Data Visualization
						</Typography>
					</ul>
				</Box>
			</Stack>
		</>
	);
}
