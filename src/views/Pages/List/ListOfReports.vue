<template>
  <v-card>
    <v-content>
      <v-spacer></v-spacer>
    </v-content>
    <v-data-table
      :headers="headers"
      :items="report[0]"
      class="elevation-1"
      :items-per-page="5"
    >
      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editReports(item)"
        >
          edit
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { getReport } from '../../../api/report'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ListOfReports',
  data: function () {
    return {
      headers: [
        { text: 'Id', value: 'id', sortable: false },
        { text: 'Name', value: 'name', sortable: false },
        { text: 'Status', value: 'status', sortable: false },
        { text: 'Type', value: 'type', sortable: false },
        { text: 'Edit', value: 'action', sortable: false }
      ],
      report: []
    }
  },
  computed: {
    ...mapGetters(['getList'])
  },
  methods: {
    ...mapMutations(['setList']),
    getReport () {
      getReport()
        .then(res => {
          this.$store.commit('setList', res.data)
          this.report.push(this.getList)
        })
    },
    editReports (item) {
      this.$router.push(`/edit/${item.type}/${item.id}`)
    }
  },
  mounted () {
    if (this.getList.length !== 0) {
      this.report.push(this.getList)
    } else {
      this.getReport()
    }
  }
}
</script>

<style scoped>

</style>
