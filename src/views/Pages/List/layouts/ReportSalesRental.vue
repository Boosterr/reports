<template>
  <div>
    <div style="width: 400px; margin: auto;" v-if="setStatus == 'rentalReport'">
      <div style="display: flex; justify-content: center;">
        <v-btn @click="backToBtn">Back</v-btn>
      </div>
      <div>
        <p class="font-weight-black">{{ rentalReport.name }}</p>
      </div>
      <v-text-field label="Name" v-model="rentalReport.name"></v-text-field>
      <p>Status</p>
      <v-overflow-btn
        class="my-2"
        v-model="rentalReport.status"
        :items="dropdownItemsRental"
        label="Status"
        target="#dropdown-example"
      ></v-overflow-btn>

      <v-text-field label="Phone" type="phone" v-model="rentalReport.phone"></v-text-field>
      <div style="display: flex; justify-content: center;">
        <v-btn color="primary" dark @click="createSalesRental">
          Save
        </v-btn>
      </div>
    </div>
    <div style="width: 400px; margin: auto;" v-else-if="setStatus == 'salesReport'">
      <div style="display: flex; justify-content: center;">
        <v-btn @click="backToBtn">Back</v-btn>
      </div>
      <div>
        <p class="font-weight-black">{{ salesReport.name }}</p>
      </div>
      <v-text-field label="name" v-model="salesReport.name"></v-text-field>
      <p>Status</p>
      <v-overflow-btn
        class="my-2"
        v-model="salesReport.status"
        :items="dropdownItemsReport"
        label="Status"
        target="#dropdown-example"
      ></v-overflow-btn>
      <div style="display: flex; justify-content: center;">
        <v-btn color="primary" dark @click="createSalesReport">
          Save
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { createSalesRental, createSalesReport } from '../../../../api/report'
import { mapGetters } from 'vuex'
export default {
  name: 'ReportSalesRental',
  props: {
    setStatus: null
  },
  data () {
    return {
      dataSalesReport: null,
      dataSalesRental: null,
      dropdownItemsRental: ['draft', 'ready', 'expired'],
      dropdownItemsReport: ['draft', 'ready', 'expired'],
      rentalReport: {
        name: '',
        status: 'draft',
        phone: ''
      },
      salesReport: {
        name: '',
        status: 'draft'
      }
    }
  },
  computed: {
    ...mapGetters(['getList'])
  },
  methods: {
    backToBtn () {
      this.$emit('checkBack', null)
    },
    createSalesRental () {
      createSalesRental(this.type, this.name, this.status).then((res) => {
        this.dataSalesRental = res.data
        const rand = Math.floor(Math.random() * 100) + 1
        const obj = {
          id: rand,
          name: this.dataSalesRental.report.name,
          status: this.dataSalesRental.report.status,
          type: 'rental'
        }
        this.getList.push(obj)
        this.$router.push(`/edit/rental/${rand}`)
      })
    },
    createSalesReport () {
      createSalesReport(this.salesReport.name, this.salesReport.status).then((res) => {
        this.dataSalesReport = res.data
        const rand = Math.floor(Math.random() * 100) + 1
        const obj = {
          id: rand,
          name: this.dataSalesReport.report.name,
          status: this.dataSalesReport.report.status,
          type: 'sales'
        }
        this.getList.push(obj)
        this.$router.push(`/edit/sales/${rand}`)
      })
    }
  }
}
</script>

<style scoped>

</style>
