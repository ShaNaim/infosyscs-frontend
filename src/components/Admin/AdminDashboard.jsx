import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
const calculateCost = (activeList, inactiveList) => {
	let activeCost = activeList.reduce((a, b) => {
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
			<Typography
				sx={{
					fontSize: "18px",
					fontWeight: "600",
					my: 2,
					color: "white",
					textAlign: "center",
				}}
			>
				Dashboard
			</Typography>
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
							<Tooltip title={calculation.totalCost}>
								<span
									style={{
										fontSize: "24px",
										fontWeight: "bold",
										color: "#3bbd668f",
										marginLeft: "16px",
									}}
								>
									{calculation.totalCost.toFixed(4)}
								</span>
							</Tooltip>
						</Paper>
						<Paper elevation={2} sx={{ p: 1, width: { xs: "100%" } }}>
							Total Payment Pending :
							<Tooltip title={calculation.loss}>
								<span
									style={{
										fontSize: "24px",
										fontWeight: "bold",
										color: "#ca5959d2",
										marginLeft: "16px",
									}}
								>
									{calculation.loss.toFixed(4)}
								</span>
							</Tooltip>
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
							<Tooltip title={calculation.profit}>
								<span
									style={{
										fontSize: "32px",
										fontWeight: "bold",
										color: "goldenrod",
										marginLeft: "32px",
									}}
								>
									{calculation.profit.toFixed(4)}
								</span>
							</Tooltip>
						</Paper>
					</Stack>
				</Box>
			</Stack>
		</>
	);
}
