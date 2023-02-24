import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function ReportCompletePromt({ reportInfo }) {
	const router = useRouter();
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={{ xs: 4, sm: 4 }}
		>
			<Typography
				variant="h6"
				component="span"
				sx={{
					mr: 2,
					fontWeight: 500,
					fontSize: "18px",
					color: "inherit",
					textDecoration: "none",
				}}
			>
				Your report is ready , Click the download button to continue
			</Typography>
			<Button
				sx={{ width: "180px", height: "50px" }}
				variant="contained"
				endIcon={<DownloadIcon />}
				onClick={() => router.push("/dashboard")}
			>
				Download
			</Button>
		</Stack>
	);
}
