import { getAllReports } from "@/api/report";
import { selectAuthState } from "@/store/authSlice";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import BasicTable from "../UI/BasicTable";
import ListSkeleton from "../UI/ListSkeleton";

export default function ReportList() {
	const [reportsList, setReportsList] = useState([]);
	const authState = useSelector(selectAuthState);
	useEffect(() => {
		async function getAllData() {
			if (authState.isLogedUser && authState.accessToken) {
				const reportList = await getAllReports(authState.accessToken);
				setReportsList(reportList.data);
			}
		}
		getAllData();
	}, []);
	return (
		<>
			{reportsList.length !== 0 ? (
				<BasicTable
					head={
						<>
							<TableCell>Name</TableCell>
							<TableCell align="right">Number of Files Files</TableCell>
							<TableCell align="right">File Type</TableCell>
							<TableCell align="right">Created At</TableCell>
							<TableCell align="right"></TableCell>
							<TableCell align="right">Action</TableCell>
						</>
					}
					body={
						<>
							{reportsList.map((row) => (
								<TableRow
									key={row.refId}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="right">{row.file.numberOfFiles}</TableCell>
									<TableCell align="right">{row.file.filesType}</TableCell>
									<TableCell align="right">
										{" "}
										{dayjs(row.createdAt).format("MMM D, YYYY")}{" "}
									</TableCell>
									<TableCell align="right"> </TableCell>
									<TableCell align="right">
										<Link href={`/report/${row.refId}`}>
											<Button variant="text">View</Button>
										</Link>
									</TableCell>
								</TableRow>
							))}
						</>
					}
				/>
			) : (
				<ListSkeleton />
			)}
		</>
	);
}
