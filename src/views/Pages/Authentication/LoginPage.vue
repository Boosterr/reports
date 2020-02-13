<template>
  <v-content>
    <v-container
      fluid
      fill-height
    >
      <v-layout
        align-center
        justify-center
      >
        <v-flex
          xs12
          sm8
          md4
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Login"
                  name="login"
                  type="text"
                  v-model="name"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="logiIn">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { loginRequest } from '../../../api/user'
export default {
  name: 'LoginPage',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    logiIn () {
      loginRequest(1, this.name, this.password)
        .then(
          this.$router.go(),
          this.$router.push('/'),
          localStorage.setItem('userToken', 'eyJ1IjoiYW5kcml5YnV0bmFyMSIsImEiOiJjazEwZHhzdmcwNGowM2JwNjQybW0wbGdiIn0.XxbkWDaMkovbAx0SMeq8gw')
        )
    }
  }
}
</script>

<style scoped>

</style>
