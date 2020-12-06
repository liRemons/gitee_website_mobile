<template>
  <div>
    <Layout></Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import Layout from "@/components/Layout/index.vue";
export default defineComponent({
  components: { Layout},
  setup() {
    const { proxy }: any = getCurrentInstance();
    if (proxy.$utils.IsPC()) {
      window.location.href = "https://remons.gitee.io";
    }
    return {};
  },
});
</script>

<style lang="less">
#app {
  font-size: 1.2rem;
}
</style>