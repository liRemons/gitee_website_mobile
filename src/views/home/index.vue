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
        :text="item.meta.title"
        :to="item.path"
      >
        <template #icon>
          <van-image
            width="8rem"
            height="8rem"
            fit="contain"
            :src="$img + `${item.name}.png`"
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

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, toRefs } from "vue";
import routerData from "@/router/index.ts";
import MeLeft from "./meLeft.vue";
export default defineComponent({
  components: { MeLeft },
  setup() {
    const {
      options: { routes },
    } = routerData;

    const state = reactive({
      routes: routes.filter((item: any) => item.meta),
      show: false,
    });
    return {
      ...toRefs(state),
    };
  },
});
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

  .van-popup {
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