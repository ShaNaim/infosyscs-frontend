import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import Link from "next/link";

export default function BasicTable({ data }) {
	return (
		<>
			<TableContainer component={Paper} sx={{ borderRadius: "8px" }}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead sx={{ backgroundColor: "burlywood" }}>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Number of Files Files</TableCell>
							<TableCell align="right">File Type</TableCell>
							<TableCell align="right">Created At</TableCell>
							<TableCell align="right"></TableCell>
							<TableCell align="right">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row) => (
							<TableRow key={row.refId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.file.numberOfFiles}</TableCell>
								<TableCell align="right">{row.file.filesType}</TableCell>
								<TableCell align="right"> {dayjs(row.createdAt).format("MMM D, YYYY")} </TableCell>
								<TableCell align="right"> </TableCell>
								<TableCell align="right">
									<Link href={`/report/${row.refId}`}>
										<Button variant="text">View</Button>
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
