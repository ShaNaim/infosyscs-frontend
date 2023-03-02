import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import data from "./CompanyInfo.json";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function TestFooter() {
	const companyInfo = data;
	return (
		<>
			<Box sx={{ width: "100%", pb: "10px" }}>
				<Stack
					direction={{ xs: "column", md: "row" }}
					justifyContent="flex-start"
					alignItems="flex-start"
					spacing={{ xs: 4, md: 18 }}
					sx={{ width: "100%" }}
				>
					<Box sx={{ width: "100%", height: "100%", mt: 3 }}>
						<Stack
							direction={{ xs: "column", md: "column" }}
							justifyContent="space-around"
							alignItems="flex-start"
							spacing={6}
							sx={{ width: "100%", height: "100%" }}
						>
							<div>
								<LinkPoints url="/about">Home</LinkPoints>
								<LinkPoints url="/about">About</LinkPoints>
								<LinkPoints url="#">Pricing</LinkPoints>
								<LinkPoints url="/about">T & C</LinkPoints>
								<LinkPoints url="/admin">Admin</LinkPoints>
							</div>
							<div>
								<Typography
									sx={{
										fontFamily: "monospace",
										fontWeight: 600,
										color: "inherit",
										textDecoration: "none",
									}}
									variant="subtitle1"
									component="div"
								>
									About the company
								</Typography>
								<Typography variant="body2" component="p">
									{companyInfo.about}
								</Typography>
							</div>
							<p>{companyInfo.name} © 2023</p>
						</Stack>
					</Box>
					<Box sx={{ width: "100%" }}>
						<Stack
							direction={{ xs: "column", md: "column" }}
							justifyContent="center"
							alignItems="center"
							spacing={6}
							sx={{ width: "100%", height: "100%" }}
						>
							<Image
								style={{ objectFit: "cover" }}
								src="/favicon.svg"
								alt="Picture of the author"
								width={300}
								height={300}
							/>
						</Stack>
					</Box>
					<Box sx={{ width: "100%", height: "100%", mt: 3 }}>
						<Stack
							direction={{ xs: "column", md: "column" }}
							justifyContent="space-around"
							alignItems="flex-start"
							spacing={6}
							sx={{ width: "100%", height: "100%" }}
						>
							<Stack
								direction="column"
								justifyContent="flex-start"
								alignItems="flex-start"
								spacing={2}
								sx={{ width: "100%", height: "100%", mt: 3 }}
							>
								<IconLinks>
									<LocationOnIcon />
									<div>
										<span> {companyInfo.address.address} </span>
										<div>
											{companyInfo.address.area} , {companyInfo.address.city}
										</div>
									</div>
								</IconLinks>

								<IconLinks>
									<PhoneIcon />
									<p>{companyInfo.phone}</p>
								</IconLinks>

								<IconLinks>
									<EmailIcon />
									<div>
										<a href="mailto:support@company.com">support@company.com</a>
									</div>
								</IconLinks>
							</Stack>

							<Stack
								direction="row"
								justifyContent="flex-start"
								alignItems="flex-start"
								spacing={2}
								sx={{ width: "100%", height: "100%", mt: 3 }}
							>
								<FooterIcon>
									<a href="#">
										<FacebookIcon sx={{ height: "100%", width: "100%" }} />
									</a>
								</FooterIcon>
								<FooterIcon>
									<a href="#">
										<LinkedInIcon sx={{ height: "100%", width: "100%" }} />
									</a>
								</FooterIcon>
								<FooterIcon>
									<a href="#">
										<TwitterIcon sx={{ height: "100%", width: "100%" }} />
									</a>
								</FooterIcon>
								<FooterIcon>
									<a href="#">
										<GitHubIcon sx={{ height: "100%", width: "100%" }} />
									</a>
								</FooterIcon>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Box>
		</>
	);
}

const LinkPoints = ({ children, url }) => {
	return (
		<Link href={url ? url : "#"}>
			<Typography
				variant="body2"
				noWrap
				component="span"
				sx={{
					fontFamily: "monospace",
					fontWeight: 100,
					color: "inherit",
					textDecoration: "none",
				}}
			>
				| {children} |
			</Typography>
		</Link>
	);
};

const IconLinks = ({ children }) => {
	return (
		<Stack
			direction="row"
			justifyContent="flex-start"
			alignItems="center"
			sx={{ width: "100%" }}
			spacing={2}
		>
			{children}
		</Stack>
	);
};

const FooterIcon = ({ children }) => {
	return (
		<Box
			sx={{
				display: "inline-block",
				width: "35px",
				height: "35px",
				cursor: "pointer",
				backgroundColor: "rgb(71, 71, 71)",
				borderRadius: "2px",
				borderBottom: "1px solid rgba(170, 165, 165, 0.356)",
				fontSize: "20px",
				color: "#ffffff",
				textAlign: "center",
				lineHeight: "35px",

				marginRight: "3px",
				marginBottom: "5px",
			}}
		>
			{children}
		</Box>
	);
};
