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
      options: new UTSJSONObject({
        deepThinking: true,
        networkQuery: true,
        knowledgeQuery: true
      }),
      questionText: ""
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
      if (result.isLoggedIn) {
        this.isLoggedIn = true;
        this.userInfo = Object.assign(Object.assign({}, this.userInfo), result.userInfo);
      } else {
        this.isLoggedIn = false;
        this.userInfo = {
          isVip: false,
          nickname: "",
          coins: 0
        };
      }
    },
    clearLoginData() {
      utils_auth.auth.clearLoginData();
      this.isLoggedIn = false;
      this.userInfo = {
        isVip: false,
        nickname: "",
        coins: 0
      };
    },
    loadUserData() {
      const savedUserInfo = common_vendor.index.getStorageSync("userInfo");
      if (savedUserInfo) {
        this.userInfo = Object.assign(Object.assign({}, this.userInfo), savedUserInfo);
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
    goToMore() {
      common_vendor.index.switchTab({
        url: "/pages/creation/creation"
      });
    },
    goToPaperAssistant() {
      common_vendor.index.navigateTo({
        url: "/pages/creation/paper-assistant/paper-assistant"
      });
    },
    goToPPT() {
      common_vendor.index.navigateTo({
        url: "/pages/creation/ppt/ppt"
      });
    },
    goToExperience() {
      common_vendor.index.navigateTo({
        url: "/pages/creation/experience/experience"
      });
    },
    goToSpeech() {
      common_vendor.index.navigateTo({
        url: "/pages/creation/speech/speech"
      });
    },
    toggleOption(option = null) {
      this.options[option] = !this.options[option];
    },
    goToHistory() {
      common_vendor.index.navigateTo({
        url: "/pages/qa/history/history"
      });
    },
    startVoiceInput() {
      common_vendor.index.showToast({
        title: "语音输入功能开发中",
        icon: "none"
      });
    },
    uploadImage() {
      common_vendor.index.showActionSheet({
        itemList: ["从相册选择", "拍照"],
        success: (res) => {
          let sourceType = [];
          if (res.tapIndex === 0) {
            sourceType = ["album"];
          } else if (res.tapIndex === 1) {
            sourceType = ["camera"];
          }
          common_vendor.index.chooseImage(new UTSJSONObject({
            count: 1,
            sizeType: ["compressed"],
            sourceType,
            success: (res2) => {
              common_vendor.index.showToast({
                title: "图片已选择",
                icon: "success"
              });
            },
            fail: (err) => {
              common_vendor.index.showToast({
                title: "选择图片失败",
                icon: "none"
              });
            }
          }));
        }
      });
    },
    sendQuestion() {
      if (!this.questionText.trim()) {
        common_vendor.index.showToast({
          title: "请输入问题",
          icon: "none"
        });
        return null;
      }
      common_vendor.index.showLoading({
        title: "思考中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "AI回答功能开发中",
          icon: "none"
        });
        this.questionText = "";
      }, 2e3);
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
    g: common_vendor.o((...args) => $options.goToMore && $options.goToMore(...args)),
    h: common_vendor.o((...args) => $options.goToPaperAssistant && $options.goToPaperAssistant(...args)),
    i: common_vendor.o((...args) => $options.goToPPT && $options.goToPPT(...args)),
    j: common_vendor.o((...args) => $options.goToExperience && $options.goToExperience(...args)),
    k: common_vendor.o((...args) => $options.goToSpeech && $options.goToSpeech(...args)),
    l: $data.options.deepThinking
  }, $data.options.deepThinking ? {} : {}, {
    m: $data.options.deepThinking ? 1 : "",
    n: common_vendor.o(($event) => $options.toggleOption("deepThinking")),
    o: $data.options.networkQuery
  }, $data.options.networkQuery ? {} : {}, {
    p: $data.options.networkQuery ? 1 : "",
    q: common_vendor.o(($event) => $options.toggleOption("networkQuery")),
    r: $data.options.knowledgeQuery
  }, $data.options.knowledgeQuery ? {} : {}, {
    s: $data.options.knowledgeQuery ? 1 : "",
    t: common_vendor.o(($event) => $options.toggleOption("knowledgeQuery")),
    v: common_vendor.o((...args) => $options.goToHistory && $options.goToHistory(...args)),
    w: common_vendor.o((...args) => $options.sendQuestion && $options.sendQuestion(...args)),
    x: $data.questionText,
    y: common_vendor.o(($event) => $data.questionText = $event.detail.value),
    z: common_vendor.o((...args) => $options.uploadImage && $options.uploadImage(...args)),
    A: common_vendor.o((...args) => $options.sendQuestion && $options.sendQuestion(...args)),
    B: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
