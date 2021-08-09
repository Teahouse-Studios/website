<template>
  <div>
    <v-container> </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    let articles = [];
    fetch("https://teahou.se/wp-json/wp/v2/posts?context=embed")
      .then((res) => {
        const data = res.json();
        for (const i of data) {
          articles = articles.prototype.push({
            title: i.title.rendered
          })
        }
      })
      .catch(() => {
        console.error("Failed to fetch articles");
        this.fetchFailed = true;
      });
  },
};
</script>
