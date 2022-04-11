<template>
  <v-app-bar app clipped-left dark elevate-on-scroll>
    <v-toolbar-title>
      <router-link
        to="/"
        class="d-none d-sm-flex"
        title="首页"
        style="display: flex !important"
      >
        <img
          src="@/assets/logo.svg"
          alt="Teahouse Studios"
          class="shrink mr-2"
          height="48"
        />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
