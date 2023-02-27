import { handleRequestError } from "@/api/auth";
import { uploadFileForProcessing } from "@/api/upload";
import { selectAuthState } from "@/store/authSlice";
import { checkAndFormateFiles } from "@/utils";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import AuthModal from "../Auth/AuthModal";
import BasicSelect from "../UI/BasicSelect";
import Loading from "../UI/Loading";
import NotifyAlert from "../UI/NotifyAlert";
import ReportCompletePromt from "./ReportCompletePromt";

export default function FileUpload() {
	const authState = useSelector(selectAuthState);
	const [file, setFile] = useState(null);
	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [showDownloadLink, setShowDownloadLink] = useState(false);
	const [type, setType] = useState("");
	const fileTypes = [
		{
			value: "pdf",
			name: "PDF",
		},
		{
			value: "docx",
			name: "DOCX",
		},
	];
	const handleFileChange = (event) => {
		setFile(event.target.files);
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const formData = checkAndFormateFiles(file, type);
			setLoading(true);
			const response = await uploadFileForProcessing(formData, type);

			setLoading(false);
			if (!authState.isLogedUser) {
				setOpenModal(true);
			}
			setShowDownloadLink(true);
		} catch (error) {
			if (error.fileError) {
				setHasError(true);
				setErrorMessage(error.message);
			} else if (error?.response?.data?.errors) {
				setHasError(true);
				setErrorMessage(handleRequestError(error.response.data));
			} else {
				setHasError(true);
				setErrorMessage("Something Went Wrong , Please Try Again");
			}
			setLoading(false);
		}
	};

	return (
		<Stack direction="column" justifyContent="center" alignItems="center" spacing={4}>
			<Box sx={{ mt: 3 }}>
				<form onSubmit={handleSubmit}>
					<Stack
						direction={{ xs: "column", sm: "row" }}
						justifyContent="center"
						alignItems="center"
						spacing={{ xs: 4, sm: 12 }}
					>
						<Stack
							direction="column"
							justifyContent="flex-start"
							alignItems="flex-start"
							spacing={0}
						>
							<Button
								disabled={loading}
								variant="contained"
								component="label"
								sx={{ p: 2, backgroundColor: "#076d29df" }}
								color="success"
							>
								<input type="file" multiple name="file" onChange={handleFileChange} />
							</Button>
							<span
								style={{
									fontSize: "14px",
									fontFamily: "monospace",
									marginLeft: "4px",
									color: "#0000006c",
								}}
							>
								Maximum 5 Files
							</span>
						</Stack>
						<BasicSelect items={fileTypes} type={type} setType={setType} />
						<Button
							disabled={loading}
							sx={{ p: 2, width: { xs: "100%", sm: "20%" }, backgroundColor: "#076d29a2" }}
							variant="contained"
							type="submit"
							color="success"
						>
							Upload
						</Button>
						<AuthModal setOpen={setOpenModal} open={openModal} />
					</Stack>
				</form>
			</Box>
			<Box sx={{ p: 3 }}>
				{loading ? (
					<>
						{/* <CircularProgress /> */}
						<Loading />
					</>
				) : (
					<>
						{showDownloadLink ? (
							<div>
								<ReportCompletePromt />
							</div>
						) : (
							<></>
						)}
					</>
				)}
			</Box>
			<NotifyAlert open={hasError} setOpen={setHasError} type="error" message={errorMessage} />
		</Stack>
	);
}
