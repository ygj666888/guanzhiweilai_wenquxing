"use strict";
const common_vendor = require("../common/vendor.js");
const auth = {
  // 检查登录状态和30天免登录
  checkLoginStatus() {
    const token = common_vendor.index.getStorageSync("token");
    const savedUserInfo = common_vendor.index.getStorageSync("userInfo");
    const loginTime = common_vendor.index.getStorageSync("loginTime");
    common_vendor.index.__f__("log", "at utils/auth.js:9", "Auth工具 - 检查登录状态:", {
      token: !!token,
      userInfo: !!savedUserInfo,
      loginTime,
      currentTime: Date.now()
    });
    if (token && savedUserInfo && loginTime) {
      const currentTime = Date.now();
      const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1e3;
      if (currentTime - loginTime < thirtyDaysInMs) {
        common_vendor.index.__f__("log", "at utils/auth.js:24", "Auth工具 - 登录有效，用户信息:", savedUserInfo);
        return {
          isLoggedIn: true,
          userInfo: savedUserInfo
        };
      } else {
        common_vendor.index.__f__("log", "at utils/auth.js:31", "Auth工具 - 登录已过期，清除数据");
        this.clearLoginData();
        return {
          isLoggedIn: false,
          userInfo: null
        };
      }
    } else {
      common_vendor.index.__f__("log", "at utils/auth.js:40", "Auth工具 - 未登录状态");
      return {
        isLoggedIn: false,
        userInfo: null
      };
    }
  },
  // 清除登录数据
  clearLoginData() {
    common_vendor.index.removeStorageSync("token");
    common_vendor.index.removeStorageSync("userInfo");
    common_vendor.index.removeStorageSync("loginTime");
    common_vendor.index.removeStorageSync("userAvatar");
    common_vendor.index.removeStorageSync("phoneBound");
    common_vendor.index.removeStorageSync("loginStatusUpdated");
  },
  // 设置登录状态更新标记
  setLoginStatusUpdated() {
    common_vendor.index.setStorageSync("loginStatusUpdated", Date.now());
  },
  // 检查并清除登录状态更新标记
  checkAndClearLoginStatusUpdated() {
    const loginStatusUpdated = common_vendor.index.getStorageSync("loginStatusUpdated");
    if (loginStatusUpdated) {
      common_vendor.index.__f__("log", "at utils/auth.js:67", "Auth工具 - 检测到登录状态更新标记");
      common_vendor.index.removeStorageSync("loginStatusUpdated");
      return true;
    }
    return false;
  }
};
exports.auth = auth;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/auth.js.map
