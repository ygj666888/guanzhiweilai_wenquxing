"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      hasPendingOrder: false,
      currentStep: 1,
      writingProgress: 0,
      showHelp: false,
      styleIndex: 0,
      styleOptions: ["专业风格", "深奥风格", "理论风格"],
      taskData: new UTSJSONObject({
        title: "",
        outlineType: "ai",
        customOutline: "",
        referenceType: "ai",
        style: "专业风格",
        language: "zh",
        length: 4e3,
        additionalInfo: ""
      })
    };
  },
  onLoad() {
    this.checkPendingOrder();
  },
  methods: {
    checkPendingOrder() {
      const pendingOrder = common_vendor.index.getStorageSync("pendingOrder");
      this.hasPendingOrder = !!pendingOrder;
    },
    continueOrder() {
      common_vendor.index.showToast({
        title: "继续订单功能开发中",
        icon: "none"
      });
    },
    onStyleChange(e = null) {
      this.styleIndex = e.detail.value;
      this.taskData.style = this.styleOptions[this.styleIndex];
    },
    showStyleHelp() {
      this.showHelp = true;
    },
    createTask() {
      if (!this.taskData.title.trim()) {
        common_vendor.index.showToast({
          title: "请输入论文标题",
          icon: "none"
        });
        return null;
      }
      const userInfo = common_vendor.index.getStorageSync("userInfo") || new UTSJSONObject({});
      const requiredCoins = this.getRequiredCoins();
      if (userInfo.coins < requiredCoins) {
        this.showInsufficientCoins(requiredCoins);
        return null;
      }
      this.startWriting();
    },
    getRequiredCoins() {
      switch (this.taskData.length) {
        case 4e3:
          return 5e4;
        case 8e3:
          return 8e4;
        case 2e4:
          return 1e5;
        default:
          return 5e4;
      }
    },
    showInsufficientCoins(requiredCoins = null) {
      common_vendor.index.showModal(new UTSJSONObject({
        title: "硬币不足",
        content: `这篇文章需要${requiredCoins}硬币，您的余额不足，是否前往充值？`,
        confirmText: "立即充值",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.navigateTo({
              url: "/pages/profile/recharge/recharge"
            });
          }
        }
      }));
    },
    startWriting() {
      this.currentStep = 2;
      this.writingProgress = 0;
      const timer = setInterval(() => {
        this.writingProgress += Math.random() * 10;
        if (this.writingProgress >= 100) {
          this.writingProgress = 100;
          clearInterval(timer);
          setTimeout(() => {
            this.currentStep = 3;
          }, 1e3);
        }
      }, 500);
    },
    downloadArticle() {
      common_vendor.index.showLoading({
        title: "导出中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        const downloadUrl = "https://www.wsxai.com/download/paper_123456.pdf";
        common_vendor.index.setClipboardData({
          data: downloadUrl,
          success: () => {
            common_vendor.index.showToast({
              title: "下载链接已复制",
              icon: "success"
            });
            common_vendor.index.navigateTo({
              url: "/pages/webview/webview?url=" + encodeURIComponent(downloadUrl)
            });
          }
        });
      }, 2e3);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.hasPendingOrder
  }, $data.hasPendingOrder ? {
    b: common_vendor.o((...args) => $options.continueOrder && $options.continueOrder(...args))
  } : {}, {
    c: $data.currentStep >= 1 ? 1 : "",
    d: $data.currentStep >= 2 ? 1 : "",
    e: $data.currentStep >= 2 ? 1 : "",
    f: $data.currentStep >= 3 ? 1 : "",
    g: $data.currentStep >= 3 ? 1 : "",
    h: $data.currentStep === 1
  }, $data.currentStep === 1 ? common_vendor.e({
    i: $data.taskData.title,
    j: common_vendor.o(($event) => $data.taskData.title = $event.detail.value),
    k: $data.taskData.outlineType === "ai" ? 1 : "",
    l: common_vendor.o(($event) => $data.taskData.outlineType = "ai"),
    m: $data.taskData.outlineType === "custom" ? 1 : "",
    n: common_vendor.o(($event) => $data.taskData.outlineType = "custom"),
    o: $data.taskData.outlineType === "custom"
  }, $data.taskData.outlineType === "custom" ? {
    p: $data.taskData.customOutline,
    q: common_vendor.o(($event) => $data.taskData.customOutline = $event.detail.value)
  } : {}, {
    r: $data.taskData.referenceType === "ai" ? 1 : "",
    s: common_vendor.o(($event) => $data.taskData.referenceType = "ai"),
    t: $data.taskData.referenceType === "upload" ? 1 : "",
    v: common_vendor.o(($event) => $data.taskData.referenceType = "upload"),
    w: $data.taskData.referenceType === "knowledge" ? 1 : "",
    x: common_vendor.o(($event) => $data.taskData.referenceType = "knowledge"),
    y: common_vendor.t($data.styleOptions[$data.styleIndex]),
    z: $data.styleIndex,
    A: $data.styleOptions,
    B: common_vendor.o((...args) => $options.onStyleChange && $options.onStyleChange(...args)),
    C: common_vendor.o((...args) => $options.showStyleHelp && $options.showStyleHelp(...args)),
    D: $data.taskData.language === "zh" ? 1 : "",
    E: common_vendor.o(($event) => $data.taskData.language = "zh"),
    F: $data.taskData.language === "en" ? 1 : "",
    G: common_vendor.o(($event) => $data.taskData.language = "en"),
    H: $data.taskData.length === 4e3 ? 1 : "",
    I: common_vendor.o(($event) => $data.taskData.length = 4e3),
    J: $data.taskData.length === 8e3 ? 1 : "",
    K: common_vendor.o(($event) => $data.taskData.length = 8e3),
    L: $data.taskData.length === 2e4 ? 1 : "",
    M: common_vendor.o(($event) => $data.taskData.length = 2e4),
    N: $data.taskData.additionalInfo,
    O: common_vendor.o(($event) => $data.taskData.additionalInfo = $event.detail.value),
    P: common_vendor.o((...args) => $options.createTask && $options.createTask(...args))
  }) : {}, {
    Q: $data.currentStep === 2
  }, $data.currentStep === 2 ? {
    R: $data.writingProgress + "%",
    S: common_vendor.t($data.writingProgress)
  } : {}, {
    T: $data.currentStep === 3
  }, $data.currentStep === 3 ? {
    U: common_vendor.o((...args) => $options.downloadArticle && $options.downloadArticle(...args))
  } : {}, {
    V: $data.showHelp
  }, $data.showHelp ? {
    W: common_vendor.o(($event) => $data.showHelp = false),
    X: common_vendor.o(() => {
    }),
    Y: common_vendor.o(($event) => $data.showHelp = false)
  } : {}, {
    Z: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/creation/paper-assistant/paper-assistant.js.map
