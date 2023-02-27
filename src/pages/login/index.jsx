import React from "react";
import Box from "@mui/material/Box";
import Auth from "@/components/Auth/Auth";
import Head from "next/head";
import HeadUI from "@/components/UI/HeadUI";
export default function index() {
	return (
		<>
			<HeadUI pageTitle={"Login"} />
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
