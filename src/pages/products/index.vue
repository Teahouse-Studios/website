<template>
  <v-container class="py-4">
    <h1 class="text-h3 mt-6 mb-4">产品</h1>
    <p class="text-body-1 mb-3">
      茶馆工作室专注于 Minecraft
      等游戏的周边内容创作。以下是茶馆工作室曾经公开过的所有产品。
    </p>
    <v-divider class="mb-4" />
    <div class="d-flex justify-center" style="flex-wrap: wrap">
      <v-card
        v-for="p in products"
        :key="p.name"
        class="product-card mx-4 my-4"
      >
        <v-row
          ><v-col cols="2">
            <v-card-avatar>
              <v-avatar><v-img :src="getSrc(p.logo)" /></v-avatar>
            </v-card-avatar>
          </v-col>
          <v-col cols="10" class="d-flex align-center">
            <v-card-title v-text="p.name"></v-card-title> </v-col
        ></v-row>

        <v-chip
          v-for="t in p.tags"
          :key="t"
          class="ma-2"
          variant="contained-text"
          v-text="t"
        ></v-chip>

        <v-card-text v-text="p.description"></v-card-text>

        <v-card-actions>
          <v-btn
            v-for="l in p.links"
            :key="l.href"
            variant="plain"
            :href="l.href"
            ><v-icon left>{{ l.icon }}</v-icon> {{ l.text }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
<script lang="ts" setup>
import products from '@/data/products'

const getSrc = (name) => {
  const path = `../../assets/products/${name}`
  const modules = import.meta.globEager('@/assets/products/*')
  console.log(modules)
  return modules[path].default
}
</script>
<style lang="scss">
.product-card {
  width: 30%;
  min-width: 350px;
  margin-right: 1rem;
}
</style>
