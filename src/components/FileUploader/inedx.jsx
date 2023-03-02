import { handleRequestError } from "@/api/auth";
import { uploadFileForProcessing } from "@/api/upload";
import { selectAuthState } from "@/store/authSlice";
import { checkAndFormateFiles } from "@/utils";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import AuthModal from "../Auth/AuthModal";
import BasicSelect from "../UI/BasicSelect";
import Loading from "../UI/Loading";
import NotifyAlert from "../UI/NotifyAlert";
import ReportCompletePromt from "./ReportCompletePromt";
import Typography from "@mui/material/Typography";
export default function FileUpload() {
	const authState = useSelector(selectAuthState);
	const [file, setFile] = useState(null);
	const [hasError, setHasError] = useState(false);
	const [acceptTerms, setAcceptTerms] = useState(false);
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
			if (!acceptTerms) {
				setHasError(true);
				setErrorMessage("Please Read and Accept the Terms and Conditions");
				return;
			}
			const formData = checkAndFormateFiles(file, type);
			setLoading(true);
			const response = await uploadFileForProcessing(formData, type);

			setLoading(false);
			if (!authState.isLogedUser) {
				setOpenModal(true);
			}
			setShowDownloadLink(true);
		} catch (error) {
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

	return (
		<Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
			<Box sx={{ mt: 8, color: "white" }}>
				<form onSubmit={handleSubmit}>
					<Stack
						direction={{ xs: "column", md: "row" }}
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
								sx={{
									p: 2,
									width: { xs: "280px", sm: "280px" },
									height: { xs: "56px", sm: "56px" },
									backgroundColor: "#5ce1e681",
								}}
								color="primary"
								size="large"
							>
								<input type="file" multiple name="file" onChange={handleFileChange} />
							</Button>
						</Stack>
						<BasicSelect items={fileTypes} type={type} setType={setType} />
						<Button
							disabled={loading}
							sx={{
								p: 2,
								width: { xs: "280px", sm: "280px" },
								height: { xs: "56px", sm: "56px" },
								backgroundColor: "#5ce1e681",
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
				</form>
				<FormGroup sx={{ margin: "18px 8px 0 24px" }}>
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
			<NotifyAlert open={hasError} setOpen={setHasError} type="error" message={errorMessage} />
		</Stack>
	);
}
