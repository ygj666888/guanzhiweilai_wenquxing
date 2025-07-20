"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/creation/creation.js";
  "./pages/knowledge/knowledge.js";
  "./pages/profile/profile.js";
  "./pages/webview/webview.js";
  "./pages/profile/edit-profile/edit-profile.js";
  "./pages/profile/upgrade-member/upgrade-member.js";
  "./pages/profile/recharge/recharge.js";
  "./pages/profile/share-earn/share-earn.js";
  "./pages/profile/usage-guide/usage-guide.js";
  "./pages/profile/account-security/account-security.js";
  "./pages/profile/about-us/about-us.js";
  "./pages/profile/feedback/feedback.js";
  "./pages/profile/bind-phone/bind-phone.js";
  "./pages/creation/paper-assistant/paper-assistant.js";
  "./pages/creation/ppt/ppt.js";
  "./pages/creation/experience/experience.js";
  "./pages/creation/speech/speech.js";
  "./pages/qa/history/history.js";
  "./pages/login/login.js";
  "./pages/login/phone-login.js";
}
const _sfc_main = common_vendor.defineComponent(new UTSJSONObject({
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.uvue:7", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.uvue:10", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.uvue:13", "App Hide");
  },
  onExit: function() {
    common_vendor.index.__f__("log", "at App.uvue:34", "App Exit");
  }
}));
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
