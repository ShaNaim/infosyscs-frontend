import { getReportData } from "@/api/report";
import DataDisplay from "@/components/Report/DataDisplay";
import Loading from "@/components/UI/Loading";
import { selectAuthState } from "@/store/authSlice";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
			reportId && getAllData();
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
			{reportData ? <DataDisplay reportList={reportData.detail} /> : <Loading />}
		</Box>
	);
};

export default Report;
