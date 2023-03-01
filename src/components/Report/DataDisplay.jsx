import React from "react";

export default function DataDisplay({ reportList }) {
	return (
		<div>
			{reportList.map((report, index) => {
				return (
					<div key={index}>
						<h2 style={{ fontSize: "32px" }}> {report.heading} </h2>
						<p style={{ fontSize: "24px" }}>{report.details}</p>
					</div>
				);
			})}
		</div>
	);
}

export function TestReport({ reportText }) {
	return <>{JSON.stringify(reportText)}</>;
}
