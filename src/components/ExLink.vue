<template>
  <a class="link" :href="props.href" target="_blank" rel="noopener noreferer">
    <slot></slot> <v-icon size="xs">{{ mdiOpenInNew }}}</v-icon>
  </a>
</template>
<script lang="ts" setup>
import { mdiOpenInNew } from '@mdi/js'

const props = defineProps<{
  href: string
}>()
</script>
<style></style>
