import React from "react";
import { handleGetUserData } from "@/api/auth";
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
import FileUpload from "@/components/FileUploader/inedx";
import Hero from "@/components/Home/Hero";
import Demo from "@/components/Home/Demo";
import MainSection from "@/components/Home/MainSection";

export default function LeftSections() {
	return (
		<>
			<Box sx={{ p: 1, width: "100%" }}>
				<iframe
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed?v=a546lxxJIhE&ab_channel=LastWeekTonight"
					frameborder="0"
					allowfullscreen
				></iframe>
			</Box>
		</>
	);
}
// https://www.youtube.com/watch?v=a546lxxJIhE&ab_channel=LastWeekTonight
