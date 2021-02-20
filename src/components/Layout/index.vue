<template>
  <div class="bg" :class="darkIcon==='closed-eye'&&'dark_bg'"> 
    <van-nav-bar
      :left-arrow="$route.path !== '/'"
      @click-left="$router.replace('/')"
      @click-right="onClickRight"
    >
      <template #title>
        <div @click="reload">
          {{ $route.query.title || "Remons" }}
        </div>
      </template>

      <template #right>
        <!-- <van-icon name="closed-eye" /> -->
        <van-icon :name="darkIcon" size="18" />
      </template>
    </van-nav-bar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script >
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const reload = () => {
      window.location.reload();
    };
    const state = reactive({
      darkIcon: "eye-o",
    });
    const onClickRight = () => {
      if (state.darkIcon === "eye-o") {
        state.darkIcon = "closed-eye";
        
        document.documentElement.style.setProperty(
          "--dark",
          "invert(100%) hue-rotate(180deg)"
        );
      } else {
        document.documentElement.style.setProperty("--dark", "");

        state.darkIcon = "eye-o";
      }
    };
    return {
      reload,
      onClickRight,
      ...toRefs(state),
    };
  },
};
</script>
<style>
:root {
  --dark: "";
}
.bg,
img,
.van-overlay,
.md-fences {
  filter: var(--dark);
}
</style>
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
.dark_bg::before{
  filter: blur(100px);
}
.van-nav-bar {
  background: rgba(255, 255, 255, 0.363);
}
.main {
  flex: 1;
  overflow-y: auto;
}
</style>