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
		</b-form>
	</div>
</template>

<script>
// import router from '../router';
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
		async signIn() {
			console.log(this.user);
			const { key } = await this.$store
				.dispatch('loginUser', this.user)
				.catch((error) => console.log(error));
			if (key) {
				console.log('successfully signIn');
				this.$router.push('/');
			}
		},
	},
};
</script>

<style>
.form {
	width: 60%;
	margin: auto;
}
label {
	text-align: left;
	margin-top: 10px;
}
input {
	margin-bottom: 10px !important;
}
</style>
