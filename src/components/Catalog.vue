<template>
  <div class="bg">
    <van-nav-bar
      title="目录"
      :left-arrow="$route.path !== '/'"
      @click-left="close"
    >
      <template #right>
        <van-icon v-if="$route.path !== '/'" name="weapp-nav" size="20" />
      </template>
    </van-nav-bar>
    <div class="main">
      <div v-for="item in list">
        <van-cell
          clickable
          :class="{ active: activeName.includes(item.index) }"
          v-if="item.childNode.length == 0"
          @click="handle(item)"
        >
          <div v-html="item.parentNode"></div>
        </van-cell>
        <van-collapse v-model="activeName" v-else>
          <van-collapse-item :name="item.index">
            <template #title>
              <div v-html="item.parentNode"></div>
            </template>
            <div v-for="a in item.childNode">
              <van-cell
                clickable
                @click="handle(a)"
                :class="{ active: activeName.includes(a.index) }"
                v-if="!a.childNode || a.childNode.length == 0"
              >
                <div v-html="a.parentNode"></div>
              </van-cell>
              <van-collapse v-model="activeName" v-else accordion>
                <van-collapse-item :name="a.index">
                  <template #title>
                    <div v-html="a.parentNode"></div>
                  </template>
                  <div v-for="b in a.childNode">
                    <van-cell
                      clickable
                      @click="handle(b)"
                      :class="{ active: activeName.includes(b.index) }"
                    >
                      <div v-html="b.parentNode"></div>
                    </van-cell>
                  </div>
                </van-collapse-item>
              </van-collapse>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs,
  watch,
  onMounted,
} from "vue";

export default defineComponent({
  props: { list: Array, activeIndex: Number },
  setup() {
    const { proxy }: any = getCurrentInstance();
    const state = reactive({
      activeName: [proxy.activeIndex],
    });
    const close = () => {
      proxy.$emit("close");
    };
    const handle = (data: any) => {
      initActive(data.index);
      proxy.$emit("scrollTo", data.index);
    };
    watch(
      () => proxy.activeIndex,
      () => {
        initActive(proxy.activeIndex);
      }
    );

    onMounted(() => {
      initActive(proxy.activeIndex);
    });

    const initActive = (activeIndex: number) => {
      let indexArr: any = [];
      if (activeIndex) {
        proxy.list.forEach((item: any) => {
          if (item.index === activeIndex) {
            indexArr.push(item.index);
          }
          item.childNode.length &&
            item.childNode.forEach((a: any) => {
              if (a.index === activeIndex) {
                indexArr.push(a.index, item.index);
              }
              a.childNode.length &&
                a.childNode.forEach((c: any) => {
                  if (c.index === activeIndex) {
                    indexArr.push(c.index, item.index, a.index);
                  }
                });
            });
        });
      }
      state.activeName = [...new Set(indexArr)];
    };
    return {
      close,
      ...toRefs(state),
      handle,
    };
  },
});
</script>

<style scoped lang="less">
::v-deep {
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }
  h2 {
    font-size: 18px !important;
  }
  h3 {
    font-size: 16px !important;
  }
  h4 {
    font-size: 14px !important;
  }
  h5 {
    font-size: 12px !important;
  }
}
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

::v-deep {
  .van-cell {
    padding: 0.8rem 1rem;
  }
  .van-cell,
  .van-collapse-item__content {
    background: transparent;
    // padding: 0 1rem;
  }
  [class*="van-hairline"]::after {
    border: none;
  }
  .active {
    background: rgba(255, 255, 255, 0.3);
    .van-cell__value--alone {
      color: #4994df;
    }
  }
}
</style>