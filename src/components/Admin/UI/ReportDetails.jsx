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
import ReportInfo from "./ReportInfo";
export default function ReportDetails({ data, open, onClose }) {
	return (
		<BasicModal open={open} onClose={onClose}>
			<Box
				sx={{
					minWidth: "100%",
					backgroundColor: "white",
					p: 3,
					borderRadius: "8px",
				}}
			>
				<Stack
					direction={{ xs: "column", md: "column" }}
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<ReportInfo data={data} />
					<Typography
						component="span"
						sx={{ fontSize: "18px", fontWeight: 400, display: { xs: "none", md: "flex" } }}
					>
						FeedBack
					</Typography>
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<Stack
							direction={{ xs: "column", md: "column" }}
							justifyContent="space-between"
							alignItems="center"
							spacing={1}
						>
							{data.feedBack && data.feedBack.length !== 0 ? (
								<Paper sx={{ p: 2 }}>
									<Typography sx={{ fontSize: "14px" }}>
										Comment : {data.feedBack[0].comment}
									</Typography>
									<Typography sx={{ fontSize: "14px" }}>
										Reaction: <Reaction reaction={data.feedBack[0].reaction} />
									</Typography>
								</Paper>
							) : (
								<span> No Feedback </span>
							)}
							{data.feedBack.length > 1 ? (
								<span> {data.feedBack.length - 1} more reactions.. </span>
							) : (
								<></>
							)}
						</Stack>
					</Box>
					<Typography
						component="span"
						sx={{ fontSize: "18px", fontWeight: 400, display: { xs: "none", md: "flex" } }}
					>
						Files Details
					</Typography>
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<Stack
							direction={{ xs: "column", md: "column" }}
							justifyContent="space-between"
							alignItems="center"
							spacing={2}
						>
							{data.file?.fileDetails.map((file, index) => {
								if (index < 2) {
									return (
										<>
											<FileDetails name={file.name} size={file.size} index={index + 1} />
										</>
									);
								}
							})}
							{data.file?.fileDetails.length > 2 ? (
								<span> {data.file?.fileDetails.length - 2} more files.. </span>
							) : (
								<></>
							)}
						</Stack>
					</Box>
					<Button variant="outlined" size="small">
						<Link href={`/admin/report/detail/${data.refId}`}> See More </Link>
					</Button>
				</Stack>
			</Box>
		</BasicModal>
	);
}
