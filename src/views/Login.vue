<template>
  <div class="form">
    <h2>Login</h2>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-2"
        label="Your Username:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          placeholder="Enter username"
          required
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
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Login",
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
