import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styles from "@/styles/Footer.module.css";
import data from "./CompanyInfo.json";
import Image from "next/image";
import Link from "next/link";
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
