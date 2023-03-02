import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import BasicModal from "@/components/Modal";
import { Reaction } from "@/components/Report/FeedBackDetails";
import FileDetails from "./FileDetails";

export default function ReportInfo({ data }) {
	return (
		<>
			<Box sx={{ width: "100%" }}>
				<Typography component="span" sx={{ fontSize: "20px", fontWeight: 600 }}>
					Report Details
				</Typography>
				<Stack
					direction={{ xs: "column", md: "row" }}
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
					sx={{ width: "100%" }}
				>
					<TextField
						sx={{ width: "100%" }}
						id="report-name"
						label="Report Name"
						value={data.name}
						variant="filled"
					/>
					<TextField
						sx={{ width: "100%" }}
						id="report-user-email"
						label="User Email"
						value={data.user ? data.user.email : "No User"}
						variant="filled"
					/>
					<TextField
						sx={{ width: "100%" }}
						id="report-generate-date"
						label="Report Generated At"
						value={dayjs(data.createdAt).format("MMM D, YYYY")}
						variant="filled"
					/>
				</Stack>
				<Stack
					direction={{ xs: "column", md: "row" }}
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<TextField
						sx={{ width: "100%" }}
						id="token-used"
						label="Token Used"
						value={data.token}
						variant="filled"
					/>
					<TextField
						sx={{ width: "100%" }}
						id="tokne-const"
						label="Cost to Generate Report"
						value={data.cost + " USD"}
						variant="filled"
					/>
					<TextField
						sx={{ width: "100%" }}
						id="type-of-files"
						label="Used File Type"
						value={data.file.filesType}
						variant="filled"
					/>
				</Stack>
			</Box>
		</>
	);
}
