import { getAllReports } from "@/api/report";
import { selectAuthState } from "@/store/authSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import BasicTable from "../UI/BasicTable";

export default function ReportList() {
	const [reportsList, setReportsList] = useState([]);
	const authState = useSelector(selectAuthState);
	useEffect(() => {
		async function getAllData() {
			if (authState.isLogedUser && authState.accessToken) {
				const reportList = await getAllReports(authState.accessToken);
				console.log(reportList);
				setReportsList(reportList.data);
			}
		}
		getAllData();
	}, [authState]);
	return (
		<div>
			<BasicTable data={reportsList} />
		</div>
	);
}
