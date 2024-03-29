import axios from "axios";
// import api_url from "./url";
const api_url = process.env.NEXT_PUBLIC_API_URL;
async function handleGetUserData(token) {
	try {
		const response = await axios.get(`${api_url}/auth/me`, {
			withCredentials: true,
			headers: {
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

async function handleGetAdminData(token) {
	try {
		const response = await axios.get(`${api_url}/auth/admin`, {
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
}

async function handleUserLogin(user) {
	try {
		const response = await axios.post(`${api_url}/auth/login`, user, {
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function handleUserLogout(token) {
	try {
		const response = await axios.post(
			`${api_url}/auth/logout`,
			{},
			{
				withCredentials: true,
				headers: {
					"Access-Control-Allow-Credentials": true,
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error(error.response.data);
		throw error;
	}
}

async function handleUserRegister(user) {
	try {
		const response = await axios.post(`${api_url}/users`, user, {
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Credentials": true,
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (error) {
		console.error(error.response.data);
		throw error;
	}
}

function handleRequestError(error) {
	if (error.errors.code === "ValidationError") {
		const description = JSON.parse(error.errors.description);
		return description[0].message;
	}
	return error.errors.description;
}

module.exports = {
	handleGetUserData,
	handleUserLogin,
	handleUserRegister,
	handleRequestError,
	handleUserLogout,
	handleGetAdminData,
};
