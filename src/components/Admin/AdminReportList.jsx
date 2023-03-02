import { getAllReportsByAdmin } from "@/api/report";
import { selectAuthState } from "@/store/authSlice";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";

import dayjs from "dayjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import BasicTable from "../UI/BasicTable";
import ListSkeleton from "../UI/ListSkeleton";
import ReportBody from "./UI/ReportBody";
import ReportHead from "./UI/ReportHead";
export default function AdminReportList({ reportsList }) {
	return (
		<>
			<BasicTable
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
