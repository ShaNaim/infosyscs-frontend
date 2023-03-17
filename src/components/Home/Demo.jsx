import { downloadDemo } from "@/api/upload";
import { getFileName } from "@/utils";
import sleep from "@/utils/sleep.util";
import { Alert, Box, Button, Stack, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import fileDownload from "js-file-download";
import React from "react";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import Loading from "../UI/Loading";

export default function Demo() {
	const [demoOne, setDemoOne] = React.useState("");
	const [demoTwo, setDemoTwo] = React.useState("");
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [downloadReady, setDownloadReady] = React.useState(false);

	const handleReportDownload = async () => {
		try {
			let selectedFile;
			if (demoOne && !demoTwo) selectedFile = 1;
			if (!demoOne && demoTwo) selectedFile = 2;
			if (demoOne && demoTwo) selectedFile = 3;
			const name = getFileName(selectedFile, true);
			const file = await downloadDemo(selectedFile, true);
			fileDownload(file, name);
		} catch (error) {
			console.error(error);
		}
	};

	const handleUploadClick = async () => {
		if (!demoOne && !demoTwo) return setError(true);
		setLoading(true);
		await sleep(10000);
		setLoading(false);
		setDownloadReady(true);
	};

	const handleFileDownload = async (selectedFile) => {
		try {
			const name = getFileName(selectedFile, false);
			const file = await downloadDemo(selectedFile, false);
			fileDownload(file, name);
			setDownloadReady(false);
		} catch (error) {
			console.error(error);
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
						Buy Me a Coffee & Download
					</Button>
				) : (
					<Button
						size="sm"
						variant="contained"
						endIcon={<FileUploadIcon />}
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
