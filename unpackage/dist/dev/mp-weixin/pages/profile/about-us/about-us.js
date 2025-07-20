"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  methods: {
    copyEmail() {
      common_vendor.index.setClipboardData({
        data: "contact@guanzhi.com.cn",
        success: () => {
          common_vendor.index.showToast({
            title: "邮箱已复制",
            icon: "success"
          });
        }
      });
    },
    copyPhone() {
      common_vendor.index.setClipboardData({
        data: "400-888-8888",
        success: () => {
          common_vendor.index.showToast({
            title: "电话已复制",
            icon: "success"
          });
        }
      });
    },
    copyAddress() {
      common_vendor.index.setClipboardData({
        data: "上海市浦东新区张江高科技园区",
        success: () => {
          common_vendor.index.showToast({
            title: "地址已复制",
            icon: "success"
          });
        }
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.copyEmail && $options.copyEmail(...args)),
    b: common_vendor.o((...args) => $options.copyPhone && $options.copyPhone(...args)),
    c: common_vendor.o((...args) => $options.copyAddress && $options.copyAddress(...args)),
    d: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/profile/about-us/about-us.js.map
