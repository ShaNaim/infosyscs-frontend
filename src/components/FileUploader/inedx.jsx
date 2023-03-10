import { handleRequestError } from "@/api/auth";
import { uploadFileForProcessing } from "@/api/upload";
import { selectAuthState } from "@/store/authSlice";
import { setReportState } from "@/store/reportSlice";
import { checkAndFormateFiles } from "@/utils";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthModal from "../Auth/AuthModal";
import BasicSelect from "../UI/BasicSelect";
import Loading from "../UI/Loading";
import NotifyAlert from "../UI/NotifyAlert";
import FileNameDialog from "./FileNameDialog";
import ReportCompletePromt from "./ReportCompletePromt";

export default function FileUpload() {
	const authState = useSelector(selectAuthState);
	const [file, setFile] = useState("");
	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [acceptTerms, setAcceptTerms] = useState(false);
	const [loading, setLoading] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const [openNameDialog, setOpenNameDialog] = useState(false);

	const [showDownloadLink, setShowDownloadLink] = useState(false);
	const [type, setType] = useState("");
	const dispatch = useDispatch();
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
	const submitName = async (name) => {
		try {
			console.log(name);
			const formData = checkAndFormateFiles(file, type);
			if (!authState.isLogedUser) {
				return setOpenModal(true);
			}
			setLoading(true);
			const response = await uploadFileForProcessing(formData, type, name);
			dispatch(
				setReportState({
					hasDisconnectedReport: true,
					reportRef: response.data.reportRef,
					reportId: response.data.reportId,
				})
			);
			setLoading(false);

			setShowDownloadLink(true);
		} catch (error) {
			console.log({ error });
			setLoading(false);
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
		}
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			if (!acceptTerms) {
				setHasError(true);
				setErrorMessage("Please Read and Accept the Terms and Conditions");
				return;
			}
			setOpenNameDialog(true);
		} catch (error) {
			setLoading(false);
			console.error(error);
		}
	};

	return (
		<Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
			<Box sx={{ mt: 0, color: "white", width: "100%" }}>
				<form onSubmit={handleSubmit}>
					<Stack
						direction={{ xs: "column", lg: "row" }}
						justifyContent="center"
						alignItems="center"
						spacing={{ xs: 4, lg: 1 }}
						sx={{ width: { xs: "100%", sm: "100%" } }}
					>
						<Stack
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={0}
							sx={{ width: { xs: "100%", sm: "80%", lg: "40%" } }}
						>
							<Button
								disabled={loading}
								variant="contained"
								component="label"
								sx={{
									p: 2,
									width: { xs: "90%", sm: "80%", sm: "60%" },
									height: { xs: "56px", sm: "56px" },
									backgroundColor: "#5ce1e681",
								}}
								color="primary"
								size="large"
							>
								<input type="file" multiple name="file" onChange={handleFileChange} />
							</Button>
						</Stack>
						<Box sx={{ width: { xs: "90%", sm: "50%", lg: "20%" } }}>
							<BasicSelect items={fileTypes} type={type} setType={setType} />
						</Box>
						<Stack
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={0}
							sx={{ width: { xs: "100%", sm: "80%", lg: "40%" } }}
						>
							<Button
								disabled={loading}
								sx={{
									p: 2,
									width: { xs: "90%", sm: "60%" },
									height: { xs: "56px", sm: "56px" },
									backgroundColor: "#5ce1e681",
									m: { xs: 0, sm: 0 },
									mb: 1,
								}}
								variant="contained"
								type="submit"
								color="primary"
								size="large"
							>
								Upload
							</Button>
						</Stack>
					</Stack>
				</form>
				<FormGroup sx={{ ml: 3, mt: 1 }}>
					<FormControlLabel
						sx={{ width: { xs: "100%", md: "40%" } }}
						control={
							<Checkbox
								color="primary"
								sx={{ color: "white" }}
								value={acceptTerms}
								onClick={(e) => setAcceptTerms((prev) => !prev)}
							/>
						}
						label="Acknowledgement of Terms and Conditions"
					/>
				</FormGroup>
				<Typography
					variant="body2"
					component="div"
					sx={{
						fontWeight: 100,
						fontSize: "16px",
						color: "inherit",
						textDecoration: "none",
						px: 3,
						pb: 3,
						pt: 1,
					}}
				>
					By using the Software, you acknowledge that you have read these{" "}
					<Typography
						variant="body1"
						component="span"
						sx={{
							fontWeight: 600,
							fontSize: "16px",
							color: "#5ce1e681",
							textDecoration: "underline",
						}}
					>
						<Link href="/terms-and-conditions">terms and conditions</Link>
					</Typography>
					, understand them, and agree to be bound by them.
				</Typography>
			</Box>
			{loading ? (
				<>
					{/* <CircularProgress /> */}
					<Loading />
				</>
			) : (
				<>
					{showDownloadLink ? (
						<Box sx={{ p: 3 }}>
							<ReportCompletePromt />
						</Box>
					) : (
						<></>
					)}
				</>
			)}
			<AuthModal setOpen={setOpenModal} open={openModal} />
			<FileNameDialog setOpen={setOpenNameDialog} open={openNameDialog} submitName={submitName} />
			<NotifyAlert open={hasError} setOpen={setHasError} type="error" message={errorMessage} />
		</Stack>
	);
}
