import YoutubeEmbed from "@/components/Home/YoutubeEmbedded";
import HeadUI from "@/components/UI/HeadUI";
import Paragraph from "@/components/UI/Paragraph";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

import data from "./about.json";

export default function About() {
	return (
		<>
			<HeadUI pageTitle="About" />
			<Container sx={{ p: 2 }}>
				<Paper elevation={4} sx={{ p: 2 }}>
					<Typography
						sx={{
							fontSize: "24px",
							fontFamily: "Roboto Mono",
							fontWeight: 600,
							mb: 2,
						}}
						variant="caption"
						component="h1"
					>
						About
						<hr />
					</Typography>
					<Paragraph>{data.section_01}</Paragraph>
					<Paragraph>{data.section_02}</Paragraph>
					<Paragraph>{data.section_03}</Paragraph>
					<Paragraph>{data.section_04}</Paragraph>
				</Paper>
				<Paper elevation={4} sx={{ p: 2, mt: 3 }}>
					<Typography
						sx={{
							fontSize: "18px",
							fontFamily: "Roboto Mono",
							fontWeight: 600,
							mb: 2,
						}}
						variant="caption"
						component="h1"
					>
						Checkout our{" "}
						<Link
							style={{ textDecoration: "underline", color: "midnightblue" }}
							href="https://www.youtube.com/@asifahmed-jx7dm"
							target="_blank"
						>
							Youtube channel
						</Link>
						<hr />
					</Typography>
					<Stack
						direction={{ xs: "column", md: "row" }}
						justifyContent="center"
						alignItems="center"
					>
						<Box sx={{ height: "300px", width: "100%", p: { xs: 1, md: 3 } }}>
							<YoutubeEmbed embedId="yRMM4eZad6Q" />
						</Box>
						<Box sx={{ height: "300px", width: "100%", p: { xs: 1, md: 3 } }}>
							<YoutubeEmbed embedId="8cMr6_8n_9E" />
						</Box>
					</Stack>
				</Paper>
			</Container>
		</>
	);
}
