import React from "react";

export default function DataDisplay({ reportList, smallFont }) {
	return (
		<div style={{ padding: "16px", width: "100%", height: "100%" }}>
			{reportList.map((report, index) => {
				return (
					<div key={index}>
						<h2 style={{ fontSize: smallFont ? "20px" : "20px", textTransform: "capitalize" }}>
							{report.heading} :
						</h2>
						<p style={{ fontSize: smallFont ? "16px" : "18px", paddingLeft: "20px" }}>
							{report.details}
						</p>
					</div>
				);
			})}
		</div>
	);
}

export function TestReport({ reportText }) {
	return <>{JSON.stringify(reportText)}</>;
}
