<template>
    <v-container class="text-center">
        <h1 class="ma-6">404 Not Found</h1>
        <blockquote>{{ Quote }}</blockquote>
        <v-btn class="ma-6" color="primary" href="/">返回首页</v-btn>
    </v-container>
</template>

<script>
export default {
    computed: {
        Quote: function () {
            const quotes = [
                "吴丝蜀桐张高秋，空白凝云颓不流。",
                "众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。",
                "前不见古人，后不见来者。念天地之悠悠，独怆然而涕下。",
                "苟利国家生死以，岂因祸福避趋之。",
                "No pay no game.",
                '<a href="https://lttstore.com/">lttstore.com</a>.'
            ]
            const rand = Math.floor(Math.random() * quotes.length)
            return quotes[rand]
        }
    }
}
</script>