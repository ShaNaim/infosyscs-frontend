import React, { useState, useEffect } from "react";
import BasicTable from "../UI/BasicTable";
import { selectAuthState, setAuthState } from "@/store/authSlice";
import { useSelector } from "react-redux";
import { getAllReports } from "@/api/report";
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
