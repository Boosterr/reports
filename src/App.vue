<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item >
          <v-list-item-content>
            <v-list-item-title style="cursor: pointer;" @click="$router.push('/')">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item >
          <v-list-item-content>
            <v-list-item-title style="cursor: pointer;" @click="$router.push('report/create')">Create report</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
      v-if="cheack"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="cheack" @click="$router.push('report/create')">Create report</v-btn>
      <v-btn v-if="cheack" style="margin-left: 10px;" @click="logOut">Log out</v-btn>
    </v-app-bar>

    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { getReport } from './api/report'

export default {
  name: 'App',

  components: {
  },
  data () {
    return {
      cheack: false,
      drawer: false,
      group: null,
      local: ''
    }
  },
  created () {
    this.cheackUser()
  },
  mounted () {
    this.getReport()
    const getToken = localStorage.getItem('userToken')
    if (getToken) {
      this.local = getToken
    }
  },
  methods: {
    cheackUser () {
      const getToken = localStorage.getItem('userToken')
      if (getToken) {
        this.cheack = true
      } else {
        this.$router.push('/login')
      }
    },
    getReport () {
      getReport()
        .then(res => {
          this.$store.commit('setList', res.data)
        })
    },
    logOut () {
      localStorage.removeItem('userToken')
      this.$router.go()
      this.$router.push('/login')
      this.cheack = false
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
    // local (newName) {
    //   if (newName) {
    //     this.cheack = true
    //   }
    // }
  }
}
</script>
