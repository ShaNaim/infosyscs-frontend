import React from "react";
import FileUpload from "@/components/FileUploader/inedx";
import HeadUI from "@/components/UI/HeadUI";
import { setAuthState } from "@/store/authSlice";
import { wrapper } from "@/store/store";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { getCookies } from "cookies-next";
import TermsAndCondition from "@/components/TermsAndConditions";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
	return (
		<Stack
			sx={{ width: "100%", mb: 3 }}
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={1}
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
				component="p"
				sx={{
					fontWeight: 300,
					fontSize: { xs: "14px", md: "16px" },
					color: "inherit",
					textDecoration: "none",
				}}
			>
				Welcome to our Qualitative Data Analysis Assistant website, created by Monitoring,
				Evaluation, Accountability and Learning (MEAL) Professional Asif Ahmed. Our platform has
				been designed to provide an easy and efficient way for researchers, development program
				evaluators, and emergency responders to analyze their data. Our platform utilizes the
				powerful Da-Vinci Artificial Intelligence (AI) module to conduct a Thematic Analysis report
				within minutes. By identifying patterns, themes, and trends in your data, our AI-powered
				analysis module saves you time and allows you to draw meaningful conclusions from your data.
				The process is simple: upload your interview or discussion scripts, and our AI module will
				provide you with a Thematic Analysis report that includes a summary of the most common
				themes and patterns found in your data, along with supporting quotes and examples. Our
				Qualitative Data Analysis Assistant website is a powerful tool for researchers, development
				program evaluators, and emergency responders. With our AI-powered analysis module and
				personalized support, you can conduct a Thematic Analysis report within minutes and draw
				meaningful conclusions from your data. We are committed to providing our users with the best
				possible experience, and we look forward to working with you. Thank you for choosing our
				platform.
			</Typography>
		</Stack>
	);
}
