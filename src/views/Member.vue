<template>
  <v-container class="pt-4 pb-8">
    <v-btn
      class="ml-n3"
      to="/members/"
      variant="text"
      size="small"
      prepend-icon="mdi-chevron-left"
      >成员</v-btn
    >
    <v-divider class="mt-2"></v-divider>
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
            <span class="ml-3" style="vertical-align: middle">{{
              member.name
            }}</span>
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

    <v-list-item-subtitle>
      {{ member.title.join(' · ') }}
    </v-list-item-subtitle>
    <v-list-item-subtitle>
      {{ member.email }}&ZeroWidthSpace;&#64;&ZeroWidthSpace;teahou.se
    </v-list-item-subtitle>

    <v-divider class="my-6"></v-divider>

    <v-list-item-subtitle class="mb-3">介绍</v-list-item-subtitle>
    <v-card>
      <v-container>
        <md class="markdown-render" />
      </v-container>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
import 'highlight.js/styles/base16/material.css'
import members from '@/members'
import { useRoute } from 'vue-router'
import type { ComponentOptions } from 'vue'

const route = useRoute()
const name = route.params.name
const member = members.find((m) => m.name === name)!
let md = $ref<ComponentOptions>()
import(`../members/${member.markdown.replace('.md', '')}.md`).then((m) => {
  console.log(m.default)
  md = m.default
})
</script>
<style lang="scss">
@import 'vuetify/lib/components/VTable/VTable.sass';

.markdown-render {
  h1 {
    font-size: 3rem;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal;
    font-family: Roboto, sans-serif;
    text-transform: none;
    margin-bottom: 24px;
    margin-top: 10px;
  }

  h2 {
    font-size: 2.125rem;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em;
    font-family: Roboto, sans-serif;
    text-transform: none;
    margin-bottom: 24px;
    margin-top: 10px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal;
    font-family: Roboto, sans-serif;
    text-transform: none;
    margin-bottom: 24px;
    margin-top: 10px;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em;
    font-family: Roboto, sans-serif;
    text-transform: none;
    margin-bottom: 24px;
    margin-top: 10px;
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: 0.009375em;
    font-family: Roboto, sans-serif;
    text-transform: none;
    margin-bottom: 24px;
    margin-top: 10px;
  }

  h6 {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em;
    font-family: Roboto, sans-serif;
    text-transform: none;
    margin-bottom: 24px;
    margin-top: 10px;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em;
    font-family: Roboto, sans-serif;
    text-transform: none;
    margin-bottom: 14px;
  }

  a,
  a:visited {
    color: rgb(var(--v-theme-primary));
  }

  dl,
  ol,
  ul {
    margin-bottom: 14px;
    padding-left: 20px;
  }

  hr {
    display: block;
    flex: 1 1 100%;
    height: 0px;
    max-height: 0px;
    transition: inherit;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: thin 0 0 0;
    margin-bottom: 24px;
    margin-top: 10px;
  }

  blockquote {
    padding: 16px 0 16px 24px;
    font-size: 18px;
    font-weight: 300;
  }

  table {
    background: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
    border-radius: inherit;
    line-height: 1.5;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    border-spacing: 0;

    tr > th {
      text-align: left;
      font-size: 0.75rem;
    }

    tr:hover {
      background: rgba(var(--v-border-color), var(--v-hover-opacity));
    }

    tr > td,
    tr > th {
      padding: 0 16px;
      transition: height cubic-bezier(0.4, 0, 0.2, 1);
    }

    tr > td {
      height: 48px;
      font-size: 0.875rem;
    }

    tr:last-child th {
      border-bottom: thin solid
        rgba(var(--v-border-color), var(--v-border-opacity));
    }

    tr > th {
      height: 48px;
    }

    tr:not(:last-child) td,
    tr:not(:last-child) th {
      border-bottom: thin solid
        rgba(var(--v-border-color), var(--v-border-opacity));
    }
  }
}
</style>
