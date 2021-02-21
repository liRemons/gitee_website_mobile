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
      teleport=".bg"
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
      topFlag: false,
      watchScrollFlag: true,
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
    // 创建标题的目录
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
      state.authorList = arr;
    };
    // 获取数据
    const getFile = async () => {
      let res = await proxy.$api.HOME.getFileOption(state.code);
      state.html = res;
      proxy.$nextTick(() => {
        createHeader();
        let a = [...document.querySelectorAll("#write a")].filter((item) =>
          item.outerHTML.includes("#")
        );
        // 阻止锚点，同时加入自定义的事件代替锚点
        a.forEach((item) => {
          item.onclick = (e) => {
            let index = state.authorList.findIndex(
              (a) =>
                decodeURIComponent(e.target.parentNode.hash).replace(
                  "#",
                  ""
                ) === a.innerText
            );
            index >= 0 && scrollTo(index);
            return false;
          };
        });
        // 首次进入时，跳转
        proxy.$route.query.index && scrollTo(proxy.$route.query.index);
        // 给代码块加入复制的类名
        document.querySelectorAll(".md-fences").forEach((item) => {
          let copyCodeBox = document.createElement("div");
          copyCodeBox.setAttribute("class", "copy_code");
          item.appendChild(copyCodeBox);
        });
      });
    };
    // 当前的标题变化时，改变路由
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
      state.watchScrollFlag = false;
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
      if (!state.watchScrollFlag) {
        state.watchScrollFlag = true;
        return;
      }
      let MdEle = document.querySelector(".main");
      let scrollTop = MdEle.scrollTop || document.documentElement.scrollTop;
      // 控制回到顶部图标显示
      scrollTop >= 400 ? (state.topFlag = true) : (state.topFlag = false);
      // 找出满足条件的标题，用来添加active属性及改变路由
      state.activeIndex = Math.max(
        ...state.authorList
          .map((item, index) => {
            if (scrollTop >= item.offsetTop) {
              return index;
            }
          })
          .filter((item) => item !== undefined)
      );
      state.activeIndex > 0 && changeRouter(state.activeIndex);
    };
    // 打开目录
    const handleCatalog = () => {
      state.showCatalog = true;
    };
    // 点击html事件，预览或者copy
    const proview = (e) => {
      if (e.target.className === "copy_code") {
        proxy.$utils.copy(e.target.parentElement);
        proxy.$toast.success("复制成功");
        return;
      }
      e.target.nodeName === "IMG" && ImagePreview([e.target.currentSrc]);
    };
    // 标题搜索的功能
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
