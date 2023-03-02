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
export default function FileDetails({ name, size, index }) {
	function calculateKBValue(value) {
		return Math.ceil(value / 1000);
	}
	return (
		<>
			<Stack
				direction={{ xs: "row", md: "row" }}
				justifyContent="space-between"
				alignItems="center"
				spacing={2}
			>
				<span>{index}</span>
				<TextField
					sx={{ width: "100%" }}
					id="token-used"
					label="File Name"
					value={name}
					variant="filled"
				/>
				<TextField
					sx={{ width: "100%" }}
					id="tokne-const"
					label="File Size"
					value={calculateKBValue(size) + " KB"}
					variant="filled"
				/>
			</Stack>
		</>
	);
}
