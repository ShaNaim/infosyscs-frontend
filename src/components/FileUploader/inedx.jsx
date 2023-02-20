import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { makeid, checkAndFormateFiles } from "@/utils";
import { uploadFileForProcessing } from "../../api/upload";
import AuthModal from "../Auth/AuthModal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import NotifyAlert from "../UI/NotifyAlert";
import DataDisplay, { TestReport } from "../Report/DataDisplay";
import { setCookie } from "cookies-next";
import BasicSelect from "../UI/BasicSelect";
export default function FileUpload() {
	const [file, setFile] = useState(null);
	const [text, setText] = useState("");
	const [report, setReport] = useState(null);
	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [payment, setPayment] = useState(false);
	const [type, setType] = useState("");
	const fileTypes = [
		{
			value: "pdf",
			name: "FGD",
		},
		{
			value: "docx",
			name: "KLL",
		},
	];
	const handleFileChange = (event) => {
		setFile(event.target.files);
	};

	const handleClick = async () => {
		setOpenModal(true);
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			setCookie("userFileId", makeid());
			const formData = checkAndFormateFiles(file, type);
			console.log(formData);
			// return handleClick();
			setLoading(true);
			setText("");

			const response = await uploadFileForProcessing(formData, type);
			console.log(response.data);
			setLoading(false);
			setOpenModal(true);
			setText(response.data.data);
			setReport(response.data.data);
		} catch (error) {
			if (error.fileError) {
				setHasError(true);
				setErrorMessage(error.message);
			}
			if (error?.response?.data?.errors) {
				setHasError(true);
				setErrorMessage(error?.response?.data?.errors.description);
			} else {
				setHasError(true);
				setErrorMessage("Something Went Wrong , Please Try Again");
			}
			setLoading(false);
			setPayment(false);
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
						<AuthModal setOpen={setOpenModal} open={openModal} setPayment={setPayment} />
					</Stack>
				</form>
			</Box>
			<Box sx={{ p: 3 }}>
				{loading && !text ? (
					<CircularProgress />
				) : (
					<>
						{payment ? (
							<div>
								{/* <h5> Tottal Token Used : {report.tokenUsage} </h5>
								<h5> Computed Cost : {(report.tokenUsage / 1000) * 0.02} USD</h5> */}
								<DataDisplay reportList={report} />
								{/* <TestReport reportText={text} /> */}
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
