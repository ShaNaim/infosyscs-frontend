import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import data from "./CompanyInfo.json";

export default function Contact() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			{/* <Button
				sx={{ my: { xs: 0, md: 2 }, color: "white", display: "block" }}
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
			></Button> */}
			<Typography
				sx={{
					my: { xs: 0, md: 2 },
					display: "block",
					fontFamily: "monospace",
					fontWeight: 700,
					color: { xs: "black", md: "#5CE1E6" },
				}}
				textAlign="center"
				onClick={handleClick}
			>
				Contact Us
			</Typography>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClose}>{data.phone}</MenuItem>
				<MenuItem onClick={handleClose}>{data.email}</MenuItem>
			</Menu>
		</div>
	);
}
