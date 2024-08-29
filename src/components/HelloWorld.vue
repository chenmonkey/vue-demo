<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="openModal">打开model弹窗</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, h } from "vue";
import { VxeUI } from "vxe-pc-ui";
import Test from "./Test.vue";

defineProps({
  msg: { type: String, default: "" },
});

function openModal() {
  const saleInfo = { saleCode: "111", saleId: "222" };
  VxeUI.modal.open({
    title: `测试弹窗`,
    mask: false,
    lockView: false,
    escClosable: true,
    width: 1000,
    height: 800,
    showZoom: true,
    resize: true,
    slots: {
      default() {
        return h(Test, { props: { saleInfo } });
      },
    },
  });
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
