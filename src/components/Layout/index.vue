<template>
  <div class="bg">
    <van-nav-bar
      :title="$route.meta.title || 'Remons'"
      :left-arrow="$route.path !== '/'"
      @click-left="$router.go(-1)"
    >
      <template #right>
        <van-icon v-if="$route.path !== '/'" name="weapp-nav" size="20" />
      </template>
    </van-nav-bar>
     
    <div class="main"><router-view></router-view></div>
  
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/bg.jpg");
  filter: blur(5px);
  z-index: -1;
  background-size: cover;
}
.van-nav-bar {
  background: rgba(255, 255, 255, 0.363);
}
.main {
  flex: 1;
  overflow-y: auto;
}
</style>