<template>
  <Layout></Layout>
</template>

<script >
import { getCurrentInstance, onMounted } from "vue";
import Layout from "@/components/Layout/index.vue";
export default {
  components: { Layout },
  setup() {
    const { proxy } = getCurrentInstance();
    
    onMounted(() => {
      target();
    });
    const target = () => {
      setTimeout(() => {
        if (proxy.$utils.IsPC()) {
          const {
            path,
            query: { id, index },
          } = proxy.$route;
          let url = "https://remons.gitee.io";
          if (id) {
            window.location.href =
              url + `${path}?id=${id}${index ? "&index=" + index : ""}`;
          } else {
            window.location.href = url;
          }
        }
      }, 1000);
    };
  },
};
</script>

<style lang="less">
#app {
  font-size: 1.4rem;
  font-family: PingFang SC;
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
body,
font {
  color: #000 !important;
}
</style>