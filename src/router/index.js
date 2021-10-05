import Vue from 'vue';
import VueRouter from 'vue-router';
import Users from '../views/Users.vue';
import Chat from '../views/Chat.vue';
import Register from '../views/Register.vue';
import SignIn from '../views/SignIn.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: SignIn,
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
	},
	{
		path: '/',
		name: 'Users',
		component: Users,
	},
	{
		path: '/chat/:id',
		name: 'Chat',
		component: Chat,
	},
];

const router = new VueRouter({
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.name == 'Login' || to.name == 'Register') {
		if (localStorage.getItem('token')) {
			next({ name: 'Users' });
		} else next();
	}
	if (to.name == 'Users' || to.name == 'Chat') {
		if (!localStorage.getItem('token')) {
			next({ name: 'Login' });
		} else next();
	}
});
export default router;
