import { getReq, postReq } from '../../../services/api';

const User = {
	state: {
		currentUser: null,
		allUsers: [],
	},
	getters: {
		currentUser(state) {
			//   logged in user
			return state.currentUser;
		},
		allUsers(state) {
			//   logged in user
			return state.allUsers;
		},
	},
	actions: {
		async registerUser(context, user) {
			// eslint-disable-next-line no-useless-catch
			try {
				const response = await postReq('registration/', user);
				return response;
			} catch (e) {
				throw e;
			}
		},
		async loginUser(context, user) {
			try {
				const response = await postReq('login/', user);
				console.log(response);
				if (response.key) {
					localStorage.setItem('token', response.key);
					return response;
				}
			} catch (e) {
				console.log(e);
				throw e;
			}
		},
		async getUser({ commit }) {
			try {
				const user = await getReq('user/');
				console.log(user);

				commit('setUser', user);
			} catch (error) {
				console.log(error);
				throw error;
			}
		},
		async getAllUsers({ commit }) {
			// await getReq('users/');
			try {
				const allUsers = await getReq('all-users/');
				commit('setAllUsers', allUsers);
			} catch (error) {
				console.log(error);
			}
		},
	},
	mutations: {
		setUser(state, user) {
			state.currentUser = user;
		},
		setAllUsers(state, allUsers) {
			state.allUsers = allUsers;
		},
	},
};

export default User;
