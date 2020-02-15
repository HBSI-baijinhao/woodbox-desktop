<template>
  <webview
    id="webview"
    src="https://web.woobx.cn/recent?inFrame=1"
    style="width: 100%;height: 100%"
    frameborder="0"
  ></webview>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Recent extends Vue {}
</script>

<style scoped></style>
