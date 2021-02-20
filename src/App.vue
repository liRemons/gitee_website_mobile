<template>
  <Layout></Layout>
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
#write {
  background: transparent !important;
}
body,font {
  color: #000 !important;
}
</style>