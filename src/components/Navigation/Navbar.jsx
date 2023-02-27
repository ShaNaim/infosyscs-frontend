import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import Link from "next/link";
import Profile from "./Profile";
import { useRouter } from "next/router";
import Image from "next/image";

import { getCookie, getCookies, hasCookie, deleteCookie } from "cookies-next";

const pages = ["About", "Pricing"];
const settings = ["Dashboard", "Logout"];
const appName = "InfoSysCs";

function NavBar({ isLogedUser }) {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const router = useRouter();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar sx={{ background: " rgba(74, 195, 199, 0.856)" }} position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							{/* <MenuIcon /> */}
							<Image
								style={{
									borderRadius: "50%",
									boxShadow: `7px 8px 10px -1px #5be0e5c0`,
								}}
								src="/loading.gif"
								alt="Picture of the author"
								width={30}
								height={30}
							/>
						</IconButton>
					</Box>
					<Link href="/">
						<Typography
							variant="h6"
							noWrap
							component="span"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							{appName}
						</Typography>
					</Link>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							{/* <MenuIcon /> */}
							<Image
								style={{
									borderRadius: "50%",
									boxShadow: `7px 8px 10px -1px #5be0e5c0`,
								}}
								src="/loading.gif"
								alt="Picture of the author"
								width={30}
								height={30}
							/>
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography sx={{ fontFamily: "monospace", fontWeight: 700 }} textAlign="center">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Link href="/">
						<Typography
							variant="h5"
							noWrap
							component="span"
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							{appName}
						</Typography>
					</Link>
					<Box sx={{ flexGrow: 2 }} />
					<Box sx={{ flexGrow: 0, mr: 3, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								<Typography sx={{ fontFamily: "monospace", fontWeight: 700 }} textAlign="center">
									{page}
								</Typography>
							</Button>
						))}
					</Box>
					{isLogedUser ? (
						<Profile settings={settings} />
					) : (
						<Button
							variant="outlined"
							onClick={() => {
								return router.push("/login");
							}}
							color="secondary"
						>
							<Typography
								sx={{ fontFamily: "monospace", fontWeight: 700, color: "white" }}
								textAlign="center"
							>
								SIGNUP
							</Typography>
						</Button>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default NavBar;
