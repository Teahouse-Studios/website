<template>
  <div>
    <section style="margin: -12px;">
      <v-parallax src="@/assets/mountains.png">
        <v-container>
          <v-spacer />
          <v-col md="6" xs="12">
            <v-row justify="center">
              <h1>Teahouse Studios</h1>
              <h3>一个由部分 Minecraft Wiki 成员成立的公益性质工作室。 </h3>
            </v-row>
          </v-col>
          <v-col md="6" xs="12">
            <v-row justify="center">
              <!-- placeholder -->
            </v-row>
          </v-col>
          <v-spacer />
        </v-container>
      </v-parallax>
    </section>
    <br><br>
    <section class="text-center">
      <h2>新闻</h2>
      <News />
    </section>
  </div>
</template>


<script>
import News from "@/components/News";
export default {
  components: {
    News
  }
};
</script>
