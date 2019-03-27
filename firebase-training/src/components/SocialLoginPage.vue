<template>
  <div class="top">
    <v-flex xs12 sm6 offset-sm3>
      <h2>SNS認証</h2>
      <v-card class="container">
        <v-flex>
          <v-flex style="margin: 24px;">
            <span>{{ loginStatusText }}</span>
          </v-flex>
          <v-flex style="margin: 24px;" xs12 sm6 offset-sm3>
            <v-flex>
              <v-btn 
                @click="onLogin(0)"
                round 
                large
                :loading="isLoading"
                :disabled="isLoading"
                class="social twitter white--text">
                Twitterでログイン
              </v-btn>
              <v-btn 
                @click="onLogin(1)"
                round 
                large
                :loading="isLoading"
                :disabled="isLoading"
                class="social facebook white--text">
                Facebookでログイン
              </v-btn>
            </v-flex>
            <v-flex style="margin-top: 12px;">
              <v-btn
                @click="onLogout"
                :loading="isLoading"
                :disabled="!isLoginStatus"
                color="red"
                class="white--text">
                ログアウトする
              </v-btn>
            </v-flex>
          </v-flex>
        </v-flex>
      </v-card>
    </v-flex>
  </div>
</template>