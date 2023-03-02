import React from "react";

export default function DataDisplay({ reportList, smallFont }) {
	return (
		<div>
			{reportList.map((report, index) => {
				return (
					<div key={index}>
						<h2 style={{ fontSize: smallFont ? "18px" : "32px" }}> {report.heading} </h2>
						<p style={{ fontSize: smallFont ? "18px" : "24px" }}>{report.details}</p>
					</div>
				);
			})}
		</div>
	);
}

export function TestReport({ reportText }) {
	return <>{JSON.stringify(reportText)}</>;
}
