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
import ReportInfo from "@/components/Admin/UI/ReportInfo";
import FileDetails from "@/components/Admin/UI/FileDetails";
const ReportDetails = () => {
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
						<Stack direction="column" alignItems="center" justifyContent="flex-start" spacing={2}>
							<Paper sx={{ p: 3 }}>
								<Stack
									direction={{ xs: "column", md: "row" }}
									alignItems="flex-start"
									justifyContent="space-between"
									spacing={2}
								>
									<ReportInfo data={reportData} />
									<Box>
										<Typography
											component="span"
											sx={{
												fontSize: "18px",
												fontWeight: 400,
											}}
										>
											Files Details
										</Typography>
										<Box>
											<Stack
												direction={{ xs: "column", md: "column" }}
												justifyContent="space-between"
												alignItems="center"
												spacing={2}
											>
												{reportData.file?.fileDetails.map((file, index) => {
													return (
														<>
															<FileDetails name={file.name} size={file.size} index={index + 1} />
														</>
													);
												})}
											</Stack>
										</Box>
									</Box>
								</Stack>
							</Paper>
							<Paper>
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
									Feedback
								</Typography>
								{reportData.feedBack ? (
									<Box sx={{ p: 4 }}>
										<Stack
											direction="column"
											alignItems="flex-start"
											justifyContent="flex-start"
											spacing={4}
										>
											<FeedBackDetails data={reportData.feedBack} />
										</Stack>
									</Box>
								) : (
									<></>
								)}
							</Paper>
							<Paper elevation={4} sx={{ p: 3 }}>
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
								<DataDisplay smallFont={true} reportList={reportData.detail} />
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

export default ReportDetails;
