import axios from "axios";
async function handleGetUserData(token) {
	try {
		const response = await axios.get("http://localhost:3050/api/v1/auth/me", {
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

async function handleGetAdminData(token) {
	try {
		const response = await axios.get("http://localhost:3050/api/v1/auth/admin", {
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

async function handleUserLogin(user) {
	try {
		const response = await axios.post("http://localhost:3050/api/v1/auth/login", user, {
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (error) {
		console.error(error.response.data);
		throw error;
	}
}

async function handleUserLogout(token) {
	try {
		const response = await axios.post(
			"http://localhost:3050/api/v1/auth/logout",
			{},
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
		console.error(error.response.data);
		throw error;
	}
}

async function handleUserRegister(user) {
	try {
		const response = await axios.post("http://localhost:3050/api/v1/users", user, {
			withCredentials: true,
			headers: {
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
