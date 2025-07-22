"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_auth = require("../../utils/auth.js");
const _sfc_main = common_vendor.defineComponent({
  methods: {
    wechatLogin() {
      common_vendor.index.__f__("log", "at pages/login/login.uvue:48", "微信登录按钮被点击");
      common_vendor.index.showLoading({
        title: "登录中..."
      });
      const mockUserInfo = new UTSJSONObject(
        {
          nickname: "测试用户",
          avatar: "/static/default-avatar.png",
          phone: "138****8888",
          isVip: false,
          coins: 1e3,
          rechargeOrders: 0,
          questionRecords: 0,
          creationRecords: 0
        }
        // 模拟网络延迟
      );
      setTimeout(() => {
        common_vendor.index.hideLoading();
        utils_auth.auth.setLoginData(mockUserInfo);
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "success",
          duration: 2e3
        });
        setTimeout(() => {
          common_vendor.index.navigateBack();
        }, 1500);
      }, 1e3);
    },
    goToPhoneLogin() {
      common_vendor.index.navigateTo({ url: "/pages/login/phone-login" });
    },
    testClick() {
      common_vendor.index.__f__("log", "at pages/login/login.uvue:92", "测试按钮被点击");
      common_vendor.index.showToast({
        title: "测试按钮正常",
        icon: "success"
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.wechatLogin && $options.wechatLogin(...args)),
    b: common_vendor.o((...args) => $options.wechatLogin && $options.wechatLogin(...args)),
    c: common_vendor.o((...args) => $options.testClick && $options.testClick(...args)),
    d: common_vendor.o((...args) => $options.goToPhoneLogin && $options.goToPhoneLogin(...args)),
    e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
