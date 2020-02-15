<template>
  <div class="fill-height d-flex flex-column justify-space-between">
    <v-list style="width: 100%" shaped>
      <v-list-item link :to="`/?${nowTime}`" @click="goHome">
        <v-list-item-action>
          <v-icon>mdi-home-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            主页
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/recent">
        <v-list-item-action>
          <v-icon>mdi-history</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            最近使用
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/client">
        <v-list-item-action>
          <v-icon>mdi-cellphone</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            APP下载
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="joinGroup">
        <v-list-item-action>
          <v-icon>mdi-qqchat</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            加入QQ群
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-spacer></v-spacer>
    </v-list>
    <div style="width: 100%;padding: 0 16px;user-select: none">
      <p class="text-center mb-2 darken-4 select">
        Version: 0.1.0-alpha
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { shell } from "electron";
@Component({
  computed: {
    nowTime() {
      return new Date().getTime();
    }
  }
})
export default class Sidebar extends Vue {
  goHome() {
    this.$router.push({
      path: "/webview",
      query: {
        url: "https://web.woobx.cn/?inFrame=1"
      }
    });
  }
  joinGroup() {
    shell.openExternal("https://jq.qq.com/?_wv=1027&k=5p3oOGi");
  }
}
</script>

<style scoped></style>
