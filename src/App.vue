<template>
  <div>
    <Layout></Layout>
  </div>
</template>

<script >
import { getCurrentInstance } from "vue";
import Layout from "@/components/Layout/index.vue";
export default {
  components: { Layout },
  setup() {
    const { proxy } = getCurrentInstance();
    if (proxy.$utils.IsPC()) {
      window.location.href = "https://remons.gitee.io";
    }
    return {};
  },
};
</script>

<style lang="less">
#app {
  font-size: 1.4rem;
}
ul li {
  list-style: inside;
}
ol li {
  list-style: circle;
}
li p {
  display: inline-block;
}
</style>