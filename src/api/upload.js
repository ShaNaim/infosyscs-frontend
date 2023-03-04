import axios from "axios";
import api_url from "./url";
async function uploadFileForProcessing(formData, type) {
	try {
		const response = await axios.post(`${api_url}/files/process-data?type=${type}`, formData, {
			withCredentials: true,
			headers: { "Access-Control-Allow-Credentials": true, "Content-Type": "multipart/form-data" },
		});
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function checkCookie() {
	try {
		const response = await axios.post(
			`${api_url}/files/check`,
			{},
			{
				withCredentials: true,
				headers: { "Access-Control-Allow-Credentials": true, "Content-Type": "application/json" },
			}
		);
		console.log(response.data);
		return response;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	uploadFileForProcessing,
	checkCookie,
};
