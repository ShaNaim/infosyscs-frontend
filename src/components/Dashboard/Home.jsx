import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import React from "react";
import FileUpload from "../FileUploader/inedx";
import ReportList from "./ReportList";
import dayjs from "dayjs";

export default function Home({ user }) {
	// React.useEffect(async () => {
	// 	// const reportsList = await getAllReports(isAuth);
	// 	// if (!reportsList)
	// 	// 	return {
	// 	// 		props: { accessToken: isAuth, user: user.data, reportsList: [foundAndConnected] },
	// 	// 	};
	// }, []);
	return (
		<>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={{ xs: 4, sm: 4 }}
			>
				<Stack
					direction={{ xs: "column", md: "column" }}
					justifyContent="flex-start"
					alignItems="flex-start"
					spacing={{ xs: 4, sm: 4 }}
					sx={{ mt: 8 }}
				>
					<Paper sx={{ width: "100%", p: 2, backgroundColor: "#1c6769d1", color: "white" }}>
						<span style={{ fontSize: "18px", fontWeight: "600" }}>Personal Information</span>
						<Stack
							direction={{ xs: "column", md: "row" }}
							justifyContent="space-between"
							alignItems="flex-start"
							spacing={2}
							sx={{ width: "100%", marginTop: "12px" }}
						>
							<Paper elevation={2} sx={{ p: 1, width: { xs: "100%", lg: "50%" } }}>
								<Stack
									direction={{ xs: "column", md: "column" }}
									justifyContent="flex-start"
									alignItems="flex-start"
									spacing={2}
								>
									<TextField
										sx={{ width: "100%" }}
										id="user-name"
										label="Name"
										value={user.name}
										variant="filled"
									/>
									<TextField
										sx={{ width: "100%" }}
										id="user-email"
										label="Email"
										value={user.email}
										variant="filled"
										disabled
									/>
								</Stack>
							</Paper>
							<Paper elevation={2} sx={{ p: 1, width: { xs: "100%", lg: "50%" } }}>
								<Stack
									direction={{ xs: "column", md: "column" }}
									justifyContent="flex-start"
									alignItems="flex-start"
									spacing={2}
								>
									<TextField
										sx={{ width: "100%" }}
										id="user-phone"
										label="Phone"
										value={user.phone}
										variant="filled"
										disabled
									/>
									<TextField
										sx={{ width: "100%" }}
										id="user-science"
										label="User Science"
										value={dayjs(user.createdAt).format("MMM D, YYYY")}
										variant="filled"
									/>
								</Stack>
							</Paper>
						</Stack>
					</Paper>
					<Paper elevation={2} sx={{ p: 3, backgroundColor: "#474747" }}>
						<span
							style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px", color: "white" }}
						>
							Create New Report
						</span>
						<FileUpload />
					</Paper>
				</Stack>
				<Box
					sx={{
						width: "100%",
						p: { xs: 1, md: 4 },
						backgroundColor: "#bdb1b14b",
						borderRadius: "8px",
					}}
				>
					{/* <ReportCompletePromt /> */}
					<span style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>Reports</span>

					<ReportList />
				</Box>
			</Stack>
		</>
	);
}
