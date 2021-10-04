import { getReq, postReq } from '../../../services/api';

const User = {
	state: {
		currentUser: 1,
		allUsers: [],
	},
	getters: {
		currentUser(state) {
			//   logged in user
			return state.currentUser;
		},
		allUsers(state) {
			//   logged in user
			return state.AllUsers;
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
			const user = await getReq('user/');
			commit('setUser', user);
		},
		async getAllUser({ commit }) {
			const allUsers = await getReq('users/');
			commit('setAllUsers', allUsers);
		},
	},
	mutations: {
		setUser(state, user) {
			state.currentUser = user;
		},
		setAllUser(state, allUsers) {
			state.AllUsers = allUsers;
		},
	},
};

export default User;
