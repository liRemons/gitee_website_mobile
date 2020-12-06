<template>
  <div class="flex">
    <van-empty description="开发中..." v-if="!html[routerName]">
      <van-button round class="bottom-button" @click="$router.replace('/')">
        回首页
      </van-button>
    </van-empty>
    <div class="md" v-html="html[routerName]"></div>
    <LeftBtn @handleCatalog="handleCatalog"></LeftBtn>
    <van-popup
      v-model:show="showCatalog"
      position="right"
      :style="{ height: '100%', width: '80%' }"
      :lock-scroll="false"
    >
      <Catalog
        @close="showCatalog = false"
        @scrollTo="scrollTo"
        :list="authorList"
        :activeIndex="activeIndex"
      ></Catalog>
    </van-popup>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
  watch,
} from "vue";
import { useRoute } from "vue-router";
import JS from "@/assets/js/JS";
import Vue from "@/assets/js/Vue";
import React from "@/assets/js/React";
import HTML_CSS from "@/assets/js/HTML_CSS";
import TypeScript from "@/assets/js/TypeScript";
import Catalog from "./Catalog.vue";
export default defineComponent({
  components: { Catalog },
  setup() {
    let list: any = [];
    const { proxy }: any = getCurrentInstance();
    const state = reactive({
      html: { JS, Vue, React, HTML_CSS, TypeScript },
      routerName: proxy.$route.name,
      authorList: <any>[],
      activeIndex: 0,
      scrollList: [],
      showCatalog: false,
    });

    watch(
      () => proxy.$route,
      (router, prev) => {
        list = [];
        state.routerName = router.name;
        state.authorList = [];
        proxy.$nextTick(() => {
          init();
        });
      }
    );
    onMounted(() => {
      init();
    });

    const createHeader = () => {
      let mdHeader: any = [];
      mdHeader = document.querySelectorAll(
        ".md-header-anchor"
      ) as NodeListOf<Element>;
      mdHeader.forEach((item: any) => {
        if (!["H1", "H2"].includes(item.parentNode.nodeName)) {
          list.push({
            name: item.name,
            nodeName: item.parentNode.nodeName,
            parentNode: item.parentNode.outerHTML,
            offsetTop: item.parentNode.offsetTop,
          });
        }
      });
      state.scrollList = list.map((item: any) => item.offsetTop);
      let H3: any = [],
        H4: any = [],
        H5: any = [],
        H6: any = [];
      list.forEach((item: any, index: number) => {
        item.nodeName === "H3" && H3.push(index);
        item.nodeName === "H4" && H4.push(index);
        item.nodeName === "H5" && H5.push(index);
        item.nodeName === "H6" && H6.push(index);
      });

      let arr5: any = getArr(H4, H5);
      let arr4: any = getArr(H3, arr5);
      let eleArr = arr4.length ? arr4 : arr5;
      function initData(arr: any) {
        arr.forEach((item: any) => {
          item.name = list[item.index].name;
          item.nodeName = list[item.index].nodeName;
          item.parentNode = list[item.index].parentNode;
          item.offsetTop = list[item.index].offsetTop;
          item.childNode = [];
          item.children.forEach((a: any) => {
            if (!isNaN(a)) {
              item.childNode.push({
                name: list[a].name,
                nodeName: list[a].nodeName,
                parentNode: list[a].parentNode,
                offsetTop: list[a].offsetTop,
                index: a,
              });
            } else {
              item.childNode.push({
                index: a.index,
                name: list[a.index].name,
                nodeName: list[a.index].nodeName,
                parentNode: list[a.index].parentNode,
                offsetTop: list[a.index].offsetTop,
                childNode: initData([a])[0].childNode,
              });
            }
          });
        });
        return arr;
      }

      state.authorList = initData(eleArr);
    };

    const getArr = (bigEle: any, MinEle: any) => {
      let arr: any = [];
      bigEle.forEach((item: any, index: number) => {
        arr[index] = {
          index: item,
          children: MinEle.filter((a: any) => {
            if (index + 1 < bigEle.length + 1) {
              return (
                (isNaN(a) ? a.index : a) > item &&
                (isNaN(a) ? a.index : a) < bigEle[index + 1]
              );
            }
          }),
        };
      });
      return arr;
    };

    const init = () => {
      setTimeout(() => {
        createHeader();
      }, 1000);
    };

    // 菜单控制
    const scrollTo = (index: any) => {
      let mdEle = document.querySelector(".main") as Element;
      mdEle.scrollTop = list[index].offsetTop - 100;
    };

    const handleCatalog = () => {
      let MdEle: any = document.querySelector(".main");
      let scrollTop = MdEle.scrollTop || document.documentElement.scrollTop;
      state.activeIndex = state.scrollList.findIndex(
        (item: any) => item > scrollTop
      );
      state.showCatalog = true;
    };
    return {
      ...toRefs(state),
      scrollTo,
      handleCatalog,
    };
  },
});
</script>

<style src="../assets/css/md.css">
</style>

<style lang="less">
</style>
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