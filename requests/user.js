const BASE_URL = 'localhost:8083/api';

export const userLogin = async (payload) => {
	const loginData = {
		email: 'elmiranthony@gmail.com',
		password: '123',
	};

	try {
		const response = await axios.post(`${BASE_URL}/user/login`, loginData);

		console.log('Login successful:', response.data);

		return response.data;
	} catch (error) {
		console.error('Login failed:', error);
		throw error;
	}
};
export const userSignUp = async () => {};
export const getUsers = async () => {};
export const getTeachers = async () => {};
