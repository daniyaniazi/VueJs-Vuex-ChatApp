<template>
	<div class="form">
		<h2>Sign Up</h2>
		<b-form @submit.prevent="signUp">
			<b-form-group
				id="input-group-2"
				label="Your Username:"
				label-for="input-2"
			>
				<b-form-input
					id="input-2"
					placeholder="Enter username"
					required
					v-model="user.username"
				></b-form-input>
			</b-form-group>
			<b-form-group
				id="input-group-1"
				label="Email address:"
				label-for="input-1"
			>
				<b-form-input
					id="input-1"
					type="email"
					placeholder="Enter email"
					required
					v-model="user.email"
				></b-form-input>
			</b-form-group>

			<b-form-group
				id="input-group-3"
				label="Your password:"
				label-for="input-2"
			>
				<b-form-input
					id="input-3"
					placeholder="Enter password"
					required
					v-model="user.password1"
				></b-form-input>
			</b-form-group>

			<b-form-group
				id="input-group-4"
				label="Confirm Password:"
				label-for="input-2"
			>
				<b-form-input
					id="input-4"
					placeholder="Re enter your password"
					required
					v-model="user.password2"
				></b-form-input>
			</b-form-group>
			<b-button type="submit" variant="primary">SignUp</b-button>
		</b-form>
		<div class="mt-1">
			<b-link to="/login"> Have an account? SignIn here</b-link>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'Register',
	data() {
		return {
			user: {
				username: '',
				email: '',
				password1: '',
				password2: '',
			},
		};
	},
	methods: {
		...mapActions(['setNotification']),
		async signUp() {
			console.log(this.user);
			const { key } = await this.$store
				.dispatch('registerUser', this.user)
				.catch((error) => {
					this.setNotification({
						msg: error,
						type: 'error',
						color: 'red',
					});
				});
			if (key) {
				console.log('successfully signup');
				this.setNotification({
					msg: 'Succesfully register',
					type: 'success',
					color: 'green',
				});
				this.$router.push('/login');
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
