import axios from "axios";
import api_url from "./url";
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
		throw error;
	}
}

async function getAllReports(token) {
	try {
		const response = await axios.get(`${api_url}/reports/me`, {
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
		const response = await axios.get(`${api_url}/reports`, {
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
		const response = await axios.get(`${api_url}/reports/${refId}`, {
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
		const response = await axios.post(`${api_url}/reports/feedback`, feedbackData, {
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

module.exports = {
	connectToReport,
	getAllReports,
	getReportData,
	submitFeedbackForReport,
	getAllReportsByAdmin,
};

// CREATE USER 'infosyscs'@'localhost' IDENTIFIED BY 'Info12$$';
// GRANT CREATE, ALTER, DROP, INSERT, UPDATE, INDEX, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'infosyscs'@'host' WITH GRANT OPTION;
// GRANT ALL PRIVILEGES ON *.* TO 'infosyscs'@'localhost' WITH GRANT OPTION;
// GRANT ALL PRIVILEGES ON *.* TO ‘user_name @ host_name’ WITH GRANT OPTION;
// GRANT ALL PRIVILEGES ON *.* TO 'infosyscs'@'localhost' WITH GRANT OPTION;
//Sys@@420
// DROP USER 'infosyscs'@'host';
