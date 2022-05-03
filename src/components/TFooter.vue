<template>
  <v-footer
    style="background-color: #323437; padding: 30px"
    class="pt-10 py-8 px-12 text-white"
    dark
  >
    <v-container>
      <v-row>
        <v-col md="6" sm="12" class="text-center text-md-left">
          <span class="text-overline mr-3" style="vertical-align: middle"
            >关注我们</span
          >
          <v-btn variant="text" icon href="https://teahouse.team/">
            <v-icon size="small">{{ mdiWeb }}</v-icon>
          </v-btn>
          <v-btn variant="text" icon href="mailto:admin@teahou.se">
            <v-icon size="small">{{ mdiEmail }}</v-icon>
          </v-btn>
          <v-btn
            variant="text"
            icon
            href="https://space.bilibili.com/406275313"
          >
            <v-icon size="small">{{ siBilibili.path }}</v-icon>
          </v-btn>
          <v-btn variant="text" icon href="https://github.com/Teahouse-Studios">
            <v-icon>{{ mdiGithub }}</v-icon>
          </v-btn>
          <v-btn variant="text" icon href="https://afdian.net/@teahouse">
            <v-icon>{{ mdiCash }}</v-icon>
          </v-btn>

          <br />

          <span class="text-overline mr-3" style="vertical-align: middle"
            >法律</span
          >
          <v-btn variant="text" to="/terms/" :prepend-icon="mdiScript"
            >服务条款</v-btn
          ><v-btn variant="text" to="/privacy/" :prepend-icon="mdiLock"
            >隐私政策</v-btn
          >
        </v-col>
        <v-col md="6" sm="12" class="text-center text-md-right pt-5">
          <router-link to="/" title="首页">
            <img
              src="@/assets/logo.svg"
              alt="Teahouse Studios"
              height="48"
              class="mx-auto ml-md-auto mr-md-0"
              style="filter: invert(1)"
            />
          </router-link>
          <div class="text-right text-body-2">
            <a
              class="text-white text-decoration-none"
              href="https://beian.miit.gov.cn/"
            >
              蜀 ICP 备 2022011374 号-1
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script lang="ts" setup>
import {
  mdiScript,
  mdiLock,
  mdiWeb,
  mdiEmail,
  mdiGithub,
  mdiCash,
} from '@mdi/js'
import { siBilibili } from 'simple-icons/icons'
</script>
