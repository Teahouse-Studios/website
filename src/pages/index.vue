<template>
  <div class="fp-blocks">
    <section class="fp-block">
      <v-container class="d-flex align-center justify-center block-height">
        <div>
          <v-row class="px-4">
            <v-col cols="12" md="6">
              <div>
                <div
                  class="text-h3 font-weight-bold mb-3"
                  style="line-height: 3.75rem"
                >
                  源于 Minecraft，<br />
                  我们不断前进。
                </div>
                <div class="text-subtitle-1 mb-3">
                  问谛居茶馆工作室专注于 Minecraft
                  等游戏的周边内容创作，创作出了多款创意资源、语言附加包，致力于为玩家提供更欢乐的游戏体验。
                </div>
              </div>
              <div class="mb-3">
                <v-btn
                  variant="text"
                  prepend-icon="mdi-arrow-right"
                  @click="$refs.about.scrollIntoView({ behavior: 'smooth' })"
                >
                  了解更多
                </v-btn>
                <v-btn variant="text" prepend-icon="mdi-cash" color="#946ce6">
                  发电
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-carousel
                v-model="video"
                class="fp-player rounded-lg elevation-5 mx-auto mr-md-0"
                show-arrows
              >
                <v-carousel-item v-for="v in videos" :key="v">
                  <iframe
                    :src="v"
                    scrolling="no"
                    border="0"
                    width="100%"
                    height="100%"
                    frameborder="no"
                    framespacing="0"
                    allowfullscreen="true"
                    class="rounded-lg"
                  >
                  </iframe>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>
    <section ref="about" class="fp-block">
      <v-container class="d-flex align-center justify-center block-height">
        <v-row class="px-4">
          <v-col cols="12" md="6" class="d-flex align-center justify-center">
            <img
              src="@/assets/avatars.png"
              class="d-block"
              style="width: 100%"
            />
          </v-col>
          <v-col cols="12" md="6" class="text-right d-flex align-center">
            <div>
              <div
                class="text-h3 font-weight-bold mb-3"
                style="line-height: 3.75rem"
              >
                我们是谁？
              </div>
              <div class="text-subtitle-1 mb-3">
                我们是一群热爱 Minecraft
                游戏的玩家，我们中的大部分人出身于全球最大的 Minecraft
                百科全书网站
                <ExLink href="https://minecraft.fandom.com/zh/"
                  >Minecraft Wiki</ExLink
                >，拥有良好的游戏译名翻译经验。其他成员大部分来自 Minecraft
                社区中的其他部分和开源社区团队。我们的目标是为游戏玩家提供更好的体验。
              </div>
              <v-btn
                to="/members/"
                variant="text"
                prepend-icon="mdi-account-multiple"
                class="mb-3"
              >
                了解成员
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="fp-block">
      <v-container class="d-flex align-center justify-center block-height">
        <v-row class="px-4">
          <v-col
            cols="12"
            class="d-flex align-center justify-center text-h3 font-weight-bold mb-3"
          >
            我们的产品
          </v-col>
          <v-col cols="12" md="4">
            <div>
              <div
                class="text-h4 font-weight-bold mb-3"
                style="line-height: 3.75rem"
              >
                梗体中文资源包
              </div>
              <div class="text-subtitle-1 mb-3">
                梗体中文资源包由本工作室成员、中文 Minecraft Wiki 行政员
                Lxazl5770 于 2020 年 1 月创始。此资源包致力于打造更娱乐的
                Minecraft
                游戏体验。它将一部分游戏内容译名或其他游戏内字符串替换成了一些梗和笑话。梗体中文资源包一经推出广受好评，获得了多位
                UP 主的推荐和其他玩家的认可，并成功上架网易我的世界中国版。截止
                2022 年 4 月，梗体中文资源包全平台累计下载量超过 10 万次。
              </div>
              <v-btn
                to="/products/meme/"
                variant="text"
                prepend-icon="mdi-arrow-right"
                class="mb-3"
              >
                了解更多
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div>
              <div
                class="text-h4 font-weight-bold mb-3"
                style="line-height: 3.75rem"
              >
                小可
              </div>
              <div class="text-subtitle-1 mb-3">
                小可是基于多个框架开发的可扩展、多平台聊天机器人，有 MediaWiki
                网站条目信息获取、MediaWiki 维护实用工具、GitHub 查询、Minecraft
                相关信息查询、音游信息查询等多个功能。小可支持
                Telegram、Discord、QQ、QQ 频道多平台。我们正在进行 QQ
                频道官方机器人入驻开发，未来可能会成为官方认证的机器人。
              </div>
              <v-btn
                to="/products/meme/"
                variant="text"
                prepend-icon="mdi-arrow-right"
                class="mb-3"
              >
                了解更多
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div>
              <div
                class="text-h4 font-weight-bold mb-3"
                style="line-height: 3.75rem"
              >
                Minecraft 文言资源包
              </div>
              <div class="text-subtitle-1 mb-3">
                Minecraft 文言资源包由本工作室成员 Dianliang233 于 2020 年 1
                月创始。此资源包为 Minecraft
                新增了一个语言——文言。文言项目创始之后，立刻得到多方支持。其中，原中文
                Minecraft Wiki 管理员 Cuervo 在 Crowdin
                上申请了官方语言支持。2021 年 1
                月，文言成为了官方支持的语言项目。文言计现由文言翻译审核员管理。
              </div>
              <v-btn
                to="/products/meme/"
                variant="text"
                prepend-icon="mdi-arrow-right"
                class="mb-3"
              >
                了解更多
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn to="/products/" variant="text" prepend-icon="mdi-apps"
              >更多产品</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </section>
    <div
      class="d-flex justify-center text-body-2"
      style="position: fixed; bottom: 10px; width: 100%"
    >
      <v-icon left>mdi-chevron-down</v-icon> 向下滚动
    </div>
  </div>
</template>

<script lang="ts" setup>
import ExLink from '@/components/ExLink.vue'

let video = $ref(0)
const videos = [
  'https://player.bilibili.com/player.html?aid=716333939&bvid=BV1ZX4y1A7jY&cid=357776775&page=1',
  'https://player.bilibili.com/player.html?aid=889128743&bvid=BV1gK4y1u7Qs&cid=370637043&page=1',
]
</script>
<style lang="scss">
.fp-player {
  border-radius: 8px;
  padding: 0;
  height: 35vh !important;
  width: 90%;
}

.fp-blocks {
  @extend .block-height;
}

.fp-block {
  @extend .block-height;
}

.block-height {
  min-height: calc(100vh - 64px);
}
</style>
