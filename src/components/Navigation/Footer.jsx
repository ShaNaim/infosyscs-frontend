import Toolbar from "@mui/material/Toolbar";
import React from "react";

import data from "./CompanyInfo.json";
import TestFooter from "./TestFooter";

export default function Footer() {
	const companyInfo = data;
	return (
		<>
			<Toolbar
				sx={{
					backgroundColor: "rgb(71, 71, 71)",
					color: "#5ce1e6",
				}}
			>
				<TestFooter />
			</Toolbar>
		</>
	);
}
