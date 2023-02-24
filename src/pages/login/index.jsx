import React from "react";
import Box from "@mui/material/Box";
import Auth from "@/components/Auth/Auth";
import Head from "next/head";
export default function index() {
	return (
		<>
			<Head>
				<title>InfoSysCs | Login</title>
				<meta name="description" content="InfoSysCs Login page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Box
				sx={{
					margin: "auto",
					px: {
						xs: "2%",
						md: "10%",
						lg: "20%",
					},
				}}
			>
				<Auth login={true} isPage={true} />
			</Box>
		</>
	);
}
