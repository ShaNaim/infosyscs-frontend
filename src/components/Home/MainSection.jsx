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
import { FunctionalComponent } from "../Report/DownLoadPDF";
export default function MainSection() {
	return (
		<>
			<Paper
				elevation={4}
				sx={{
					p: 3,
					bgcolor: "#474747",
					mt: 1,
					color: "white",
					borderRadius: "12px",
					width: { xs: "100%", md: "90%" },
				}}
			>
				<Hero />
			</Paper>
			<Paper
				elevation={4}
				sx={{
					p: 3,
					bgcolor: "#474747",
					color: "white",
					borderRadius: "12px",
					width: { xs: "100%", md: "90%" },
				}}
			>
				<Demo />
			</Paper>
			<Paper
				elevation={4}
				sx={{
					bgcolor: "#474747",
					color: "white",
					borderRadius: "12px",
					width: { xs: "100%", md: "90%" },
				}}
			>
				<Stack
					sx={{ width: "100%" }}
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={3}
				>
					<Typography
						variant="h6"
						component="h2"
						sx={{
							fontWeight: 600,
							fontSize: { xs: "22px", md: "20px" },
							color: "inherit",
							textDecoration: "none",
							mt: "20px",
						}}
					>
						Thematic Analysis
					</Typography>
					<FileUpload />
				</Stack>
			</Paper>
		</>
	);
}
