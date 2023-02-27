import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Points({ count }) {
	return (
		<>
			<Box
				sx={{
					backgroundColor: "#c2c2c263",
					mb: 3,
					p: 1,
				}}
			>
				<Typography
					sx={{
						fontSize: "20px",
						fontWeight: "600",
						mb: 3,
						mr: 1,
						fontFamily: "Roboto Mono",
						fontWeight: 300,
						color: "#083958",
					}}
					variant="caption"
					component="span"
				>
					{count} .
				</Typography>
				<Typography
					sx={{
						fontSize: "18px",
						fontWeight: "300",
						mb: 1,
						fontFamily: "Roboto Mono",
						fontWeight: 300,
					}}
					variant="caption"
					component="span"
				>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, eligendi! Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Reprehenderit quae eveniet, laborum sunt architecto
					atque dignissimos consectetur nihil nulla consequatur.
				</Typography>
			</Box>
		</>
	);
}
