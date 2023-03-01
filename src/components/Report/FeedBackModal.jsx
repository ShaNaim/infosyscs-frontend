import React from "react";
import BasicModal from "../Modal";
import FeedBack from "./FeedBack";
export default function FeedBackModal({ open, setOpen, reportId }) {
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<BasicModal open={open} onClose={handleClose}>
				<FeedBack reportId={reportId} />
			</BasicModal>
		</>
	);
}
