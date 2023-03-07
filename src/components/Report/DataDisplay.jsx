import React from "react";

export default function DataDisplay({ reportList, smallFont }) {
	return (
		<div
			style={{
				padding: "12px 64px 12px 64px",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<span style={{ fontSize: "26px", margin: "36px 0 0 0" }}>Thematic Analysis</span>
			<div>
				{reportList.map((report, index) => {
					return (
						<div style={{ marginTop: "48px" }} key={index}>
							<h2 style={{ fontSize: smallFont ? "20px" : "20px", textTransform: "capitalize" }}>
								{report.heading} :
							</h2>
							<p style={{ fontSize: smallFont ? "16px" : "18px" }}>{report.details}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export function TestReport({ reportText }) {
	return <>{JSON.stringify(reportText)}</>;
}
