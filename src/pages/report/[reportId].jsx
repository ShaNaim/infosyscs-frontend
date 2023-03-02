import { getReportData } from "@/api/report";
import DataDisplay from "@/components/Report/DataDisplay";
import FeedBack from "@/components/Report/FeedBack";
import HeadUI from "@/components/UI/HeadUI";
import Loading from "@/components/UI/Loading";
import { selectAuthState } from "@/store/authSlice";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FeedBackDetails from "@/components/Report/FeedBackDetails";
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
		<>
			{reportData ? (
				<>
					<HeadUI pageTitle={reportData.name ? reportData.name : "hello"} />
					<Box
						sx={{
							padding: "32px 12px 32px 12px",
							width: "100%",
						}}
					>
						<Stack
							direction="column"
							alignItems="flex-start"
							justifyContent="flex-start"
							spacing={2}
						>
							<Typography
								component="div"
								variant="h6"
								sx={{
									textTransform: "capitalize",
									fontWeight: "600",
									textAlign: "center",
									width: "100%",
								}}
							>
								{reportData.name}
							</Typography>
							<Paper elevation={4} sx={{ p: 3 }}>
								<DataDisplay reportList={reportData.detail} />
							</Paper>
							{reportData.feedBack ? <></> : <FeedBack reportId={reportId} />}
						</Stack>
					</Box>
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Report;
