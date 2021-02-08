<template>
  <div>
    <van-cell
      center
      label="前端开发工程师"
      title="李润泉"
      is-link
      to="/"
      @click="show = true"
    >
      <template #icon>
        <van-image
          width="8rem"
          height="8rem"
          round
          :src="$img + 'avatar.jpg'"
        />
      </template>
    </van-cell>
    <van-grid :column-num="3" square :gutter="10" :border="false">
      <van-grid-item
        v-for="item in routes"
        :key="item.path"
        :text="item.title"
        @click="toRouter(item)"
      >
        <template #icon>
          <van-image
            width="8rem"
            height="8rem"
            fit="contain"
            :src="$img + `${item.id}.png`"
          />
        </template>
      </van-grid-item>
    </van-grid>
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
    const state = reactive({
      routes: [
        { title: "html/css", id: "HTML_CSS", path: "/markdown" },
        { title: "JS", id: "JS", path: "/markdown" },
        { title: "Vue", id: "Vue", path: "/markdown" },
        { title: "React", id: "React", path: "/markdown" },
        { title: "TypeScript", id: "TypeScript", path: "/markdown" },
        { title: "Node", id: "Node", path: "/markdown" },
        { title: "Electron", id: "Electron", path: "/markdown" },
        { title: "其它", id: "other", path: "/markdown" },
      ],
      show: false,
    });
    const toRouter = (data) => {
      proxy.$router.replace({
        path: data.path,
        query: {
          id: data.id,
        },
      });
    };
    return {
      ...toRefs(state),
      toRouter,
    };
  },
};
</script>

<style scoped lang="less">
::v-deep {
  .van-cell__title {
    margin-left: 1rem;
    font-weight: bold;
    span {
      font-size: 2.2rem;
    }
  }
  .van-cell,
  .van-grid-item__content {
    background: rgba(255, 255, 255, 0.3);
  }
  .van-grid {
    margin-top: 1rem;
  }
  .van-grid-item__content {
    border-radius: 5px;
  }
  .van-popup::before {
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
  .van-grid-item__text {
    color: #000;
  }
}
</style>