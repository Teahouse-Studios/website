<template>
  <v-container>
    <v-col cols="12">
      <v-row justify="center">
        <h1>捐款</h1>
      </v-row>
    </v-col>
    <p>茶馆工作室一直为所有 Minecraft 玩家服务。但各位也请记住，这是有金钱上的代价的。工作室的支出主要有两方面：</p>
    <v-row justify="center">
      <v-col md="6" xs="12">
        <v-row class="text-center">
          <v-container>
            <h2>成员</h2>
            <p>成员是工作室最重要的一部分。虽然没有薪酬，但是工作室会定期对<del>可爱的</del>成员们进行精神和物质上的回报。</p>
          </v-container>
        </v-row>
      </v-col>
      <v-spacer />
      <v-col md="6" xs="12">
        <v-row class="text-center">
          <v-container>
            <h2>技术</h2>
            <p>我们租用了很多服务器。虽然我们和<a rel="noreferrer noopener" href="https://wd-ljt.com/" target="_blank">问谛居</a>达成了合作，使服务器成本减少了许多，但仍然需要 CNY ¥650 左右的资金（包括向问谛居捐款）才能支撑一个月的服务器花销。</p>
          </v-container>
        </v-row>
      </v-col>
    </v-row>
    <p>面对这样的费用，工作室成员又大部分为学生，我们决定开放捐款通道。</p>
    <v-container>
      <v-card>
        <v-tabs background-color="primary" dark v-model="paymentmethod">
          <v-tabs-slider></v-tabs-slider>

          <v-tab>微信支付</v-tab>

          <v-tab-item>
            <v-card flat>
              <v-card-text>www</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </v-container>
</template>