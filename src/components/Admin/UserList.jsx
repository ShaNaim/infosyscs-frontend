import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";

import BasicTable from "../UI/BasicTable";
import ListSkeleton from "../UI/ListSkeleton";

export default function UsersList({ reportsList }) {
	return (
		<>
			{reportsList.length !== 0 ? (
				<BasicTable
					maxHeight={"500px"}
					head={
						<>
							<TableCell align="left">#</TableCell>
							<TableCell align="left">id</TableCell>
							<TableCell>Name</TableCell>
							<TableCell align="left">Email</TableCell>
							<TableCell align="left">Phone</TableCell>
							<TableCell align="left">Register Methood</TableCell>
							<TableCell align="left">Created At</TableCell>
							{/* <TableCell align="left">Action</TableCell> */}
						</>
					}
					body={
						<>
							{reportsList.map((row, index) => (
								<TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell component="th" scope="row">
										{index + 1}
									</TableCell>
									<TableCell align="left">{row.id}</TableCell>
									<TableCell align="left">{row.name}</TableCell>
									<TableCell align="left">{row.email}</TableCell>
									<TableCell align="left">{row.phone}</TableCell>
									<TableCell align="left">{row.method ? row.method : "email"} </TableCell>
									<TableCell align="left">{dayjs(row.createdAt).format("MMM D, YYYY")}</TableCell>
									{/* <Link href={`/report/${row.refId}`}> */}
									{/* </Link> */}
									{/* <TableCell align="left">
										<Button variant="text">View</Button>
									</TableCell> */}
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
