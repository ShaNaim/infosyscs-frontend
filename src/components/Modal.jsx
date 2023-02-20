import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: { xs: "100%", md: "80%", lg: "50%" },
	border: "1px solid #0000002f",
	borderRadius: "18px",
	boxShadow: 24,
};

export default function BasicModal({ onClose, open, children }) {
	return (
		<div>
			<Modal
				open={open}
				onClose={onClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>{children}</Box>
			</Modal>
		</div>
	);
}
