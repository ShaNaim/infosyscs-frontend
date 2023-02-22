import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Typography from "@mui/material/Typography";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
	return (
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
				Welcome
			</Typography>
		</Stack>
	);
}
