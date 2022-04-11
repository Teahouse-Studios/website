<template>
  <v-footer
    style="background-color: #323437; padding: 30px"
    class="py-8 px-12"
    dark
  >
    <v-row>
      <v-col md="6" sm="12" class="text-center text-md-left">
        <div style="line-height: 1.618; font-size: 14px">
          <v-btn variant="text" class="text-white" to="/terms/"
            ><v-icon left>mdi-script</v-icon> 服务条款</v-btn
          ><v-btn variant="text" class="text-white" to="/privacy/"
            ><v-icon left>mdi-lock</v-icon> 隐私政策</v-btn
          >
        </div>
      </v-col>
      <v-col md="6" sm="12" class="text-center text-md-right">
        <router-link to="/" title="首页">
          <img
            src="@/assets/logo.svg"
            alt="Teahouse Studios"
            height="48"
            class="mx-auto ml-md-auto mr-md-0"
            style="filter: invert(1)"
          />
        </router-link>
      </v-col>
    </v-row>
  </v-footer>
</template>
