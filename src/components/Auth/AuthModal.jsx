import styles from "@/styles/Auth.module.css";
import React from "react";
import Link from "next/link";
import BasicModal from "../Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Register from "./Register";
import { handleGoogleLogin } from "../../api/auth";
import Image from "next/image";
export default function AuthModal({ setOpen, open, setPayment }) {
	const google = () => {
		window.open("http://localhost:3050/api/v1/auth/google", "_self");
	};

	const github = () => {
		window.open("http://localhost:5000/auth/github", "_self");
	};

	const facebook = () => {
		window.open("http://localhost:5000/auth/facebook", "_self");
	};
	const handleClose = () => {
		handleGoogleLogin();
		// setPayment(true);
		// setOpen(false);
	};
	return (
		<>
			<BasicModal open={open} onClose={handleClose}>
				<Box
					sx={{
						width: "100%",
						minHeight: "50vh",
						backgroundColor: "#fff",
						px: { xs: 2, md: 4, lg: 8 },
						py: 8,
						borderRadius: "18px",
					}}
				>
					<Stack direction="column" justifyContent="space-between" alignItems="center" spacing={1}>
						<Stack
							direction="column"
							justifyContent="space-between"
							alignItems="center"
							spacing={4}
							sx={{ width: "100%" }}
						>
							<Register />
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								After Completing the payment Process User will be redirected to the download page
							</Typography>
							<div className={styles.devider}>
								<span>OR</span>
							</div>
						</Stack>
						{/* <Link href="/api/login" passHref> */}
						<Button
							sx={{
								width: { xs: "80%", md: "40%", lg: "50%" },
								height: "56px",
								mb: "12px",
								backgroundColor: "#076d29df",
							}}
							variant="contained"
							color="success"
							onClick={google}
						>
							<Image
								src="/google.png"
								alt="Picture of the author"
								width={20}
								height={20}
								style={{ marginRight: "10px" }}
							/>
							Sign In With Google
						</Button>
						{/* </Link> */}
					</Stack>
				</Box>
			</BasicModal>
		</>
	);
}
