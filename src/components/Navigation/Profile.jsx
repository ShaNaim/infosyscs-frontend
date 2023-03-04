import * as React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { selectAuthState } from "@/store/authSlice";
import { useSelector } from "react-redux";
import { setAuthState } from "@/store/authSlice";
export default function Profile({ settings }) {
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const authState = useSelector(selectAuthState);
	const router = useRouter();
	const dispatch = useDispatch();
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const handleNav = () => {
		setAnchorElUser(null);
		router.push("/dashboard");
	};
	const handleLogout = () => {
		dispatch(
			setAuthState({
				isLogedUser: false,
				accessToken: null,
				user: null,
			})
		);
		router.push("/login");
	};

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: "45px" }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				<MenuItem onClick={handleNav}>
					<Typography textAlign="center"> Dashboard </Typography>
				</MenuItem>
				<MenuItem onClick={handleLogout}>
					<Typography textAlign="center"> Logout </Typography>
				</MenuItem>
			</Menu>
		</Box>
	);
}
