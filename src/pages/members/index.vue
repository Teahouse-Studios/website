<template>
  <v-container class="py-4">
    <h1 class="text-h3 mt-6 mb-3">成员</h1>
    <p class="text-body-1">
      茶馆工作室目前有
      <!-- {{ members.length }} -->24 位成员。他们来自五湖四海，精通各项技能。
    </p>
    <v-list class="m-5">
      <div v-for="m in members" :key="m.name">
        <v-list-item three-line :to="`/members/${m.name}`">
          <v-list-item-avatar>
            <v-avatar size="70">
              <v-img :src="procAvatar(m.avatar)" width="70"></v-img>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-header class="ml-4">
            <v-list-item-title>{{ m.name }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ m.title.join(' · ') }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ m.email }}&ZeroWidthSpace;&#64;&ZeroWidthSpace;teahou.se
            </v-list-item-subtitle>
          </v-list-item-header>

          <template #append>
            <v-list-item-avatar end>
              <v-btn
                v-if="m.email"
                size="small"
                variant="text"
                color="grey lighten-1"
                icon="mdi-email"
                :href="`mailto:${m.email}@teahou.se`"
              ></v-btn>
              <v-btn
                v-if="m.github"
                size="small"
                variant="text"
                color="grey lighten-1"
                icon="mdi-github"
                :href="`https://github.com/${m.github}`"
              ></v-btn>
              <v-btn
                v-if="m.twitter"
                size="small"
                variant="text"
                color="grey lighten-1"
                icon="mdi-twitter"
                :href="`https://twitter.com/${m.twitter}`"
              ></v-btn>
              <v-btn
                v-if="m.wiki"
                size="small"
                variant="text"
                color="grey lighten-1"
                icon="mdi-wikipedia"
                :href="`https://twitter.com/${m.wiki}`"
              ></v-btn>
              <v-btn
                v-if="m.website"
                size="small"
                variant="text"
                color="grey lighten-1"
                icon="mdi-web"
                :href="`${m.website}`"
              ></v-btn>
            </v-list-item-avatar>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </v-container>
</template>
<script lang="ts" setup>
import members from '@/data/members'

function procAvatar(avatar: string) {
  return new URL('@/assets/avatars/' + avatar, import.meta.url)
}
</script>
