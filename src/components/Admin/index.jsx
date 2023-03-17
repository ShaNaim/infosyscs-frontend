import { getAllReportsByAdmin } from "@/api/report";
import { getAllUsers } from "@/api/user";
import { selectAuthState } from "@/store/authSlice";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ListContainer from "../UI/ListContainer";
import Loading from "../UI/Loading";
import AdminDashboard from "./AdminDashboard";
import ReportsListContainer from "./ReportsListContainer";
import UsersList from "./UserList";

export default function AdminHome() {
	const router = useRouter();
	const [activeList, setActiveList] = useState([]);
	const [inactiveList, setInactiveList] = useState([]);
	const [loadingData, setLoadingData] = useState(true);
	const authState = useSelector(selectAuthState);
	const [reportsList, setReportsList] = useState([]);

	useEffect(() => {
		async function getAllData() {
			try {
				if (authState.isLogedUser && authState.accessToken) {
					const reportList = await getAllReportsByAdmin(authState.accessToken);
					// setReportsList(reportList.data);
					const active = [];
					const inactive = [];
					for (let index = 0; index < reportList.data.length; index++) {
						if (reportList.data[index].user) {
							active.push(reportList.data[index]);
						} else {
							inactive.push(reportList.data[index]);
						}
					}
					setActiveList(active);
					setInactiveList(inactive);
					setLoadingData(false);
				}
			} catch (error) {
				router.push("/404");
			}
		}
		getAllData();
	}, [authState]);

	useEffect(() => {
		async function getAllData() {
			if (authState.isLogedUser && authState.accessToken) {
				const reportList = await getAllUsers(authState.accessToken);
				setReportsList(reportList.data);
			}
		}
		getAllData();
	}, [authState]);

	return (
		<Box sx={{ p: { xs: 1, md: 6 } }}>
			{!loadingData ? (
				<>
					<Paper
						sx={{
							mt: 1,
							mb: 2,
							p: 1,
							bgcolor: "#474747",
							color: "white",
							width: "100%",
							borderRadius: "12px",
						}}
					>
						<AdminDashboard
							activeList={activeList}
							inactiveList={inactiveList}
							userCount={reportsList.length}
						/>
					</Paper>
					<Box>
						<ListContainer title="Users">
							<UsersList reportsList={reportsList} />
						</ListContainer>
						<Box sx={{ width: "100%", mt: { xs: 4, md: 0 } }}>
							<ReportsListContainer
								activeList={activeList}
								inactiveList={inactiveList}
								loadingData={loadingData}
							/>
						</Box>
					</Box>
				</>
			) : (
				<Loading />
			)}
		</Box>
	);
}
