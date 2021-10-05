<template>
	<div class="form">
		<h2>Sign In</h2>
		<b-form @submit.prevent="signIn">
			<b-form-group
				id="input-group-1"
				label="Enter Username"
				label-for="input-1"
			>
				<b-form-input
					id="input-1"
					type="text"
					placeholder="Enter Username"
					required
					v-model="user.username"
				></b-form-input>
			</b-form-group>

			<b-form-group
				id="input-group-2"
				label="Your password:"
				label-for="input-2"
			>
				<b-form-input
					id="input-2"
					placeholder="Enter password"
					required
					v-model="user.password"
				></b-form-input>
			</b-form-group>

			<b-button type="submit" variant="primary">Sign in</b-button>
			<div class="mt-1">
				<b-link to="/register">Dont have an account? SignUp here</b-link>
			</div>
		</b-form>
	</div>
</template>

<script>
// import router from '../router';
import { mapActions } from 'vuex';
export default {
	name: 'Register',
	data() {
		return {
			user: {
				username: '',
				password: '',
			},
		};
	},
	// beforeRouteEnter(to, from, next) {
	// 	if (localStorage.getItem('token')) {
	// 		router.push('/');
	// 	}
	// 	next();
	// },
	methods: {
		...mapActions(['setNotification']),
		async signIn() {
			console.log(this.user);
			try {
				const { key } = await this.$store.dispatch('loginUser', this.user);

				if (key) {
					this.setNotification({
						msg: 'Succesfully Login',
						type: 'success',
						color: 'green',
					});
					this.$router.push('/');
				}
			} catch (error) {
				this.setNotification({
					msg: error,
					type: 'error',
					color: 'red',
				});
			}
		},
	},
};
</script>

<style>
.form {
	width: 40%;
	margin: auto;
	margin-top: 5%;
}
label {
	text-align: left;
	margin-top: 10px;
}
input {
	margin-bottom: 10px !important;
}
@media screen and (max-width: 800px) {
	.form {
		width: 60%;
	}
}
@media screen and (max-width: 600px) {
	.form {
		width: 80%;
	}
}
</style>
