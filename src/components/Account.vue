<template>
<v-card>
  <v-data-table
    :headers="headers"
    :items="detail"
    :items-per-page="10"
  />
</v-card>
</template>


<script>
  export default {
    data () {
      return {
        headers: [
          { text: '日期', value: 'date'},
          { text: '类型', value: 'type',},
          { text: '金额', value: 'value' },
          { text: '原因', value: 'reason' },
          { text: '承办人', value: 'undertaker' },
          { text: '复核人', value: 'reviewer' },
          { text: '结余', value: 'balance' },
        ],
        detail: [
          {
              
          },
        ],
      }
    },
  }
</script>