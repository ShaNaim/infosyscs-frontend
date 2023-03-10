import styles from "@/styles/Loading.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sleep from "@/utils/sleep.util";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

export default function () {
	const [open, setOpen] = useState(false);
	const [loadingText, setLoadingText] = useState("Loading......");
	const handleClose = () => {
		setLoadingText("Loading......");
		setOpen(false);
	};
	useEffect(() => {
		setOpen(true);
		async function renderLoadin() {
			await sleep(4000);
			setLoadingText("Preparing your files..");
			await sleep(2000);
			setLoadingText("Processing your files..");
			await sleep(6000);
			setLoadingText("Please Don't Close the window");
		}
		renderLoadin();
		return () => {
			handleClose();
		};
	}, []);

	return (
		<Modal
			open={open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Stack direction="column" justifyContent="center" alignItems="center" spacing={0}>
					<Image
						style={{ borderRadius: "50%", boxShadow: `7px 8px 10px -1px #5be0e5c0` }}
						src="/loading.gif"
						alt="Picture of the author"
						width={200}
						height={200}
					/>
					<div className={styles.loadingIcon}>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<span style={{ color: "whitesmoke", fontSize: "18px" }}> {loadingText} </span>
				</Stack>
			</Box>
		</Modal>
	);
}
