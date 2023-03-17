import axios from "axios";
const api_url = process.env.NEXT_PUBLIC_API_URL;
async function connectToReport(token, reportRef) {
	try {
		const response = await axios.post(
			`${api_url}/reports/connect`,
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
		console.error(error);
		throw error;
	}
}

async function getAllReports(token) {
	try {
		const response = await axios.get(`${api_url}/reports/me`, {
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function getAllReportsByAdmin(token) {
	try {
		const response = await axios.get(`${api_url}/reports`, {
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function getReportData(token, refId) {
	try {
		const response = await axios.get(`${api_url}/reports/${refId}`, {
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function submitFeedbackForReport(feedbackData, token) {
	try {
		const response = await axios.post(`${api_url}/reports/feedback`, feedbackData, {
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error(error);
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
