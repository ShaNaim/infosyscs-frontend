import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ReportDetails from "./ReportDetails";
export default function ReportBody({ data }) {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<>
			<TableRow key={data.refId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
				<TableCell sx={{ fontSize: "12px" }} component="th" scope="row">
					{data.name}
				</TableCell>
				<TableCell sx={{ fontSize: "12px" }} align="left">
					{data.token}
				</TableCell>
				<TableCell sx={{ fontSize: "12px" }} align="left">
					{data.cost}
				</TableCell>
				<TableCell sx={{ fontSize: "12px" }} align="left">
					{dayjs(data.createdAt).format("MMM D, YYYY")}
				</TableCell>
				<TableCell sx={{ fontSize: "12px" }} align="left">
					{data.user ? data.user.email : "No User"}
				</TableCell>
				<TableCell sx={{ fontSize: "12px" }} align="left">
					<Button onClick={(e) => setShowDetails((prev) => !prev)} variant="text">
						Details
					</Button>
				</TableCell>
				<TableCell sx={{ fontSize: "12px" }} align="left">
					<Link href={`/report/${data.refId}`}>
						<Button size="small" variant="text">
							View Report
						</Button>
					</Link>
				</TableCell>
			</TableRow>
			<ReportDetails data={data} open={showDetails} onClose={() => setShowDetails(false)} />
		</>
	);
}
