import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReportCompletePromt from "../FileUploader/ReportCompletePromt";
import Head from "next/head";
import ReportList from "./ReportList";
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
			<Head>
				<title>InfoSysCs | Dashboard</title>
				<meta name="description" content="InfoSysCs Login page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={{ xs: 4, sm: 4 }}
			>
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
					Welcome {user.name}
				</Typography>
				<Box
					sx={{
						p: 4,
						backgroundColor: "#7c77774c",
					}}
				>
					{/* <ReportCompletePromt /> */}
					<ReportList />
				</Box>
			</Stack>
		</>
	);
}
