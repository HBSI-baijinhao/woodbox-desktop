<template>
  <div class="window-actions d-flex flex-row align-center">
    <v-btn icon @click="windowControl('min')" title="最小化">
      <v-icon>mdi-window-minimize</v-icon>
    </v-btn>
    <v-btn
      icon
      @click="windowControl('max')"
      :title="$store.state.maximized ? '还原' : '最大化'"
    >
      <v-icon>{{
        $store.state.maximized ? "mdi-dock-window" : "mdi-window-maximize"
      }}</v-icon>
    </v-btn>
    <v-btn icon @click="windowControl('close')" title="关闭">
      <v-icon>mdi-window-close</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { remote } from "electron";

@Component
export default class WindowActions extends Vue {
  windowControl(action: string) {
    const currentWindow = remote.getCurrentWindow();
    switch (action) {
      case "min":
        currentWindow.minimize();
        break;
      case "max":
        currentWindow.isMaximized()
          ? currentWindow.unmaximize()
          : currentWindow.maximize();
        break;
      case "close":
        remote.dialog
          .showMessageBox(currentWindow, {
            title: "提示",
            type: "warning",
            message: "确定要关闭窗口吗？",
            buttons: ["最小化", "确认关闭"],
            cancelId: 2
          })
          .then(msg => {
            msg.response === 1 ? currentWindow.close() : "";
            msg.response === 0 ? currentWindow.minimize() : "";
          });
    }
  }
}
</script>

<style scoped>
.window-actions {
  -webkit-app-region: no-drag;
}
</style>
