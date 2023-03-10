import Stack from "@mui/material/Stack";

import ListContainer from "../UI/ListContainer";
import ListSkeleton from "../UI/ListSkeleton";
import Loading from "../UI/Loading";
import AdminReportList from "./AdminReportList";

export default function ReportsListContainer({ activeList, inactiveList, loadingData }) {
	return (
		<>
			{!loadingData ? (
				<Stack
					direction={{ xs: "column", md: "column" }}
					justifyContent="space-between"
					alignItems="flex-start"
					sx={{ width: "100%" }}
				>
					<ListContainer
						title={"Paid Reports " + "| " + activeList.length}
						styleProp={{ mt: 4, width: { xs: "100%", md: "100%" } }}
					>
						{activeList.length !== 0 ? (
							<AdminReportList reportsList={activeList} />
						) : (
							<ListSkeleton />
						)}
					</ListContainer>

					<ListContainer
						title={"Pending Payment Reports " + "| " + inactiveList.length}
						styleProp={{ mt: 4, width: { xs: "100%", md: "100%" } }}
					>
						{inactiveList.length !== 0 ? (
							<AdminReportList reportsList={inactiveList} />
						) : loadingData ? (
							<ListSkeleton />
						) : (
							<span> No Inactive Reports </span>
						)}
					</ListContainer>
				</Stack>
			) : (
				<Loading />
			)}
		</>
	);
}
