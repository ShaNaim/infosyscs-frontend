import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import Profile from "./Profile";

const pages = [
	{ name: "About", value: "/about" },
	{ name: "Terms", value: "/terms-and-conditions" },
];
const settings = ["Dashboard", "Logout"];
const appName = "InfoSysCS";

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
		<AppBar sx={{ background: "#474747" }} position="static">
			<Container sx={{ height: "100%" }} maxWidth="xl">
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
								}}
								src="/favicon.svg"
								alt="Picture of the Company"
								width={80}
								height={80}
							/>
						</IconButton>
					</Box>
					<Link href="/">
						<Typography
							variant="h6"
							noWrap
							component="h2"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								textDecoration: "none",
								color: "#5CE1E6",
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
								}}
								src="/favicon.svg"
								alt="Picture of the Company"
								width={40}
								height={40}
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
								<MenuItem key={page.value} onClick={handleCloseNavMenu}>
									<Typography sx={{ fontFamily: "monospace", fontWeight: 700 }} textAlign="center">
										{page.name}
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
								color: "#5CE1E6",
							}}
						>
							{appName}
						</Typography>
					</Link>
					<Box sx={{ flexGrow: 2 }} />
					<Box sx={{ flexGrow: 0, mr: 3, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Link key={page.name} href={page.value}>
								<Button sx={{ my: 2, color: "white", display: "block" }}>
									<Typography
										sx={{ fontFamily: "monospace", fontWeight: 700, color: "#5CE1E6" }}
										textAlign="center"
									>
										{page.name}
									</Typography>
								</Button>
							</Link>
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
