import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { selectAuthState, setAuthState } from "@/store/authSlice";
import { useSelector } from "react-redux";
import { getReportData } from "@/api/report";
import Typography from "@mui/material/Typography";

import DataDisplay from "@/components/Report/DataDisplay";
import { Box } from "@mui/material";
const Report = () => {
	const router = useRouter();
	const { reportId } = router.query;
	const [reportData, setReportData] = useState(null);
	const authState = useSelector(selectAuthState);
	useEffect(() => {
		async function getAllData() {
			if (authState.isLogedUser && authState.accessToken) {
				const reportList = await getReportData(authState.accessToken, String(reportId));
				console.log(reportList.data);
				setReportData(reportList.data);
			}
		}
		try {
			getAllData();
		} catch (error) {
			console.log(error);
		}
	}, [reportId]);

	return (
		<Box sx={{ p: 3 }}>
			{reportData && (
				<>
					<Typography
						variant="h5"
						noWrap
						component="span"
						sx={{
							mr: 2,
							flexGrow: 1,
							fontWeight: 100,
							color: "inherit",
							textDecoration: "none",
						}}
					>
						cost : {reportData.cost}
					</Typography>
					<Typography
						variant="h5"
						noWrap
						component="span"
						sx={{
							mr: 2,
							flexGrow: 1,
							fontWeight: 100,
							color: "inherit",
							textDecoration: "none",
						}}
					>
						token : {reportData.token}
					</Typography>
				</>
			)}
			{reportData ? <DataDisplay reportList={reportData.detail} /> : <span>Loading...</span>}
		</Box>
	);
};

export default Report;
