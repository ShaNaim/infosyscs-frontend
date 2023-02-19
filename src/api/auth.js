import axios from "axios";
async function handleGetUserData(token) {
	try {
		const response = await axios.get("http://localhost:3050/api/v1/auth/me", {
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

module.exports = {
	handleGetUserData,
};
