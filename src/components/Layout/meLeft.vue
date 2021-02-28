<template>
  <div>
    <div class="avatar">
      <van-image width="8rem" height="8rem" round :src="$img + 'avatar.jpg'" />
    </div>
    <van-cell center label="前端开发工程师" title="李润泉" />
    <van-cell
      :icon="item.icon"
      :value="item.introduce"
      v-for="item in data"
      :key="item.introduce"
      :is-link="item.value"
      @click="handle(item)"
    />
    <van-cell>
      <template #default>
        <div class="contactOption">
          <span
            v-for="item in contactOption"
            class="icon"
            :key="item.icon"
            @click="contactOptionClick(item)"
          >
            <img :src="$img + `${item.icon}.png`" alt="" />
          </span>
        </div>
      </template>
    </van-cell>
    <van-dialog
      v-model:show="show"
      teleport="body"
      closeOnClickOverlay
      :showConfirmButton="false"
    >
      <van-cell value="复制号码" clickable @click="copy" />
      <van-cell
        value="查看二维码"
        clickable
        @click="
          ImagePreview([$img + `${contactOptionDetail.img}QR.png`]),
            (show = false)
        "
      />
    </van-dialog>
  </div>
</template>

<script >
import {  reactive, toRefs, getCurrentInstance } from "vue";
import { ImagePreview } from "vant";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const initialTime = new Date("2018-03-12").getTime();
    const nowTime = new Date().getTime();
    const count = (
      (nowTime - initialTime) /
      1000 /
      60 /
      60 /
      24 /
      30 /
      12
    ).toFixed(2);
    let year = parseInt(count),
      month = 0;

    if (Math.ceil(count.split(".")[1] * 0.12) === 12) {
      year += 1;
    } else {
      month = Math.ceil(count.split(".")[1] * 0.12);
    }
    const state = reactive({
      data: [
        { icon: "envelop-o", introduce: "remons@foxmail.com" },
        { icon: "phone-o", introduce: "15563043705", value: "15563043705" },
        {
          icon: "underway-o",
          introduce: `码龄：${year} 年 ${month ? `${month}个月` : ""} `,
        },
        { icon: "location-o", introduce: "工作地：浙江 杭州" },
        { icon: "wap-home-o", introduce: "故乡：山东 菏泽" },
      ],
      contactOption: [
        { icon: "weChat", visible: false, img: "weChat", value: "liRemons" },
        { icon: "QQ", visible: false, img: "QQ", value: "1759005892" },
        { icon: "GitHub", visible: false, img: "GitHub", value: "https://remons.gitee.io" },
      ],
      show: false,
      contactOptionDetail: {},
    });

    const handle = (data) => {
      data.value && (window.location.href = `tel:${data.value}`);
    };

    const contactOptionClick = (data) => {
      state.show = true;
      state.contactOptionDetail = data;
    };

    const copy = () => {
      proxy.$toast.success("复制成功");
      proxy.$utils.copy(state.contactOptionDetail.value);
      state.show = false;
    };
    return {
      ...toRefs(state),
      handle,
      contactOptionClick,
      ImagePreview,
      copy,
    };
  },
};
</script>

<style scoped lang="less">
.avatar {
  text-align: center;
  margin: 1rem 0;
}
.contactOption {
  display: flex;
  justify-content: space-around;
  .icon {
    width: 4rem;
    img {
      width: 100%;
    }
  }
}
::v-deep {
  .van-cell {
    background: transparent !important;
  }
  .van-cell__title {
    text-align: center;
  }
}
</style>
