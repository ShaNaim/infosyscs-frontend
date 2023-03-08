import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
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
						<YoutubeEmbed embedId="yRMM4eZad6Q" />
					</Paper>
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
						<YoutubeEmbed embedId="8cMr6_8n_9E" />
					</Paper>
				</Stack>
			</Box>
		</>
	);
}
// https://www.youtube.com/watch?v=a546lxxJIhE&ab_channel=LastWeekTonight
