<template>
  <div>
    <v-toolbar flat color="white" style="display: flex; justify-content: center;">
      <v-toolbar-title>Edit Report</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <div style="width: 400px; margin: auto;">
      <div>
        <p class="font-weight-black">{{ name }}</p>
      </div>
      <v-text-field label="Type" v-model="type" disabled></v-text-field>
      <v-text-field label="Name" v-model="name"></v-text-field>
      <p>Status</p>
      <v-overflow-btn
        class="my-2"
        v-model="status"
        :items="dropdownItems"
        label="Status"
        target="#dropdown-example"
      ></v-overflow-btn>
      <div>
        <div style="display: flex; justify-content: center;">
          <p>Type info</p>
        </div>
        <div v-if="getRouterParams == 'sales'">
          <v-text-field label="Name" v-model="infos.name"></v-text-field>
          <v-textarea
            v-model="infos.area"
            label="Area"
          ></v-textarea>
        </div>
        <div v-else>
          <v-text-field label="Name" v-model="infos.name"></v-text-field>
          <v-textarea
            v-model="infos.area"
            label="Area"
          ></v-textarea>
          <v-text-field label="Phone" v-model="infos.phone"></v-text-field>
        </div>
      </div>
      <div>
        <div style="display: flex; justify-content: center;">
          <p>Type customize</p>
        </div>
        <div v-if="getRouterParams == 'sales'">
          <v-text-field label="No content" disabled></v-text-field>
        </div>
        <div v-else>
          <v-text-field label="No content" disabled></v-text-field>
        </div>
      </div>
      <div v-if="getRouterParams == 'rental'">
        <div style="display: flex; justify-content: center;">
          <p>Type search</p>
        </div>
        <div>
          <v-text-field label="No content" disabled></v-text-field>
        </div>
      </div>
      </div>
      <div style="display:flex; justify-content: center;">
        <v-btn color="primary" dark @click="EditAndSaveReports">
          Save
        </v-btn>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { createSalesRental, createSalesReport } from '../../../api/report'
export default {
  name: 'EditOfReports',
  data () {
    return {
      dropdownItems: ['draft', 'ready', 'expired'],
      getRouterParams: '',
      getRouterId: '',
      type: '',
      name: '',
      status: '',
      infos: {
        name: '',
        area: ''
      }
    }
  },
  methods: {
    EditAndSaveReports () {
      for (let i = 0; i < this.getList.length; i++) {
        if (this.getList[i].id.toString() === this.getRouterId) {
          this.getList[i].name = this.name
          this.getList[i].status = this.status
        }
      }
      for (let i = 0; i < this.getRental.length; i++) {
        if (this.getRental[i].id === this.getRouterId) {
          this.getRental[i].data[0].data.name = this.infos.name
          this.getRental[i].data[0].data.area = this.infos.area
          this.getRental[i].data[0].data.phone = this.infos.phone
        }
      }
      this.$router.push('/')
    },
    getInfoMounted () {
      const getRouter = this.$route.params.id
      for (let i = 0; i < this.getInfo.length; i++) {
        if (getRouter === this.getInfo[i].id) {
          this.infos.name = this.getInfo[i].name
          this.infos.area = this.getInfo[i].area
        }
      }
    },
    getFild (id) {
      if (this.getRouterParams === 'rental') {
        for (let i = 0; i < this.getRental.length; i++) {
          if (id === this.getRental[i].id) {
            this.infos.name = this.getRental[i].data[0].data.name
            this.infos.area = this.getRental[i].data[0].data.area
            this.infos.phone = this.getRental[i].data[0].data.phone
          }
        }
      } else {
        for (let i = 0; i < this.getRental.length; i++) {
          if (id === this.getRental[i].id) {
            this.infos.name = this.getRental[i].data[0].data.name
            this.infos.area = this.getRental[i].data[0].data.area
          }
        }
      }
    },
    generateFild (payload) {
      if (payload === 'rental') {
        createSalesRental().then((res) => {
          const obj = {
            id: this.getRouterId,
            data: res.data.sections
          }
          this.$store.commit('objRental', obj)
        })
      } else {
        createSalesReport().then((res) => {
          const obj = {
            id: this.getRouterId,
            data: res.data.sections
          }
          this.$store.commit('objRental', obj)
        })
      }
      // this.$store.commit('objSales', objSales)
    },
    getListFilter (id) {
      for (let i = 0; i < this.getList.length; i++) {
        if (id === this.getList[i].id.toString()) {
          this.name = this.getList[i].name
          this.status = this.getList[i].status
          this.type = this.getList[i].type
        }
      }
    }
  },
  computed: {
    ...mapGetters(['getList', 'getInfo', 'getSales', 'getRental'])
  },
  mounted () {
    this.getRouterParams = this.$route.params.status
    this.getRouterId = this.$route.params.id
    this.generateFild(this.getRouterParams)
    this.getListFilter(this.getRouterId)
    this.getInfoMounted()
    this.getFild(this.getRouterId)
  }
}
</script>

<style scoped>
</style>
