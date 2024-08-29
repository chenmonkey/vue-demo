<template>
  <div>
    <p v-if="saleInfo.saleCode">{{ saleInfo.saleCode }} - {{ saleInfo.saleId }}</p>
    <p v-else>销售信息无效或未提供。</p>
    <p>111111</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  saleInfo: {
      type: Object,
      default() {
        return {}
      }
    }
});

</script>
