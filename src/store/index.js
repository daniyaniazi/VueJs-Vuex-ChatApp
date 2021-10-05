import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/users/user';
import Chats from './modules/chats/chats';
import notification from './modules/notification/notification';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		User,
		Chats,
		notification,
	},
});
