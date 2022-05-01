<template>
  <v-container class="py-4">
    <h1 class="text-h3 mt-6 mb-3">成员</h1>
    <p class="text-body-1">
      茶馆工作室目前有
      <!-- {{ members.length }} -->24 位成员。他们来自五湖四海，精通各项技能。
    </p>
    <v-list class="m-5">
      <div v-for="m in members" :key="m.name">
        <v-list-item three-line :to="`/members/${m.page}`">
          <v-list-item-avatar>
            <v-avatar size="70">
              <v-img :src="procAvatar(m.avatar)" width="70"></v-img>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-header class="ml-4">
            <v-list-item-title>{{ m.name }}</v-list-item-title>
            <v-list-item-subtitle style="text-overflow: unset; display: unset">
              <v-icon size="x-small" class="mr-1">{{ mdiBriefcase }} </v-icon
              >{{ m.title.join('、') }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-icon size="x-small" class="mr-1">{{ mdiEmail }} </v-icon
              >{{ m.email }}&ZeroWidthSpace;&#64;&ZeroWidthSpace;teahou.se
            </v-list-item-subtitle>
          </v-list-item-header>

          <template #append>
            <div>
              <v-btn
                v-if="m.email"
                size="small"
                variant="text"
                color="grey lighten-1"
                :icon="mdiEmail"
                :href="`mailto:${m.email}@teahou.se`"
              ></v-btn>
              <v-btn
                v-if="m.github"
                size="small"
                variant="text"
                color="grey lighten-1"
                :icon="mdiGithub"
                :href="`https://github.com/${m.github}`"
              ></v-btn>
              <v-btn
                v-if="m.twitter"
                size="small"
                variant="text"
                color="grey lighten-1"
                :icon="mdiTwitter"
                :href="`https://twitter.com/${m.twitter}`"
              ></v-btn>
              <v-btn
                v-if="m.wiki"
                size="small"
                variant="text"
                color="grey lighten-1"
                :icon="siFandom.path"
                :href="`https://minecraft.fandom.com/zh/wiki/${m.wiki}`"
              ></v-btn>
              <v-btn
                v-if="m.website"
                size="small"
                variant="text"
                color="grey lighten-1"
                :icon="mdiWeb"
                :href="`${m.website}`"
              ></v-btn>
            </div>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </v-container>
</template>
<script lang="ts" setup>
import { mdiEmail, mdiGithub, mdiTwitter, mdiWeb, mdiBriefcase } from '@mdi/js'
import { siFandom } from 'simple-icons/icons'

import members from '@/data/members'

function procAvatar(avatar: string) {
  return new URL(`../../assets/avatars/${avatar}`, import.meta.url).href
}
</script>
