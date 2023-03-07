import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function FileNameDialog({ open, setOpen, submitName }) {
	const [name, setName] = React.useState("");
	const [nameError, setNameError] = React.useState(false);

	const handleClose = () => {
		if (name !== "") {
			submitName(name);
			setOpen(false);
			return;
		}
		setNameError(true);
	};

	return (
		<Dialog
			maxWidth="md"
			fullWidth={true}
			open={open}
			onClose={() => setOpen(false)}
			TransitionComponent={Transition}
		>
			<DialogTitle>Report Name</DialogTitle>
			<DialogContent>
				<DialogContentText>Provide a name for the Report.</DialogContentText>
				<TextField
					error={nameError}
					autoFocus
					margin="dense"
					id="report_name"
					label="Report Name"
					type="text"
					fullWidth
					variant="standard"
					value={name}
					onChange={(e) => setName(e.target.value)}
					helperText={nameError && "Please Provice a Name for the Report."}
					onClick={() => setNameError(false)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setOpen(false)}>Cancel</Button>
				<Button onClick={handleClose}>Submit</Button>
			</DialogActions>
		</Dialog>
	);
}
