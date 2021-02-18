<template>
  <div class="flex">
    <van-empty description="开发中..." v-if="!html">
      <van-button round class="bottom-button" @click="$router.replace('/')">
        回首页
      </van-button>
    </van-empty>
    <div class="md" v-html="html" @click="proview"></div>
    <LeftBtn :topFlag="topFlag" @handleCatalog="handleCatalog"></LeftBtn>
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
    let watchScroll = false;
    const state = reactive({
      html: "",
      code: proxy.$route.query.id,
      authorList: [],
      activeIndex: 0,
      showCatalog: false,
      topFlag: false,
    });

    watch(
      () => proxy.$route,
      (router, prev) => {
        state.code = router.query.id;
        proxy.$nextTick(() => {
          prev.query.id !== state.code && state.code && getFile();
        });
      }
    );
    onMounted(() => {
      getFile();
      let MdEle = document.querySelector(".main");
      proxy.$utils.watchScroll(scroll, 500, MdEle); // 每隔 0.5s 输出
    });

    const createHeader = () => {
      let arr = [];
      let anchor = document.querySelectorAll(".md .md-header-anchor");
      anchor.forEach((item) => {
        if (item.parentNode.nodeName !== "H2" || anchor.length === 1) {
          arr.push({
            outerHTML: item.parentNode.outerHTML.replace(
              /<a.*?>([\s\S]*)<\/a>/,
              ""
            ),
            innerText: item.parentNode.innerText,
            nodeName: item.parentNode.nodeName,
            offsetTop: item.parentNode.offsetTop,
            classActive: false,
          });
        }
      });
      let index = proxy.$route.query.index;
      state.authorList = arr;
      if (index) {
        scrollTo(index);
      }
    };
    const getFile = async () => {
      let res = await proxy.$api.HOME.getFileOption(state.code);
      state.html = res;
      proxy.$nextTick(() => {
        createHeader();
        let a = [...document.querySelectorAll("#write a")].filter((item) =>
          item.outerHTML.includes("#")
        );
        a.forEach((item) => {
          item.onclick = (e) => {
            let index = state.authorList.findIndex(
              (a) => e.target.parentNode.hash.replace("#", "") === a.innerText
            );
            index >= 0 && scrollTo(index);
            return false;
          };
        });
        document.querySelectorAll(".md-fences").forEach((item) => {
          let copyCodeBox = document.createElement("div");
          copyCodeBox.setAttribute("class", "copy_code");
          item.appendChild(copyCodeBox);
        });
      });
    };

    const changeRouter = (index) => {
      const { $route } = proxy;
      proxy.$router.replace({
        path: $route.path,
        query: {
          title: $route.query.title,
          id: $route.query.id,
          index: index,
        },
      });
    };

    // 菜单控制
    const scrollTo = (index) => {
      let dom;
      document.querySelectorAll(".md-header-anchor").forEach((item) => {
        if (item.parentNode.innerText === state.authorList[index].innerText) {
          dom = item;
        }
      });
      if (dom) {
        dom.scrollIntoView({ behavior: "smooth" });
        state.activeIndex = index;
        changeRouter(index);
      }
    };
    const scroll = () => {
      if (!watchScroll) {
        watchScroll = true;
        return;
      }

      let MdEle = document.querySelector(".main");
      let scrollTop = MdEle.scrollTop || document.documentElement.scrollTop;
      scrollTop >= 400 ? (state.topFlag = true) : (state.topFlag = false);
      let menuIndex = state.authorList.findIndex(
        (item) => item.offsetTop  > scrollTop 
      );
      if (menuIndex > 0) {
        changeRouter(menuIndex);
      }
    };

    const handleCatalog = () => {
      createHeader();
      let MdEle = document.querySelector(".main");
      let scrollTop = MdEle.scrollTop || document.documentElement.scrollTop;
      state.activeIndex = state.authorList.findIndex(
        (item) => item.offsetTop > scrollTop
      );
      if (state.activeIndex > 0) {
        changeRouter(state.activeIndex);
      }
      state.showCatalog = true;
    };

    const proview = (e) => {
      if (e.target.className === "copy_code") {
        proxy.$utils.copy(e.target.parentElement);
        proxy.$toast.success("复制成功");
        return;
      }
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
