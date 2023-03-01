import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function Heading() {
	return (
		<>
			<Box
				sx={{
					textAlign: "center",
					width: "100%",
					mb: 2,
				}}
				variant="caption"
				component="span"
			>
				<Typography
					sx={{
						fontSize: "32px",
						fontWeight: "800",
						p: 2,
						fontFamily: "Roboto Mono",
						fontWeight: 300,
						textAlign: "center",
						height: "100%",
					}}
					variant="caption"
					component="span"
				>
					Terms And Conditions
				</Typography>
			</Box>
		</>
	);
}
