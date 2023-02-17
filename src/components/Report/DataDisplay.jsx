import React from "react";

export default function DataDisplay({ reportList }) {
	return (
		<div>
			{reportList.map((report, index) => {
				return (
					<div key={index}>
						<h4> {report.thematicWords} </h4>
						<p>{report.report}</p>
					</div>
				);
			})}
		</div>
	);
}

export function TestReport({ reportText }) {
	return <>{JSON.stringify(reportText)}</>;
}
