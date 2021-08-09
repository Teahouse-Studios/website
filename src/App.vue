<template>
  <div id="app">
    <v-app class="text-body-1">
      <v-app-bar app clipped-left color="indigo" dark elevate-on-scroll>
        <v-toolbar-title>
          <router-link to="/" class="d-none d-sm-flex" title="首页" style="display: flex !important">
            <v-img
              src="@/assets/logo.svg"
              alt="Teahouse Studios"
              class="shrink mr-2"
              contain
              transition="scale-transition"
              max-height="48"
              position="left center"
              style="filter: invert(1)"
            />
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link to="/donate/"><v-btn text><v-icon left>mdi-cash-usd</v-icon> 捐款</v-btn></router-link>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <v-fade-transition mode="out-in">
            <router-view />
          </v-fade-transition>
        </v-container>
      </v-main>
      <v-footer color="#323437" padless style="padding:30px" dark>
        <v-col md="6" sm="12" class="text-md-left test-sm-center">
          <div style="line-height:1.618;font-size:14px">
            <router-link to="/terms/"><v-btn text class="white--text"><v-icon left>mdi-script</v-icon> 服务条款</v-btn></router-link>
            <router-link to="/privacy/"><v-btn text class="white--text"><v-icon left>mdi-lock</v-icon> 隐私政策</v-btn></router-link>
          </div>
        </v-col>
        <v-col md="6" sm="12" class="text-md-right test-sm-center">
          <router-link to="/" class="d-none d-sm-flex" title="首页">
            <v-img
              src="@/assets/logo.svg"
              alt="Teahouse Studios"
              contain
              transition="scale-transition"
              max-height="48"
              position="right"
              style="filter: invert(1)"
            />
          </router-link>
        </v-col>
      </v-footer>
    </v-app>
  </div>
</template>
<style>
.v-application a {
  text-decoration: none;
}
</style>