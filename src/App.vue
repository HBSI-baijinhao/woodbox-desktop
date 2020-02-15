<template>
  <v-app id="app" class="wb-app">
    <v-app-bar clipped-left fixed app class="wb-app-bar">
      <div class="app-bar-wrapper d-flex flex-row align-center">
        <v-app-bar-nav-icon
          class="drawer-btn"
          @click.stop="drawer = !drawer"
          :title="drawer ? '关闭菜单栏' : '打开菜单栏'"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="pl-1">
          一个木函工具箱
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <window-actions></window-actions>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" clipped app mobile-break-point="600">
      <sidebar></sidebar>
    </v-navigation-drawer>
    <v-content style="background-color: #fafafa">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import WindowActions from "@/components/WindowActions.vue";
import Sidebar from "@/components/Sidebar.vue";
import { remote } from "electron";
@Component({
  components: {
    WindowActions,
    Sidebar
  },
  mounted: function() {
    document.title = "一个木函工具箱";
    const commitSize = () => {
      this.$store.commit("kvSet", {
        key: "maximized",
        value: remote.getCurrentWindow().isMaximized()
      });
    };
    commitSize();
    window.onresize = () => {
      commitSize();
    };
  }
})
export default class App extends Vue {
  drawer = false;
}
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.wb-app {
  .wb-app-bar {
    .app-bar-wrapper {
      height: 100%;
      width: 100%;
      padding: 0.1px 0;
      -webkit-app-region: drag;
      .drawer-btn {
        -webkit-app-region: no-drag;
      }
    }
  }
  .v-navigation-drawer__border {
    display: none !important;
  }
}
</style>
