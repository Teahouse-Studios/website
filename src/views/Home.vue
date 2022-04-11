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
                  源于 Minecraft<sup>&reg;</sup>，<br />
                  我们不断前进。
                </div>
                <div class="text-subtitle-1 mb-3">
                  茶馆工作室深耕于 Minecraft
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
                class="fp-player rounded-lg elevation-5 mx-auto mr-md-0"
                show-arrows
                v-model="video"
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
    <t-footer class="fp-block-footer" />
  </div>
</template>

<script lang="ts" setup>
import TFooter from '@/components/TFooter.vue'
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
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.fp-block {
  @extend .block-height;
  scroll-snap-align: start;
  scroll-padding-top: 64px;
}

.fp-block-footer {
  scroll-snap-align: start;
}

.block-height {
  height: calc(100vh - 64px);
}
</style>
