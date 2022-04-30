<template>
  <v-app class="text-body-1">
    <t-header />
    <v-main>
      <v-fade-transition mode="out-in">
        <v-container class="pt-4 pb-8">
          <router-view class="markdown-render" />
        </v-container>
      </v-fade-transition>
    </v-main>
    <t-footer />
  </v-app>
</template>
<script lang="ts" setup>
import TFooter from '@/components/TFooter.vue'
import THeader from '@/components/THeader.vue'
</script>
<style lang="scss">
@import '@/styles/markdown.scss';

a:not(:hover) {
  text-decoration: none;
}

.link,
.link:visited {
  color: rgb(var(--v-theme-primary));
}
</style>
