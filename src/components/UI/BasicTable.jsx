import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function BasicTable({ head, body, maxHeight }) {
	return (
		<>
			<TableContainer
				component={Paper}
				sx={{
					borderRadius: "8px",
					maxHeight: maxHeight,
					"&::-webkit-scrollbar": {
						width: 8,
						height: 8,
					},
					"&::-webkit-scrollbar-track": {
						backgroundColor: "#fff",
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "#7c79798b",
						borderRadius: 4,
					},
					width: "100%",
				}}
			>
				<Table sx={{ width: "100%" }} aria-label="basic table">
					<TableHead sx={{ backgroundColor: "burlywood" }}>
						<TableRow>{head}</TableRow>
					</TableHead>
					<TableBody sx={{ width: "100%" }}>{body}</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
