import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

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
			<Box>
				<Typography
					variant="h6"
					component="p"
					sx={{
						fontWeight: 300,
						fontSize: { xs: "14px", md: "16px" },
						color: "inherit",
						textDecoration: "none",
						mb: 3,
					}}
				>
					Welcome to our Qualitative Data Analysis Assistant website, created by Monitoring,
					Evaluation, Accountability and Learning (MEAL) Professional Asif Ahmed. Our platform has
					been designed to provide an easy and efficient way for researchers, development program
					evaluators, and emergency responders to analyze their data.
				</Typography>
				<Typography
					variant="h6"
					component="p"
					sx={{
						fontWeight: 300,
						fontSize: { xs: "14px", md: "16px" },
						color: "inherit",
						textDecoration: "none",
						mb: 3,
					}}
				>
					Our platform utilizes the powerful Da-Vinci Artificial Intelligence (AI) module to prepare
					a Thematic Analysis report within minutes. By identifying patterns, themes, and trends in
					your data, our AI-powered analysis module saves you time and allows you to draw meaningful
					conclusions from your data. The process is simple: upload your interview or discussion
					scripts, and our AI module will provide you a Thematic Analysis report that includes a
					summary of the most common themes and patterns found in your data, along with supporting
					quotes and examples.
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
					Our Qualitative Data Analysis Assistant website is a powerful tool for researchers,
					development program evaluators, and emergency responders. With our AI-powered analysis
					module and personalized support, you can conduct a Thematic Analysis report within minutes
					and draw meaningful conclusions from your data. We are committed to providing our users
					with the best possible experience, and we look forward to working with you. Thank you for
					choosing our platform.
				</Typography>
			</Box>
		</Stack>
	);
}
