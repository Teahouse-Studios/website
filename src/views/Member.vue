<template>
  <v-container class="py-4">
    <div>
      <v-row>
        <v-col cols="12" md="6">
          <h1 class="text-h4 mt-6 mb-3 d-inline-block">
            <v-avatar size="50"
              ><v-img
                :src="`/src/assets/avatars/${member.avatar}`"
                width="70"
              ></v-img
            ></v-avatar>
            {{ member.name }}
          </h1>
        </v-col>

        <v-col cols="12" md="6" class="text-right mt-6">
          <v-btn
            v-if="member.email"
            variant="text"
            color="grey lighten-1"
            icon="mdi-email"
            :href="`mailto:${member.email}@teahou.se`"
          ></v-btn>
          <v-btn
            v-if="member.github"
            variant="text"
            color="grey lighten-1"
            icon="mdi-github"
            :href="`https://github.com/${member.github}`"
          ></v-btn>
          <v-btn
            v-if="member.twitter"
            variant="text"
            color="grey lighten-1"
            icon="mdi-twitter"
            :href="`https://twitter.com/${member.twitter}`"
          ></v-btn>
          <v-btn
            v-if="member.wiki"
            variant="text"
            color="grey lighten-1"
            icon="mdi-wikipedia"
            :href="`https://twitter.com/${member.wiki}`"
          ></v-btn>
          <v-btn
            v-if="member.website"
            variant="text"
            color="grey lighten-1"
            icon="mdi-web"
            :href="`${member.website}`"
          ></v-btn>
        </v-col>
      </v-row>
    </div>

    <v-list-item>
      <v-list-item-header>
        <v-list-item-subtitle>
          {{ member.title.join(' · ') }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          {{ member.email }}&ZeroWidthSpace;&#64;&ZeroWidthSpace;teahou.se
        </v-list-item-subtitle>
      </v-list-item-header>
    </v-list-item>

    <Markdown :source="markdownFile.default" />
  </v-container>
</template>
<script lang="ts" setup>
import members from '@/members'
import { useRoute } from 'vue-router'
import Markdown from 'vue3-markdown-it'

const route = useRoute()
const name = route.params.name
const member = members.find((m) => m.name === name)!
const markdownFile = await import(`../members/${member.markdown}?raw`)
</script>
