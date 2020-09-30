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
              <v-btn href="https://github.com/Teahouse-Studios"><v-icon left>mdi-github</v-icon> GitHub</v-btn>
            </v-row>
          </v-col>
          <v-spacer />
        </v-container>
      </v-parallax>
    </section>
    <br><br>
    <section>
      <h2 class="text-center">作品</h2>
      <v-container>
        <v-row>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">梗体中文资源包</v-list-item-title>
                  <v-list-item-subtitle>在 Minecraft 中加入了一个新的语言“梗体中文”和其他有趣的小内容，旨在打造更生草的游戏体验。</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ><v-img src="@/assets/meme.png" /></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn icon href="https://github.com/Teahouse-Studios/mcwzh-meme-resourcepack"><v-icon>mdi-github</v-icon></v-btn>
                <v-btn icon href="https://dl.meme.teahou.se/"><v-icon>mdi-download</v-icon></v-btn>
                <v-btn icon href="https://www.mcbbs.net/thread-1004643-1-1.html"><v-icon>mdi-post</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">梗体中文资源包</v-list-item-title>
                  <v-list-item-subtitle>在 Minecraft 中加入了一个新的语言“梗体中文”和其他有趣的小内容，旨在打造更生草的游戏体验。</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-btn icon href="https://github.com/Teahouse-Studios/bo"><v-icon>mdi-github</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="4">
            <!--placeholder-->
          </v-col>
        </v-row>
      </v-container>
    </section>
    <br><br>
    <section>
      <h2 class="text-center">新闻</h2>
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
