import React from "react";
import Typography from "@mui/material/Typography";
export default function Heading() {
	return (
		<>
			<Typography
				sx={{
					fontSize: "24px",
					fontWeight: "600",
					mb: 1,
					fontFamily: "Roboto Mono",
					fontWeight: 300,
				}}
				variant="caption"
				component="span"
			>
				Terms And Conditions
			</Typography>
		</>
	);
}
