<template>
  <div>
    <div class="avatar">
      <van-image
        width="8rem"
        height="8rem"
        round
        :src="require('@/assets/img/avatar.jpg')"
      />
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
            <img :src="require(`@/assets/img/${item.icon}.png`)" alt="" />
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
      <van-cell value="复制号码" clickable />
      <van-cell
        value="查看二维码"
        clickable
        @click="
          ImagePreview([
            require(`@/assets/img/${contactOptionDetail.img}QR.png`),
          ]),
            (show = false)
        "
      />
    </van-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { ImagePreview } from "vant";
export default defineComponent({
  setup() {
    const initialTime = new Date("2018-03-12").getTime();
    const nowTime = new Date().getTime();
    const count: any = (
      (nowTime - initialTime) /
      1000 /
      60 /
      60 /
      24 /
      30 /
      12
    ).toFixed(2);
    const year = parseInt(count);
    const month = Math.ceil(count.split(".")[1] * 0.12);
    const state = reactive({
      data: [
        { icon: "envelop-o", introduce: "remons@foxmail.com" },
        { icon: "phone-o", introduce: "15563043705", value: "15563043705" },
        {
          icon: "underway-o",
          introduce: `码龄：${year} 年 ${month} 个月`,
        },
        { icon: "location-o", introduce: "工作地：浙江 杭州" },
        { icon: "wap-home-o", introduce: "故乡：山东 菏泽" },
      ],
      contactOption: [
        { icon: "wechat", visible: false, img: "weChat" },
        { icon: "qq", visible: false, img: "QQ" },
        { icon: "dingTalk", visible: false, img: "ding" },
      ],
      show: false,
      contactOptionDetail: {},
    });

    const handle = (data: any) => {
      data.value && (window.location.href = `tel:${data.value}`);
    };

    const contactOptionClick = (data:any) => {
      state.show = true;
      state.contactOptionDetail = data;
    };
    return {
      ...toRefs(state),
      handle,
      contactOptionClick,
      ImagePreview,
    };
  },
});
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