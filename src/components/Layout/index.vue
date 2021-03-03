<template>
  <div class="bg" :class="darkIcon === 'closed-eye' && 'dark_bg'">
    <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight">
      <template #title>
        <div @click="reload">
          {{ $route.query.title || "Hello World" }}
        </div>
      </template>

      <template #right>
        <van-icon :name="darkIcon" size="18" />
      </template>
      <template #left>
        <van-icon v-if="$route.path !== '/'" name="arrow-left" size="18" />
        <van-image
          v-else
          width="2.6rem"
          height="2.6rem"
          round
          :src="$img + 'avatar.jpg'"
        />
      </template>
    </van-nav-bar>
    <div class="main">
      <router-view></router-view>
    </div>
    <van-popup
      v-model:show="show"
      position="left"
      :style="{ height: '100%', width: '70%' }"
    >
      <MeLeft></MeLeft>
    </van-popup>
  </div>
</template>

<script >
import { reactive, toRefs, getCurrentInstance } from "vue";
import MeLeft from "./meLeft.vue";
export default {
  components: { MeLeft },
  setup() {
    const { proxy } = getCurrentInstance();
    const reload = () => {
      window.location.reload();
    };
    const state = reactive({
      darkIcon: "eye-o",
      show: false,
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

    const onClickLeft = () => {
      if (proxy.$route.path === "/") {
        state.show = true;
      } else {
        proxy.$router.replace("/");
      }
    };
    return {
      reload,
      onClickRight,
      onClickLeft,
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
  background: var(--bg);
  filter: blur(5px);
  z-index: -1;
  background-size: cover;
}
.dark_bg::before {
  filter: blur(100px);
}
.van-nav-bar {
  background: rgba(255, 255, 255, 0.363);
}
.main {
  flex: 1;
  overflow-y: auto;
}
::v-deep {
  .van-popup::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:var(--bg);
    filter: blur(5px);
    z-index: -1;
    background-size: cover;
  }
}
</style>