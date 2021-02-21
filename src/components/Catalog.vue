<template>
  <div class="child_bg">
    <van-nav-bar
      title="目录"
      :left-arrow="$route.path !== '/'"
      @click-left="close"
    >
      <template #right>
        <van-icon
          @click="inputFlag = true"
          name="search"
          v-if="$route.path !== '/'"
          size="20"
        />
      </template>
    </van-nav-bar>
    <form action="/" v-if="inputFlag">
      <van-search
        v-model="value"
        show-action
        shape="round"
        background="transparent"
        placeholder="请输入搜索关键词"
        @search="$emit('search', value)"
        @cancel="onCancel"
      />
    </form>
    <div class="main menu">
      <div
        :class="{ active: index == activeIndex }"
        v-for="(item, index) in list"
        v-html="item.outerHTML"
        :key="item.outerHTML"
        @click="handle(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from "vue";

export default {
  name:"Catalog",
  props: { list: Array, activeIndex: Number },
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      value: "",
      inputFlag: false,
    });
    const close = () => {
      proxy.$emit("close");
    };
    const handle = (index) => {
      proxy.$emit("scrollTo", index);
    };

    const onCancel = () => {
      proxy.$emit("search", "");
      state.value = "";
      state.inputFlag = false;
    };
    return {
      close,
      ...toRefs(state),
      onCancel,
      handle,
    };
  },
};
</script>

<style scoped lang="less">
::v-deep {
  h2,
  h3,
  h4,
  h5 {
    cursor: pointer;
    margin: 0;
    padding: 0.5rem 0;
  }

  h2 {
    padding-left: 0.2rem;
    font-size: 2rem !important;
  }
  h3 {
    padding-left: 0.6rem;
    font-size: 1.7rem !important;
  }
  h4 {
    padding-left: 1.2rem;
    font-size: 1.4rem !important;
  }
  h5 {
    padding-left: 1.8rem;
    font-size: 1.2rem !important;
  }
  .active {
    background: rgba(213, 231, 255, 0.801);
    color: rgb(72, 105, 255);
  }
  .van-search__action:active {
    background: transparent;
    color: rgb(72, 105, 255);
  }
}
.child_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.child_bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/img/bg.jpg");
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