"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      totalEarned: 5e3,
      inviteCount: 3,
      inviteRecords: [
        new UTSJSONObject({
          name: "张三",
          time: "2024-01-15 14:30",
          status: "success",
          statusText: "已注册"
        }),
        new UTSJSONObject({
          name: "李四",
          time: "2024-01-10 09:15",
          status: "success",
          statusText: "已注册"
        }),
        new UTSJSONObject({
          name: "王五",
          time: "2024-01-08 16:45",
          status: "pending",
          statusText: "待注册"
        })
      ]
    };
  },
  methods: {
    shareToWechat() {
      common_vendor.index.showShareMenu(new UTSJSONObject({
        withShareTicket: true,
        success: () => {
          common_vendor.index.showToast({
            title: "分享功能开发中",
            icon: "none"
          });
        }
      }));
    },
    shareToMoments() {
      common_vendor.index.showToast({
        title: "朋友圈分享功能开发中",
        icon: "none"
      });
    },
    copyLink() {
      const inviteLink = "https://guanzhi.com.cn/invite?code=USER123";
      common_vendor.index.setClipboardData({
        data: inviteLink,
        success: () => {
          common_vendor.index.showToast({
            title: "邀请链接已复制",
            icon: "success"
          });
        }
      });
    },
    generateQRCode() {
      common_vendor.index.showToast({
        title: "二维码生成功能开发中",
        icon: "none"
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.totalEarned),
    b: common_vendor.t($data.inviteCount),
    c: common_vendor.o((...args) => $options.shareToWechat && $options.shareToWechat(...args)),
    d: common_vendor.o((...args) => $options.shareToMoments && $options.shareToMoments(...args)),
    e: common_vendor.o((...args) => $options.copyLink && $options.copyLink(...args)),
    f: common_vendor.o((...args) => $options.generateQRCode && $options.generateQRCode(...args)),
    g: $data.inviteRecords.length > 0
  }, $data.inviteRecords.length > 0 ? {
    h: common_vendor.f($data.inviteRecords, (record, index, i0) => {
      return {
        a: common_vendor.t(record.name),
        b: common_vendor.t(record.time),
        c: common_vendor.t(record.statusText),
        d: common_vendor.n(record.status),
        e: index
      };
    })
  } : {}, {
    i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/profile/share-earn/share-earn.js.map
