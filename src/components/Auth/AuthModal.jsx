import styles from "@/styles/Auth.module.css";
import React from "react";
import BasicModal from "../Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Register from "./Register";
export default function AuthModal({ setOpen, open, setPayment }) {
	const handleClose = () => {
		setPayment(true);
		setOpen(false);
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
						<Button
							sx={{
								width: { xs: "80%", md: "40%", lg: "50%" },
								height: "56px",
								mb: "12px",
								backgroundColor: "#076d29df",
							}}
							variant="contained"
							color="success"
							onClick={handleClose}
						>
							Sign In With Google
						</Button>
					</Stack>
				</Box>
			</BasicModal>
		</>
	);
}
