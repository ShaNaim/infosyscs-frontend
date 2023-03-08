import BasicTable from "../UI/BasicTable";
import ReportBody from "./UI/ReportBody";
import ReportHead from "./UI/ReportHead";

export default function AdminReportList({ reportsList }) {
	return (
		<>
			<BasicTable
				maxHeight={"500px"}
				head={<ReportHead />}
				body={
					<>
						{reportsList.map((row) => (
							<ReportBody key={row.refId} data={row} />
						))}
					</>
				}
			/>
		</>
	);
}
