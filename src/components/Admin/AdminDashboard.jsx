import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import React from "react";

const calculateCost = (activeList, inactiveList) => {
	let activeCost = activeList.reduce((a, b) => {
		console.log({ a, b });
		return a + b.cost;
	}, 0);
	let inactiveCost = inactiveList.reduce((a, b) => {
		return a + b.cost;
	}, 0);
	return {
		profit: activeCost,
		loss: inactiveCost,
		totalCost: inactiveCost + activeCost,
	};
};

export default function AdminDashboard({ activeList, inactiveList, userCount }) {
	const [calculation, setcalculation] = React.useState({
		profit: 0,
		loss: 0,
		totalCost: 0,
	});
	React.useEffect(() => {
		setcalculation(calculateCost(activeList, inactiveList));
	}, []);
	return (
		<>
			<span style={{ fontSize: "18px", fontWeight: "600" }}>Dashboard</span>
			<Stack
				direction={{ xs: "column", md: "row" }}
				justifyContent="space-between"
				alignItems="flex-start"
				spacing={2}
				sx={{ width: "100%", marginTop: "12px" }}
			>
				<Box sx={{ p: 1, width: { xs: "100%", lg: "50%" }, flex: 2 }}>
					<Stack
						direction={{ xs: "column", md: "column" }}
						justifyContent="flex-start"
						alignItems="flex-start"
						spacing={2}
					>
						<Paper elevation={2} sx={{ p: 1, width: { xs: "100%" } }}>
							Total Active Users :
							<span
								style={{
									fontSize: "24px",
									fontWeight: "bold",
									color: "#3b68bd8f",
									marginLeft: "16px",
								}}
							>
								{userCount}
							</span>
						</Paper>
						<Paper elevation={2} sx={{ p: 1, width: { xs: "100%" } }}>
							Total Reports Generated :
							<span
								style={{
									fontSize: "24px",
									fontWeight: "bold",
									color: "#3b68bd8f",
									marginLeft: "16px",
								}}
							>
								{activeList.length + inactiveList.length}
							</span>
						</Paper>
					</Stack>
				</Box>
				<Box sx={{ p: 1, width: { xs: "100%", lg: "50%" }, flex: 2 }}>
					<Stack
						direction={{ xs: "column", md: "column" }}
						justifyContent="flex-start"
						alignItems="flex-start"
						spacing={2}
					>
						<Paper elevation={2} sx={{ p: 1, width: { xs: "100%" } }}>
							Total Cost :
							<span
								style={{
									fontSize: "24px",
									fontWeight: "bold",
									color: "#3bbd668f",
									marginLeft: "16px",
								}}
							>
								{calculation.totalCost.toFixed(6)}
							</span>
						</Paper>
						<Paper elevation={2} sx={{ p: 1, width: { xs: "100%" } }}>
							Inactive Report Cost :
							<span
								style={{
									fontSize: "24px",
									fontWeight: "bold",
									color: "#ca5959d2",
									marginLeft: "16px",
								}}
							>
								{calculation.loss.toFixed(6)}
							</span>
						</Paper>
					</Stack>
				</Box>
				<Box sx={{ p: 1, width: { xs: "100%", lg: "50%" }, height: "100%", flex: 1 }}>
					<Stack
						sx={{ width: { xs: "100%" }, height: "100%" }}
						direction={{ xs: "column", md: "column" }}
						justifyContent="center"
						alignItems="center"
					>
						<Paper elevation={2} sx={{ p: 1, width: { xs: "100%" } }}>
							Profit
							<br />
							<span
								style={{
									fontSize: "32px",
									fontWeight: "bold",
									color: "goldenrod",
									marginLeft: "32px",
								}}
							>
								{calculation.profit.toFixed(6)}
							</span>
						</Paper>
					</Stack>
				</Box>
			</Stack>
		</>
	);
}

{
	/* <TextField
sx={{ width: "100%" }}
id="user-name"
label="Total Active Users"
value={"user.name"}
variant="filled"
/>
<TextField
sx={{ width: "100%" }}
id="user-email"
label="Total Reports Generated"
value={"user.email"}
variant="filled"
disabled
/> */
}
{
	/* <TextField
	sx={{ width: "100%" }}
	id="user-phone"
	label="Total Cost"
	value={"user.phone"}
	variant="filled"
	disabled
	/>
<TextField
	color="success"
	sx={{ width: "100%" }}
	id="user-science"
	label="Inactive Report Cost"
	value={dayjs("user.createdAt").format("MMM D, YYYY")}
	variant="filled"
	/> */
}
