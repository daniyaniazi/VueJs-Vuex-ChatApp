import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/users/user';
import Chats from './modules/chats/chats';
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		User,
		Chats,
	},
	state: {
		error: null,
	},
	getters: {
		error(state) {
			return state.error;
		},
	},
	actions: {
		clearError({ commit }) {
			commit('clearError');
		},
	},
	mutations: {
		setError(state, payload) {
			state.error = payload;
		},
		clearError(state) {
			state.error = null;
		},
	},
});
