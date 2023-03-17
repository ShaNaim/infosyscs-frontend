import { getReportData } from "@/api/report";
import { DownLoadPDF } from "@/components/Report/DownLoadPDF";
import FeedBack from "@/components/Report/FeedBack";
import ReportPreview from "@/components/Report/ReportPreview";
import HeadUI from "@/components/UI/HeadUI";
import Loading from "@/components/UI/Loading";
import { selectAuthState } from "@/store/authSlice";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
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

				setReportData(reportList.data);
			}
		}
		try {
			reportId && getAllData();
		} catch (error) {
			console.error(error);
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
							alignItems="center"
							justifyContent="flex-start"
							spacing={2}
							sx={{
								padding: "32px 12px 32px 12px",
								width: "100%",
							}}
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

							<Stack
								sx={{
									width: "100%",
								}}
								direction="column"
								alignItems="center"
								justifyContent="center"
								spacing={2}
							>
								<DownLoadPDF reportName={reportData.name} displayData={reportData.detail} />
								<Typography
									component="span"
									variant="h6"
									sx={{
										textTransform: "capitalize",
										fontWeight: "400",
										textAlign: "center",
										width: "100%",
									}}
								>
									Preview
								</Typography>
								<ReportPreview reportList={reportData.detail} />
							</Stack>
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
