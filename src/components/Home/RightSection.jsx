import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

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
