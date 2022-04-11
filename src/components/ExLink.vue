<template>
  <a class="link" :href="props.href" target="_blank" rel="noopener noreferer">
    <slot></slot> <v-icon size="xs">mdi-open-in-new</v-icon>
  </a>
</template>
<script lang="ts" setup>
const props = defineProps<{
  href: string
}>()
</script>
<style></style>
