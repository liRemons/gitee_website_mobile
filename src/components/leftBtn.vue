<template>
  <div class="leftBtn">
    <div v-for="item in option">
      <transition name="van-slide-right">
        <div
          class="btn"
          :key="item.name"
          v-show="item.name !== 'top' || flag"
          @click="handle(item.name)"
        >
          <van-icon :name="item.icon" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  toRefs,
  reactive,
  onMounted,
} from "vue";

export default defineComponent({
  props: {
    options: {
      type: Array,
      default: [],
    },
  },
  setup() {
    const { proxy }: any = getCurrentInstance();
    const state: any = reactive({
      option: [
        { name: "top", icon: "upgrade" },
        {
          name: "catalog",
          icon: "apps-o",
        },
        {
          name: "home",
          icon: "wap-home-o",
        },
      ],
      flag: false,
    });

    if (proxy.options.length !== 0) {
      state.options = state.option.filter((item: any) =>
        proxy.option.includes(item)
      );
    }

    const handle = (type: string) => {
      if (type === "home") {
        proxy.$router.replace("/");
      } else if (type === "top") {
        let ele: any = document.querySelector(".main") as Element;
        let eleTop = ele.scrollTop;
        let speed = Math.floor(ele.scrollTop / 8);
        let timer = setInterval(() => {
          if (ele.scrollTop <= 0) {
            clearInterval(timer);
            return;
          }
          ele.scrollTop -= speed;
        }, 30);
      } else {
        proxy.$emit("handleCatalog");
      }
    };

    return {
      ...toRefs(state),
      handle,
    };
  },
});
</script>

<style scoped lang="less">
.leftBtn {
  position: fixed;
  bottom: 3rem;
  right: 1rem;
  z-index: 99;
  .btn {
    width: 4.5rem;
    height: 4.5rem;
    background: rgba(255, 255, 255, 0.849);
    border-radius: 50%;
    box-shadow: 0px 0px 6px rgba(92, 92, 92, 0.397);
    margin-bottom: 1rem;
    font-size: 2.2rem;
    line-height: 5rem;
    text-align: center;
  }
  .btn:active {
    transition: all 0.2s;
    transform: rotate(360deg);
  }
}
</style>
