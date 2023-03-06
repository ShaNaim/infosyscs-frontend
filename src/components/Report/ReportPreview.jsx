import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
export default function ReportPreview({ reportList, smallFont }) {
	return (
		<Paper
			sx={{
				padding: "16px",
				width: { xs: "100%", sm: "80%", md: "30%" },
				height: "80%",
				pointerEvents: "none",
			}}
			elevation={12}
		>
			{reportList.map((report, index) => {
				return (
					<div key={index}>
						<h2 style={{ fontSize: "12px", textTransform: "capitalize", userSelect: "none" }}>
							{report.heading} :
						</h2>
						<p style={{ fontSize: "8px", paddingLeft: "8px", userSelect: "none" }}>
							{report.details}
						</p>
					</div>
				);
			})}
		</Paper>
	);
}
