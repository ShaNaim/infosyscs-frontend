import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Points({ count, data }) {
	return (
		<>
			<Box
				sx={{
					backgroundColor: "#c2c2c263",
					mb: 3,
					p: 3,
					width: "100%",
					boxShadow: `7px 8px 10px -1px #b9bebec0`,
					borderRadius: "8px",
				}}
			>
				<Stack direction="row" justifyContent={count ? "start" : "center"} alignItems="start">
					{count && (
						<Typography
							sx={{
								fontSize: "18px",
								fontWeight: "600",
								mr: 1,
								fontFamily: "Roboto Mono",
								fontWeight: 300,
								color: "#083958",
							}}
							variant="caption"
							component="span"
						>
							{count}.
						</Typography>
					)}
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: "300",
							fontFamily: "Roboto Mono",
							fontWeight: 300,
						}}
						variant="caption"
						component="span"
					>
						{data}
					</Typography>
				</Stack>
			</Box>
		</>
	);
}
