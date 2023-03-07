import React from "react";
import Stack from "@mui/material/Stack";
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
			<Stack
				direction={{ xs: "column", md: "column" }}
				justifyContent="center"
				alignItems="center"
				spacing={2}
				sx={{ width: "100%", p: 3 }}
			>
				<span>Thematic Analysis</span>
				{reportList.map((report, index) => {
					return (
						<div key={index}>
							<h2 style={{ fontSize: "12px", textTransform: "capitalize", userSelect: "none" }}>
								{report.heading} :
							</h2>
							<p style={{ fontSize: "8px", userSelect: "none" }}>{report.details}</p>
						</div>
					);
				})}
			</Stack>
		</Paper>
	);
}
