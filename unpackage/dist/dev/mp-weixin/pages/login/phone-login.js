"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_auth = require("../../utils/auth.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      phone: "",
      code: ""
    };
  },
  methods: {
    // 手机号登录
    phoneLogin() {
      if (!this.phone.trim()) {
        common_vendor.index.showToast({
          title: "请输入手机号",
          icon: "none"
        });
        return null;
      }
      if (!this.code.trim()) {
        common_vendor.index.showToast({
          title: "请输入验证码",
          icon: "none"
        });
        return null;
      }
      const mockUserInfo = new UTSJSONObject(
        {
          nickname: "手机用户",
          userId: "phone_" + Date.now(),
          isVip: false,
          coins: 1e3,
          rechargeOrders: 0,
          questionRecords: 0,
          creationRecords: 0
        }
        // 使用全局登录状态管理工具设置登录数据
      );
      utils_auth.auth.setLoginData(mockUserInfo);
      common_vendor.index.showToast({ title: "登录成功", icon: "success" });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 1e3);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.phone,
    b: common_vendor.o(($event) => $data.phone = $event.detail.value),
    c: $data.code,
    d: common_vendor.o(($event) => $data.code = $event.detail.value),
    e: common_vendor.o((...args) => $options.phoneLogin && $options.phoneLogin(...args)),
    f: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/phone-login.js.map
