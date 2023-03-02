import { getAllReportsByAdmin } from "@/api/report";
import { selectAuthState } from "@/store/authSlice";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import Stack from "@mui/material/Stack";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdminReportList from "./AdminReportList";
import BasicTable from "../UI/BasicTable";
import ListSkeleton from "../UI/ListSkeleton";
import ListContainer from "../UI/ListContainer";
import UsersList from "./UserList";
import { useRouter } from "next/router";
import Loading from "../UI/Loading";
export default function ReportsListContainer() {
	const router = useRouter();
	const [activeList, setActiveList] = useState([]);
	const [inactiveList, setInactiveList] = useState([]);
	const [loadingData, setLoadingData] = useState(true);
	const authState = useSelector(selectAuthState);
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
	return (
		<>
			{!loadingData ? (
				<Stack
					direction={{ xs: "column", md: "column" }}
					justifyContent="space-between"
					alignItems="flex-start"
					sx={{ width: "100%" }}
				>
					<ListContainer
						title="Active Reports"
						styleProp={{ mt: 4, width: { xs: "100%", md: "100%" } }}
					>
						{activeList.length !== 0 ? (
							<AdminReportList reportsList={activeList} />
						) : (
							<ListSkeleton />
						)}
					</ListContainer>

					<ListContainer
						title="Inactive Reports"
						styleProp={{ mt: 4, width: { xs: "100%", md: "100%" } }}
					>
						{inactiveList.length !== 0 ? (
							<AdminReportList reportsList={inactiveList} />
						) : loadingData ? (
							<ListSkeleton />
						) : (
							<span> No Inactive Reports </span>
						)}
					</ListContainer>
				</Stack>
			) : (
				<Loading />
			)}
		</>
	);
}
