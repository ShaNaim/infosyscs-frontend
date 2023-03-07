import { downloadDemo } from "@/api/upload";
import sleep from "@/utils/sleep.util";
import DownloadIcon from "@mui/icons-material/Download";
import { Alert, Box, Button, Stack, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import React from "react";

import Loading from "../UI/Loading";

export default function Demo() {
	const [demoOne, setDemoOne] = React.useState(null);
	const [demoTwo, setDemoTwo] = React.useState(null);
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [downloadReady, setDownloadReady] = React.useState(false);

	const handleReportDownload = async () => {
		try {
			let selectedFile;
			if (demoOne && !demoTwo) selectedFile = 1;
			if (!demoOne && demoTwo) selectedFile = 2;
			if (demoOne && demoTwo) selectedFile = 3;

			await downloadDemo(selectedFile, true);
		} catch (error) {
			console.log(error);
		}
	};

	const handleUploadClick = async () => {
		if (!demoOne && !demoTwo) return setError(true);
		setLoading(true);
		await sleep(5000);
		setLoading(false);
		setDownloadReady(true);
	};

	const handleFileDownload = async (selectedFile) => {
		try {
			await downloadDemo(selectedFile, false);
			setDownloadReady(false);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			{error && (
				<Alert
					sx={{ borderRadius: "16px", mb: 2 }}
					variant="filled"
					onClose={() => setError(false)}
					severity="error"
				>
					Please Select Atleast One File
				</Alert>
			)}
			<Stack
				direction={{ xs: "column", md: "column" }}
				justifyContent="center"
				alignItems="center"
				spacing={2}
				sx={{ width: "100%" }}
			>
				<Stack
					direction={{ xs: "column", md: "row" }}
					justifyContent="space-between"
					alignItems="flex-start"
					spacing={2}
					sx={{ width: "100%" }}
				>
					<Box sx={{ p: 1, backgroundColor: "#524e4e", borderRadius: "16px", width: "100%" }}>
						<Typography
							variant="h6"
							component="h2"
							sx={{
								fontWeight: 300,
								fontSize: { xs: "16px", md: "18px" },
								color: "inherit",
								textDecoration: "none",
							}}
						>
							<Checkbox
								color="primary"
								sx={{ color: "white" }}
								value={demoOne}
								onClick={(e) =>
									setDemoOne((prev) => {
										setDownloadReady(false);
										return !prev;
									})
								}
							/>
							Patowarikandi Women Group
							<IconButton
								color="primary"
								size="sm"
								variant="contained"
								onClick={() => handleFileDownload(1)}
							>
								<DownloadIcon sx={{ color: "#5ce1e681" }} />
							</IconButton>
						</Typography>
					</Box>
					<Box sx={{ p: 1, backgroundColor: "#524e4e", borderRadius: "16px", width: "100%" }}>
						<Typography
							variant="h6"
							component="h2"
							sx={{
								fontWeight: 300,
								fontSize: { xs: "16px", md: "18px" },
								color: "inherit",
								textDecoration: "none",
							}}
						>
							<Checkbox
								color="primary"
								sx={{ color: "white" }}
								value={demoTwo}
								onClick={(e) =>
									setDemoTwo((prev) => {
										setDownloadReady(false);
										return !prev;
									})
								}
							/>
							Teaching Aid Recreate
							<IconButton
								color="primary"
								size="sm"
								variant="contained"
								onClick={() => handleFileDownload(2)}
							>
								<DownloadIcon sx={{ color: "#5ce1e681" }} />
							</IconButton>
						</Typography>
					</Box>
				</Stack>
				{downloadReady ? (
					<Button
						size="sm"
						variant="contained"
						endIcon={<DownloadIcon />}
						onClick={handleReportDownload}
						sx={{ backgroundColor: "#5ce1e681" }}
					>
						Download Report
					</Button>
				) : (
					<Button
						size="sm"
						variant="contained"
						endIcon={<DownloadIcon />}
						onClick={handleUploadClick}
						sx={{ backgroundColor: "#5ce1e681" }}
					>
						Upload Demo File
					</Button>
				)}
			</Stack>
			{loading && <Loading />}
		</>
	);
}
