import React from "react";
import UsersList from "./UserList";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ListContainer from "../UI/ListContainer";
import ReportsListContainer from "./ReportsListContainer";
export default function AdminHome() {
	return (
		<Box sx={{ p: { xs: 1, md: 6 } }}>
			<ListContainer title="User">
				<UsersList />
			</ListContainer>
			<Box sx={{ width: "100%", mt: { xs: 4, md: 0 } }}>
				<ReportsListContainer />
			</Box>
		</Box>
	);
}
