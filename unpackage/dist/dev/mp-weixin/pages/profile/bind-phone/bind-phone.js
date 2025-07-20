"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      phoneNumber: "",
      verificationCode: "",
      countdown: 0,
      showSuccess: false
    };
  },
  computed: {
    canSendCode() {
      return this.phoneNumber.length === 11;
    },
    canBind() {
      return this.phoneNumber.length === 11 && this.verificationCode.length === 6;
    }
  },
  methods: {
    sendCode() {
      if (!this.canSendCode) {
        common_vendor.index.showToast({
          title: "请输入正确的手机号",
          icon: "none"
        });
        return null;
      }
      common_vendor.index.showLoading({
        title: "发送中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "验证码已发送",
          icon: "success"
        });
        this.countdown = 60;
        this.startCountdown();
      }, 1e3);
    },
    startCountdown() {
      if (this.countdown > 0) {
        setTimeout(() => {
          this.countdown--;
          this.startCountdown();
        }, 1e3);
      }
    },
    bindPhone() {
      if (!this.canBind) {
        common_vendor.index.showToast({
          title: "请填写完整信息",
          icon: "none"
        });
        return null;
      }
      common_vendor.index.showLoading({
        title: "绑定中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        this.showSuccess = true;
        common_vendor.index.setStorageSync("phoneBound", true);
        common_vendor.index.setStorageSync("phoneNumber", this.phoneNumber);
        const userInfo = common_vendor.index.getStorageSync("userInfo") || new UTSJSONObject({
          nickname: "inner2466",
          userId: "1933438229252542466",
          isVip: false,
          coins: 5e3,
          rechargeOrders: 0,
          questionRecords: 0,
          creationRecords: 0
        });
        userInfo.phoneBound = true;
        userInfo.phoneNumber = this.phoneNumber;
        common_vendor.index.setStorageSync("userInfo", userInfo);
        setTimeout(() => {
          this.showSuccess = false;
          common_vendor.index.navigateBack();
        }, 3e3);
      }, 2e3);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.phoneNumber,
    b: common_vendor.o(($event) => $data.phoneNumber = $event.detail.value),
    c: $data.verificationCode,
    d: common_vendor.o(($event) => $data.verificationCode = $event.detail.value),
    e: common_vendor.t($data.countdown > 0 ? `${$data.countdown}s` : "发送验证码"),
    f: !$options.canSendCode || $data.countdown > 0,
    g: common_vendor.o((...args) => $options.sendCode && $options.sendCode(...args)),
    h: common_vendor.o((...args) => $options.bindPhone && $options.bindPhone(...args)),
    i: !$options.canBind,
    j: $data.showSuccess
  }, $data.showSuccess ? {} : {}, {
    k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/profile/bind-phone/bind-phone.js.map
