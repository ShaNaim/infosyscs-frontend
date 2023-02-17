import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import AuthModal from "../Auth/AuthModal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DataDisplay, { TestReport } from "../Report/DataDisplay";

export default function FileUpload() {
	const [file, setFile] = useState(null);
	const [text, setText] = useState("");
	const [report, setReport] = useState(null);
	const [loading, setLoading] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [payment, setPayment] = useState(false);

	const handleFileChange = (event) => {
		setFile(event.target.files);
	};

	const handleClick = async () => {
		setOpenModal(true);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		// return handleClick();
		const formData = new FormData();
		for (let i = 0; i < file.length; i++) {
			formData.append("files", file[i]);
		}
		setLoading(true);
		setText("");
		try {
			const response = await axios.post(
				"http://localhost:3050/api/v1/files/single-upload",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			console.log(response.data);
			setLoading(false);
			setOpenModal(true);
			setText(response.data.data);
			setReport(response.data.data);
		} catch (error) {
			console.error(error);
			setLoading(false);
			setText("Error ");
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
						<Button
							disabled={loading}
							variant="contained"
							component="label"
							sx={{ p: 2, backgroundColor: "#076d29df" }}
							color="success"
						>
							<input type="file" multiple name="file" onChange={handleFileChange} />
						</Button>
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
						{text && payment && (
							<div>
								{/* <h5> Tottal Token Used : {report.tokenUsage} </h5>
								<h5> Computed Cost : {(report.tokenUsage / 1000) * 0.02} USD</h5> */}
								<DataDisplay reportList={report} />
								{/* <TestReport reportText={text} /> */}
							</div>
						)}
					</>
				)}
			</Box>
		</Stack>
	);
}
