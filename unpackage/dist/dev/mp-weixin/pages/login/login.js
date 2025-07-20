"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  methods: {
    wechatLogin() {
      const mockUserInfo = new UTSJSONObject({
        nickname: "微信用户",
        userId: "wx_" + Date.now(),
        isVip: false,
        coins: 1e3,
        rechargeOrders: 0,
        questionRecords: 0,
        creationRecords: 0
      });
      const currentTime = Date.now();
      common_vendor.index.setStorageSync("token", "mock_token_" + currentTime);
      common_vendor.index.setStorageSync("userInfo", mockUserInfo);
      common_vendor.index.setStorageSync("loginTime", currentTime);
      common_vendor.index.showToast({ title: "登录成功", icon: "success" });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 1e3);
    },
    goToPhoneLogin() {
      common_vendor.index.navigateTo({ url: "/pages/login/phone-login" });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.wechatLogin && $options.wechatLogin(...args)),
    b: common_vendor.o((...args) => $options.goToPhoneLogin && $options.goToPhoneLogin(...args)),
    c: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
