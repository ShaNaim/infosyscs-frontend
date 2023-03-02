import TableCell from "@mui/material/TableCell";

import React, { useEffect, useState } from "react";

export default function ReportHead() {
	return (
		<>
			<TableCell sx={{ fontSize: "12px" }}>Name</TableCell>
			<TableCell sx={{ fontSize: "12px" }} align="left">
				Tokens Used
			</TableCell>
			<TableCell sx={{ fontSize: "12px" }} align="left">
				Report Cost
			</TableCell>
			<TableCell sx={{ fontSize: "12px" }} align="left">
				Created At
			</TableCell>
			<TableCell sx={{ fontSize: "12px" }} align="left">
				User
			</TableCell>
			<TableCell sx={{ fontSize: "12px" }} align="left">
				Details
			</TableCell>
			<TableCell sx={{ fontSize: "12px" }} align="left">
				Action
			</TableCell>
		</>
	);
}
