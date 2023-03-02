import axios from "axios";
async function connectToReport(token, reportRef) {
	try {
		const response = await axios.post(
			"http://localhost:3050/api/v1/reports/connect",
			{
				refId: reportRef,
			},
			{
				withCredentials: true,
				headers: {
					"Access-Control-Allow-Credential": true,
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
			}
		);
		if (response.status === 204) return null;
		return response.data.data;
	} catch (error) {
		throw error;
	}
}

async function getAllReports(token) {
	try {
		const response = await axios.get("http://localhost:3050/api/v1/reports/me", {
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function getAllReportsByAdmin(token) {
	try {
		const response = await axios.get("http://localhost:3050/api/v1/reports", {
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function getReportData(token, refId) {
	try {
		const response = await axios.get("http://localhost:3050/api/v1/reports/" + refId, {
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function submitFeedbackForReport(feedbackData, token) {
	try {
		const response = await axios.post(
			"http://localhost:3050/api/v1/reports/feedback",
			feedbackData,
			{
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	connectToReport,
	getAllReports,
	getReportData,
	submitFeedbackForReport,
	getAllReportsByAdmin,
};
