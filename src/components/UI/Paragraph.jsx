import { Typography } from "@mui/material";
import React from "react";

export default function Paragraph({ children }) {
	return (
		<Typography
			sx={{
				fontSize: "18px",
				fontWeight: "300",
				fontFamily: "Roboto Mono",
				fontWeight: 300,
				mb: 2,
				px: { xs: 1, md: 4 },
			}}
			variant="caption"
			component="p"
		>
			{children}
		</Typography>
	);
}
