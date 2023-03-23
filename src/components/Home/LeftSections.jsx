import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import React from "react";
import YoutubeEmbed from "./YoutubeEmbedded";
export default function LeftSections() {
	return (
		<>
			<Box sx={{ width: "100%" }}>
				<Stack
					sx={{ width: "100%" }}
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={4}
				>
					{/* <Paper
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
					
						<Box sx={{ height: "280px", width: "100%" }}>
							<YoutubeEmbed embedId="yRMM4eZad6Q" />
						</Box>
					</Paper> */}
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
						{/* <YoutubeEmbed embedId="8cMr6_8n_9E" /> */}
						<Box sx={{ height: "280px", width: "100%" }}>
							<YoutubeEmbed embedId="8cMr6_8n_9E" />
						</Box>
					</Paper>
				</Stack>
			</Box>
		</>
	);
}
// https://www.youtube.com/watch?v=a546lxxJIhE&ab_channel=LastWeekTonight
