<template>
  <div>
    <v-toolbar flat color="white" style="display: flex; justify-content: center;">
      <v-toolbar-title v-show="fadeIn === true">Create Report</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <div class="postions-btn">
      <v-btn mb-10 style="margin-right: 10px;" @click="createReportSales" v-show="fadeIn === true">Create Sales Report</v-btn>
      <v-btn mb-10 @click="createReportRental" v-show="fadeIn === true">Create Rental Report</v-btn>
    </div>
    <report-sales-rental :setStatus="status" @checkBack="checkBack" v-if="status != null"></report-sales-rental>
  </div>
</template>

<script>
import ReportSalesRental from './layouts/ReportSalesRental'
export default {
  name: 'CreateReport',
  components: {
    ReportSalesRental
  },
  data () {
    return {
      fadeIn: true,
      status: null
    }
  },
  methods: {
    checkBack (val) {
      this.fadeIn = true
      this.status = val
    },
    createReportSales () {
      this.fadeIn = !this.fadeIn
      this.status = 'salesReport'
    },
    createReportRental () {
      this.fadeIn = !this.fadeIn
      this.status = 'rentalReport'
    }
  }
}
</script>

<style scoped>
.postions-btn {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
