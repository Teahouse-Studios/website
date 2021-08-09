<template>
  <div>
    <section style="margin: -12px -12px 48px -12px;">
      <v-container fluid class="py-12 indigo white--text">
        <v-row justify="center">
          <v-col md="6" xs="12" offset-md="2">
            <v-img
              src="@/assets/logo.svg/"
              style="filter: invert(1)"
              max-width="450px"
            />
            <p class="text-h6 ml-9">
              一个由部分 Minecraft Wiki 成员成立的公益性质工作室。
            </p>
          </v-col>
          <v-spacer />
        </v-row>
      </v-container>
    </section>
    <section class="mb-9">
      <v-container>
        <h2 class="text-h4 mb-5">关于</h2>
        <p>
          <b>Teahouse Studios</b>（茶馆工作室）是一个由部分 Minecraft Wiki
          成员于 2020 年 7 月 18 日成立的公益性质工作室。我们的主要创作方向为
          Minecraft。我们的成员大多数都是 Minecraft Wiki 的成员。
        </p>
        <p>
          一切都是始于我们的“整活”。在 Lxazl5770 的第一版的基础上，我们从 2020
          年 2 月 13
          日开始一直维护着《梗体中文》资源包。它“将一部分译名或其他游戏内字符串替换成了一些知名/不知名的梗或笑话，或将其用诙谐的语言重写了一遍。”（e.g.
          将“木棍”替换成了“法国面包”，“和平难度”替换成了“怂”）
        </p>
        <p>
          在此同时，Dianliang233 于 2020 年 2 月 14 日发起了文言语言包项目。2021
          年 1 月，在工作室成员和中文 Minecraft Wiki
          管理团队的推动下，文言被添加至 Java 版 Crowdin。2021 年 6
          月，文言被正式添加至 Java 版 Minecraft。目前，文言项目隶属中文
          Minecraft Wiki 管理团队管理。
        </p>
        <p>
          故事还在进行着……
        </p>
      </v-container>
    </section>
    <section class="mb-9">
      <v-container>
        <h2 class="text-h4 mb-7">作品</h2>
        <v-row>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1"
                    >梗体中文</v-list-item-title
                  >
                  <v-list-item-subtitle
                    >加入了一个新的语言“梗体中文”，旨在打造更生草的游戏体验。</v-list-item-subtitle
                  >
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"
                  ><v-img src="@/assets/meme.png"
                /></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  icon
                  href="https://github.com/Teahouse-Studios/mcwzh-meme-resourcepack"
                  ><v-icon>mdi-github</v-icon></v-btn
                >
                <v-btn icon href="https://dl.meme.teahou.se/"
                  ><v-icon>mdi-download</v-icon></v-btn
                >
                <v-btn icon href="https://www.mcbbs.net/thread-1004643-1-1.html"
                  ><v-icon>mdi-post</v-icon></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1"
                    >梗体中文基岩版</v-list-item-title
                  >
                  <v-list-item-subtitle
                    >为 Minecraft 基岩版进行了适配的梗中。</v-list-item-subtitle
                  >
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"
                  ><v-img src="@/assets/meme.png"
                /></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  icon
                  href="https://github.com/Teahouse-Studios/mcwzh-meme-resourcepack-bedrock"
                  ><v-icon>mdi-github</v-icon></v-btn
                >
                <v-btn icon href="https://dl.meme.teahou.se/"
                  ><v-icon>mdi-download</v-icon></v-btn
                >
                <v-btn icon href="https://www.mcbbs.net/thread-1005191-1-1.html"
                  ><v-icon>mdi-post</v-icon></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1"
                    >茶馆 Q 群机器人</v-list-item-title
                  >
                  <v-list-item-subtitle
                    >基于
                    <a href="https://github.com/GraiaProject/Application"
                      >Graia</a
                    >，茶馆 QQ 群的实用机器人。</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-btn icon href="https://github.com/Teahouse-Studios/bot"
                  ><v-icon>mdi-github</v-icon></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="4">
            <!--placeholder-->
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="mb-9">
      <v-container>
        <h2 class="text-h4 mb-7">新闻</h2>
        <News />
      </v-container>
    </section>
    <section class="mb-n3 mx-n4">
      <v-container fluid class="indigo white--text px-10">
        <v-row>
          <v-col md="10" cols="12" align-self="center">
            <h2 class="text-h5" style="display: inline-block;">
              来看看我们的成员们。
            </h2>
          </v-col>
          <v-col md="2" cols="12" align-self="center" class="text-right">
            <v-btn class="float-right" to="/memebers/">成员名单</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid class="black white--text px-10">
        <v-row>
          <v-col md="6" cols="12" align-self="center">
            <h2 class="text-h5" style="display: inline-block;">关注我们</h2>
          </v-col>
          <v-col md="6" cols="12" align-self="center" class="text-right">
            <v-btn
              href="https://github.com/Teahouse-Studios/mcwzh-meme-resourcepack"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-2"
              ><v-icon left>mdi-github</v-icon> GitHub
            </v-btn>
            <v-btn
              href="https://space.bilibili.com/406275313"
              target="_blank"
              rel="noopener noreferrer"
              >Bilibili
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import News from "@/components/News";
export default {
  components: {
    News,
  },
};
</script>

<style lang="scss" scoped>
.mp-h1 {
  font-weight: 400;
}
</style>
