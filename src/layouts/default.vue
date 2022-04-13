<template>
  <v-app class="text-body-1">
    <t-header />
    <v-main>
      <router-view v-slot="{ Component }">
        <v-fade-transition mode="out-in">
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
    <t-footer />
  </v-app>
</template>
<script lang="ts" setup>
import TFooter from '@/components/TFooter.vue'
import THeader from '@/components/THeader.vue'
</script>
<style>
html {
  overflow-y: hidden;
}

a:not(:hover) {
  text-decoration: none;
}

.link,
.link:visited {
  color: rgb(var(--v-theme-primary));
}
</style>
