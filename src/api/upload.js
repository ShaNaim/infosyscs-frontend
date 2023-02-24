import axios from "axios";
async function uploadFileForProcessing(formData, type) {
	try {
		const response = await axios.post(
			"http://localhost:3050/api/v1/files/process-data?type=" + type,
			formData,
			{
				withCredentials: true,
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function checkCookie() {
	try {
		const response = await axios.post(
			"http://localhost:3050/api/v1/files/check",
			{},
			{
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
				},
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
