<template>
  <div class="flex">
    <van-empty description="开发中..." v-if="!html">
      <van-button round class="bottom-button" @click="$router.replace('/')">
        回首页
      </van-button>
    </van-empty>
    <div class="md" v-html="html" @click="proview"></div>
    <LeftBtn @handleCatalog="handleCatalog"></LeftBtn>
    <van-popup
      v-model:show="showCatalog"
      position="right"
      :style="{ height: '100%', width: '80%' }"
      :lock-scroll="false"
    >
      <Catalog
        v-if="showCatalog"
        @close="showCatalog = false"
        @scrollTo="scrollTo"
        @search="search"
        :list="authorList"
        :activeIndex="activeIndex"
      ></Catalog>
    </van-popup>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, getCurrentInstance, watch } from "vue";
import Catalog from "../Catalog.vue";
import { ImagePreview } from "vant";
export default {
  components: { Catalog },
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      html: "",
      code: proxy.$route.query.id,
      authorList: [],
      activeIndex: 0,
      showCatalog: false,
    });

    watch(
      () => proxy.$route,
      (router, prev) => {
        state.code = router.query.id;
        state.authorList = [];
        proxy.$nextTick(() => {
          state.code && getFile();
        });
      }
    );
    onMounted(() => {
      getFile();
    });

    const createHeader = () => {
      let arr = [];
      document.querySelectorAll(".md .md-header-anchor").forEach((item) => {
        if (item.parentNode.nodeName !== "H2") {
          arr.push({
            outerHTML: item.parentNode.outerHTML,
            innerText: item.parentNode.innerText,
            nodeName: item.parentNode.nodeName,
            offsetTop: item.parentNode.offsetTop,
            classActive: false,
          });
        }
      });
      state.authorList = arr;
    };
    const getFile = async () => {
      let res = await proxy.$api.HOME.getFileOption(state.code);
      state.html = res;
      setTimeout(() => {
        createHeader();
      }, 1000);
    };

    // 菜单控制
    const scrollTo = (index) => {
      let mdEle = document.querySelector(".main");
      state.activeIndex = index;
      mdEle.scrollTop = state.authorList[index].offsetTop - 100;
    };

    const handleCatalog = () => {
      let MdEle = document.querySelector(".main");
      let scrollTop = MdEle.scrollTop || document.documentElement.scrollTop;
      state.activeIndex = state.authorList.findIndex(
        (item) => item.offsetTop > scrollTop
      );
      state.showCatalog = true;
    };

    const proview = (e) => {
      if (e.target.nodeName === "IMG") {
        ImagePreview([e.target.currentSrc]);
      }
    };

    const search = (val) => {
      createHeader();
      if (val) {
        state.authorList = state.authorList.filter((item) =>
          item.innerText.includes(val)
        );
        if (state.authorList.length === 0) {
          createHeader();
        }
      }
    };
    return {
      ...toRefs(state),
      scrollTo,
      handleCatalog,
      proview,
      search,
    };
  },
};
</script>
<style scoped lang="less">
.author {
  width: 20%;
  overflow: auto;
  background: rgba(255, 255, 255, 0.5);
  .childNode {
    margin: 5px;
    cursor: pointer;
  }
  .childNode:hover {
    color: rgb(255, 255, 255);
  }
}
</style>
