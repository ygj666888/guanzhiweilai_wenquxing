"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      phoneStatus: "未绑定",
      emailStatus: "未绑定"
    };
  },
  methods: {
    changePassword() {
      common_vendor.index.showToast({
        title: "修改密码功能开发中",
        icon: "none"
      });
    },
    bindPhone() {
      common_vendor.index.showToast({
        title: "绑定手机功能开发中",
        icon: "none"
      });
    },
    bindEmail() {
      common_vendor.index.showToast({
        title: "绑定邮箱功能开发中",
        icon: "none"
      });
    },
    loginHistory() {
      common_vendor.index.showToast({
        title: "登录记录功能开发中",
        icon: "none"
      });
    },
    deviceManagement() {
      common_vendor.index.showToast({
        title: "设备管理功能开发中",
        icon: "none"
      });
    },
    privacySettings() {
      common_vendor.index.showToast({
        title: "隐私设置功能开发中",
        icon: "none"
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.changePassword && $options.changePassword(...args)),
    b: common_vendor.t($data.phoneStatus),
    c: common_vendor.o((...args) => $options.bindPhone && $options.bindPhone(...args)),
    d: common_vendor.t($data.emailStatus),
    e: common_vendor.o((...args) => $options.bindEmail && $options.bindEmail(...args)),
    f: common_vendor.o((...args) => $options.loginHistory && $options.loginHistory(...args)),
    g: common_vendor.o((...args) => $options.deviceManagement && $options.deviceManagement(...args)),
    h: common_vendor.o((...args) => $options.privacySettings && $options.privacySettings(...args)),
    i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/profile/account-security/account-security.js.map
