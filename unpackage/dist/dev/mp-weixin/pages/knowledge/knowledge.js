"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_auth = require("../../utils/auth.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      isLoggedIn: false,
      userInfo: new UTSJSONObject({
        isVip: false,
        nickname: "",
        coins: 0
      }),
      showDocumentModal: false,
      showWebModal: false,
      webUrl: "",
      knowledgeItems: []
      // 知识库项目列表
    };
  },
  onLoad() {
    this.checkLoginStatus();
  },
  onShow() {
    this.checkLoginStatus();
    if (utils_auth.auth.checkAndClearLoginStatusUpdated()) {
      this.checkLoginStatus();
    }
  },
  methods: {
    checkLoginStatus() {
      const result = utils_auth.auth.checkLoginStatus();
      common_vendor.index.__f__("log", "at pages/knowledge/knowledge.uvue:189", "知识库页面 - 检查登录状态:", result);
      if (result.isLoggedIn && result.userInfo) {
        this.isLoggedIn = true;
        this.userInfo = Object.assign({ isVip: result.userInfo.isVip || false, nickname: result.userInfo.nickname || "用户", coins: result.userInfo.coins || 0 }, result.userInfo);
        common_vendor.index.__f__("log", "at pages/knowledge/knowledge.uvue:200", "知识库页面 - 用户已登录:", this.userInfo);
      } else {
        this.isLoggedIn = false;
        this.userInfo = {
          isVip: false,
          nickname: "",
          coins: 0
        };
        common_vendor.index.__f__("log", "at pages/knowledge/knowledge.uvue:208", "知识库页面 - 用户未登录");
      }
    },
    goToLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    },
    goToUpgrade() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/upgrade-member/upgrade-member"
      });
    },
    goToDesktop() {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?url=" + encodeURIComponent("https://www.wsxai.com/")
      });
    },
    // 显示文档上传模态框
    showDocumentUpload() {
      this.showDocumentModal = true;
    },
    // 隐藏文档上传模态框
    hideDocumentModal() {
      this.showDocumentModal = false;
    },
    // 显示网页抓取模态框
    showWebCapture() {
      this.showWebModal = true;
    },
    // 隐藏网页抓取模态框
    hideWebModal() {
      this.showWebModal = false;
      this.webUrl = "";
    },
    // 从微信选择文件
    selectFromWeChat() {
      common_vendor.index.showToast({
        title: "从微信选择功能开发中",
        icon: "none"
      });
      this.hideDocumentModal();
    },
    // 从设备选择文件
    selectFromDevice() {
      common_vendor.index.chooseFile(new UTSJSONObject({
        count: 1,
        type: "all",
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/knowledge/knowledge.uvue:266", "选择的文件:", res.tempFiles);
          this.addToKnowledge(new UTSJSONObject({
            icon: "📄",
            title: res.tempFiles[0].name,
            desc: "文档上传",
            time: "刚刚"
          }));
          common_vendor.index.showToast({
            title: "文件已添加到知识库",
            icon: "success"
          });
          this.hideDocumentModal();
        },
        fail: (err) => {
          common_vendor.index.__f__("log", "at pages/knowledge/knowledge.uvue:281", "选择文件失败:", err);
          common_vendor.index.showToast({
            title: "选择文件失败",
            icon: "none"
          });
        }
      }));
    },
    // 确认网页抓取
    confirmWebCapture() {
      if (!this.webUrl.trim()) {
        common_vendor.index.showToast({
          title: "请输入网址",
          icon: "none"
        });
        return null;
      }
      common_vendor.index.showLoading({
        title: "抓取中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        this.addToKnowledge(new UTSJSONObject({
          icon: "🌐",
          title: "网页内容",
          desc: "网页抓取",
          time: "刚刚"
        }));
        common_vendor.index.showToast({
          title: "网页已添加到知识库",
          icon: "success"
        });
        this.hideWebModal();
      }, 2e3);
    },
    // 添加到知识库
    addToKnowledge(item = null) {
      this.knowledgeItems.unshift(item);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.isLoggedIn
  }, !$data.isLoggedIn ? {
    b: common_vendor.o((...args) => $options.goToLogin && $options.goToLogin(...args))
  } : common_vendor.e({
    c: common_vendor.t($data.userInfo.isVip ? "VIP用户" : "普通用户"),
    d: !$data.userInfo.isVip
  }, !$data.userInfo.isVip ? {
    e: common_vendor.o((...args) => $options.goToUpgrade && $options.goToUpgrade(...args))
  } : {}), {
    f: common_vendor.o((...args) => $options.goToDesktop && $options.goToDesktop(...args)),
    g: common_vendor.o((...args) => $options.showDocumentUpload && $options.showDocumentUpload(...args)),
    h: common_vendor.o((...args) => $options.showWebCapture && $options.showWebCapture(...args)),
    i: $data.knowledgeItems.length === 0
  }, $data.knowledgeItems.length === 0 ? {} : {
    j: common_vendor.t($data.knowledgeItems.length),
    k: common_vendor.f($data.knowledgeItems, (item, index, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.desc),
        d: common_vendor.t(item.time),
        e: index
      };
    })
  }, {
    l: $data.showDocumentModal
  }, $data.showDocumentModal ? {
    m: common_vendor.o((...args) => $options.hideDocumentModal && $options.hideDocumentModal(...args)),
    n: common_vendor.o((...args) => $options.selectFromWeChat && $options.selectFromWeChat(...args)),
    o: common_vendor.o((...args) => $options.selectFromDevice && $options.selectFromDevice(...args)),
    p: common_vendor.o((...args) => $options.hideDocumentModal && $options.hideDocumentModal(...args)),
    q: common_vendor.o(() => {
    }),
    r: common_vendor.o((...args) => $options.hideDocumentModal && $options.hideDocumentModal(...args))
  } : {}, {
    s: $data.showWebModal
  }, $data.showWebModal ? {
    t: common_vendor.o((...args) => $options.hideWebModal && $options.hideWebModal(...args)),
    v: $data.webUrl,
    w: common_vendor.o(($event) => $data.webUrl = $event.detail.value),
    x: common_vendor.o((...args) => $options.hideWebModal && $options.hideWebModal(...args)),
    y: common_vendor.o((...args) => $options.confirmWebCapture && $options.confirmWebCapture(...args)),
    z: common_vendor.o(() => {
    }),
    A: common_vendor.o((...args) => $options.hideWebModal && $options.hideWebModal(...args))
  } : {}, {
    B: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/knowledge/knowledge.js.map
