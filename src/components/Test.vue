<template>
  <div>
    <h3>{{ title }}</h3>
    <p v-if="saleInfo.saleCode">{{ saleInfo.saleCode }} - {{ saleInfo.saleId }}</p>
    <p v-else>销售信息无效或未提供。</p>
    <p>111111</p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    saleInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      title: '模态框标题'
    };
  }
};
</script>