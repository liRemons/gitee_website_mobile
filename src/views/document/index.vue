<!--
 * @Descripttion: 
 * @version: 
 * @Author: Remons
 * @Date: 2021-03-28 20:18:01
 * @LastEditors: Remons
 * @LastEditTime: 2021-03-28 21:07:20
-->
<template>
  <div>
    <van-empty v-if="!docList.length" description="暂无数据">
      <van-button round class="bottom-button" @click="$router.replace('/')">
        回首页
      </van-button>
    </van-empty>
    <div v-else>
      <van-cell
        is-link
        :title="item"
        v-for="item in docList"
        :key="item"
        @click="viewDoc(item)"
      ></van-cell>
    </div>
    <van-dialog
      v-model:show="show"
      @confirm="confirmPWD"
      title="验证密码"
      show-cancel-button
    >
      <van-field
        v-model="password"
        label-align="center"
        autofocus
        type="password"
        label="密码"
        placeholder="请输入"
      />
    </van-dialog>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance, onMounted } from "vue";
import { dateFormat } from "methods-r";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      docList: [],
      show: true,
      password: "",
    });

    onMounted(() => {
      // getDocList();
    });

    const getDocList = async () => {
      const res = await proxy.$api.HOME.getDocList();
      if (res.length) {
        state.docList = res;
      } else {
        proxy.$toast.fail("暂无数据");
      }
    };
    const viewDoc = (fileName) => {
      window.open(proxy.$url + "/website/assets/documents/" + fileName);
    };

    const confirmPWD = () => {
      if (
        state.password ===
        "remons" + dateFormat("", "yyyy-MM-dd").replace(/-/g, "")
      ) {
        getDocList();
      } else {
        proxy.$toast.fail("密码错误请联系开发者");
      }
    };
    return {
      ...toRefs(state),
      viewDoc,
      confirmPWD,
    };
  },
};
</script>

<style lang="less" scoped>
::v-deep {
  .van-cell {
    background: transparent;
  }
}
</style>