<template>
  <v-container>
      <v-card>
        <v-tabs background-color="primary" dark v-model="paymentmethod">
          <v-tabs-slider />

          <v-tab>微信支付</v-tab>
          <v-tab>支付宝</v-tab>
          <v-tab>PayPal</v-tab>
          <v-tab>国际信用卡</v-tab>
          <v-tab>其它方式</v-tab>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>若要使用微信支付向我们捐款，请到我们的合作伙伴爱发电进行下一步支付。</p>
                <v-btn href="https://afdian.net/@teahouse" color="primary">前往爱发电</v-btn>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>若要使用支付宝向我们捐款，请到我们的合作伙伴爱发电进行下一步支付。</p>
                <v-btn href="https://afdian.net/@teahouse" color="primary">前往爱发电</v-btn>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>若要使用 PayPal 向我们捐款，请到我们的合作伙伴 Patreon 进行下一步支付。</p>
                <v-btn href="https://patreon.com/teahousestudios" color="primary">前往 Patreon</v-btn>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>若要使用国际信用卡向我们捐款，请到我们的合作伙伴 Patreon 进行下一步支付。</p>
                <v-btn href="https://patreon.com/teahousestudios" color="primary">前往 Patreon</v-btn>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>若要使用其它方式向我们捐款，请使用 E-mail 联系我们。</p>
                <v-btn href="mailto:admin@teahou.se" color="primary">发送 E-mail</v-btn>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
  </v-container>
</template>
