import BasicModal from "../Modal";
import Auth from "./Auth";

export default function AuthModal({ setOpen, open }) {
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<BasicModal open={open} onClose={handleClose}>
				<Auth />
			</BasicModal>
		</>
	);
}
