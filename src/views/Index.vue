<template>
  <iframe
    id="webview"
    src="https://web.woobx.cn/?inFrame=1"
    style="width: 100%;height: 100%"
    frameborder="0"
  ></iframe>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Index extends Vue {}
</script>

<style scoped></style>
