<template>
  <iframe
    id="webview"
    :src="src"
    style="width: 100%;height: 100%"
    frameborder="0"
    v-show="show"
  ></iframe>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class WebPage extends Vue {
  src = "";
  show = false;
  beforeMount() {
    if (typeof this.$route.query.url === "string") {
      this.src = this.$route.query.url;
    } else {
      this.src = "https://web.woobx.cn/?inFrame=1";
    }
  }
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.show = true;
      }, 50);
    });
  }
}
</script>

<style scoped></style>
