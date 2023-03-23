import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import Paper from "@mui/material/Paper";
import YoutubeEmbed from "./YoutubeEmbedded";
export default function RightSection() {
	return (
		<>
			<Stack
				direction="column"
				sx={{ width: "100%", mb: 3 }}
				justifyContent="center"
				alignItems="center"
			>
				<Box sx={{ p: 3, width: "100%", bgcolor: "#474747", borderRadius: "12px" }}>
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
				<Paper
					elevation={4}
					sx={{
						mt: 1,
						p: 1,
						bgcolor: "#474747",
						color: "white",
						width: "100%",
						borderRadius: "12px",
					}}
				>
					{/* <YoutubeEmbed embedId="yRMM4eZad6Q" /> */}
					<Box sx={{ height: "280px", width: "100%" }}>
						<YoutubeEmbed embedId="yRMM4eZad6Q" />
					</Box>
				</Paper>
			</Stack>
		</>
	);
}
