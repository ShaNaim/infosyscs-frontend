import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
	reportState: { hasDisconnectedReport: false, reportRef: null, reportId: null },
};

// Actual Slice
export const reportSlice = createSlice({
	name: "report",
	initialState,
	reducers: {
		setReportState(state, action) {
			state.reportState = action.payload;
		},
	},

	// Special reducer for hydrating the state. Special case for next-redux-wrapper
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.report,
			};
		},
	},
});

export const { setReportState } = reportSlice.actions;

export const selectReportState = (state) => state.report.reportState;

export default reportSlice.reducer;
