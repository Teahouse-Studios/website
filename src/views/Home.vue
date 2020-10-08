<template>
  <div>
    <section style="margin: -12px;">
      <v-parallax src="@/assets/mountains.png">
        <v-container>
          <v-spacer />
          <v-col md="6" xs="12">
            <v-row justify="center">
              <h1>Teahouse Studios</h1>
              <h3>一个由部分 Minecraft Wiki 成员成立的公益性质工作室。</h3>
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
                  <v-list-item-subtitle>在 Minecraft Java 版中加入了一个新的语言“梗体中文”和其他有趣的小内容，旨在打造更生草的游戏体验。</v-list-item-subtitle>
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
                  <v-list-item-title class="headline mb-1">梗体中文资源附加包-基岩版</v-list-item-title>
                  <v-list-item-subtitle>Minecraft Java 版梗体中文资源包的移植版，为 Minecraft 基岩版进行了适配。</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ><v-img src="@/assets/meme.png" /></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn icon href="https://github.com/Teahouse-Studios/mcwzh-meme-resourcepack-bedrock"><v-icon>mdi-github</v-icon></v-btn>
                <v-btn icon href="https://dl.meme.teahou.se/"><v-icon>mdi-download</v-icon></v-btn>
                <v-btn icon href="https://www.mcbbs.net/thread-1005191-1-1.html"><v-icon>mdi-post</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">茶馆 Q 群机器人</v-list-item-title>
                  <v-list-item-subtitle>基于 <a href="https://github.com/GraiaProject/Application">Graia</a>，茶馆 QQ 群的实用机器人。</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-btn icon href="https://github.com/Teahouse-Studios/bot"><v-icon>mdi-github</v-icon></v-btn>
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
      <h2 class="text-center">成员</h2>
      <v-container>
        <v-row>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">Lxazl5770</v-list-item-title>
                  <v-list-item-subtitle>中文 Minecraft Wiki 管理员、梗体中文资源包创始人、茶馆工作室创始人。</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ><v-img src="@/assets/members/lx.png" /></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn icon href="https://github.com/Lxazl5770"><v-icon>mdi-github</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">Dianliang233</v-list-item-title>
                  <v-list-item-subtitle>中文 Minecraft Wiki 巡查员、茶馆工作室创始人。</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ><v-img src="@/assets/members/dl.png" /></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn icon href="https://github.com/Dianliang233"><v-icon>mdi-github</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">LakeJason</v-list-item-title>
                  <v-list-item-subtitle>中文 Minecraft Wiki 巡查员、茶馆工作室创始人。</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ><v-img src="@/assets/members/lake.png" /></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn icon href="https://github.com/lakejason0"><v-icon>mdi-github</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">ff98sha</v-list-item-title>
                  <v-list-item-subtitle>中文 Minecraft Wiki 行政员、茶馆工作室荣誉成员。</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ><v-img src="@/assets/members/ff.png" /></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn icon href="https://github.com/ff98sha"><v-icon>mdi-github</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">MysticNebula70</v-list-item-title>
                  <v-list-item-subtitle>中文 Minecraft Wiki 管理员、茶馆工作室核心成员。曾为梗体中文资源包的构建系统作出重大贡献。</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ><v-img src="@/assets/members/my.jpg" /></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn icon href="https://github.com/MysticNebula70"><v-icon>mdi-github</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="4">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">_LittleC_</v-list-item-title>
                  <v-list-item-subtitle>知名 Minecraft 服务器 <a href="https://www.yinwurealm.org/">YinwuRealm</a> 管理员、茶馆工作室核心成员、<del>御用全栈工程师</del>。曾为梗体中文资源包的构建系统作出重大贡献。</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ><v-img src="@/assets/members/lcnb.png" /></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn icon href="https://github.com/_LittleC_"><v-icon>mdi-github</v-icon></v-btn>
              </v-card-actions>
            </v-card>
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
