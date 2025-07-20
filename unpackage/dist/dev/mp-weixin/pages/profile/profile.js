"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      isLoggedIn: false,
      userInfo: new UTSJSONObject({
        nickname: "inner2466",
        userId: "1933438229252542466",
        isVip: false,
        coins: 5e3,
        rechargeOrders: 0,
        questionRecords: 0,
        creationRecords: 0
      })
    };
  },
  onLoad() {
    this.loadUserData();
  },
  onShow() {
    this.loadUserData();
  },
  loadUserData() {
    const savedUserInfo = common_vendor.index.getStorageSync("userInfo");
    if (savedUserInfo) {
      this.userInfo = Object.assign(Object.assign({}, this.userInfo), savedUserInfo);
    }
    const savedAvatar = common_vendor.index.getStorageSync("userAvatar");
    if (savedAvatar) {
      this.userInfo.avatar = savedAvatar;
    }
    const phoneBound = common_vendor.index.getStorageSync("phoneBound");
    if (phoneBound) {
      this.userInfo.phoneBound = true;
      if (!this.userInfo.phoneBound) {
        this.userInfo.phoneBound = true;
        common_vendor.index.setStorageSync("userInfo", this.userInfo);
      }
    }
  },
  methods: {
    // 微信登录
    wechatLogin() {
      common_vendor.index.showLoading({
        title: "登录中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        this.isLoggedIn = true;
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "success"
        });
      }, 2e3);
    },
    // 退出登录
    logout() {
      common_vendor.index.showModal(new UTSJSONObject({
        title: "确认退出",
        content: "确定要退出登录吗？",
        success: (res) => {
          if (res.confirm) {
            this.isLoggedIn = false;
            common_vendor.index.showToast({
              title: "已退出登录",
              icon: "success"
            });
          }
        }
      }));
    },
    // 页面跳转方法
    goToEditProfile() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/edit-profile/edit-profile"
      });
    },
    goToUpgradeMember() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/upgrade-member/upgrade-member"
      });
    },
    goToRecharge() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/recharge/recharge"
      });
    },
    inviteFriends() {
      common_vendor.index.showActionSheet({
        itemList: ["分享给微信好友", "复制邀请链接"],
        success: (res) => {
          if (res.tapIndex === 0) {
            common_vendor.index.share(new UTSJSONObject({
              provider: "weixin",
              scene: "WXSceneSession",
              type: 0,
              href: "https://www.wsxai.com/invite?code=inner2466",
              title: "冠智未来文曲星小程序",
              summary: "邀请您使用冠智未来文曲星小程序，成功注册可获得1万硬币奖励！",
              imageUrl: "/static/logo.png",
              success: () => {
                common_vendor.index.showToast({
                  title: "分享成功",
                  icon: "success"
                });
              },
              fail: () => {
                common_vendor.index.showToast({
                  title: "分享失败",
                  icon: "none"
                });
              }
            }));
          } else if (res.tapIndex === 1) {
            const inviteLink = "https://www.wsxai.com/invite?code=inner2466";
            common_vendor.index.setClipboardData({
              data: inviteLink,
              success: () => {
                common_vendor.index.showToast({
                  title: "邀请链接已复制",
                  icon: "success"
                });
              }
            });
          }
        }
      });
    },
    goToShareEarn() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/share-earn/share-earn"
      });
    },
    goToDesktop() {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?url=" + encodeURIComponent("https://www.wsxai.com/")
      });
    },
    goToUsageGuide() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/usage-guide/usage-guide"
      });
    },
    contactService() {
      common_vendor.index.openCustomerServiceChat(new UTSJSONObject({
        extInfo: new UTSJSONObject({
          url: "https://work.weixin.qq.com/kfid/kfc123456"
        }),
        corpId: "ww1234567890abcdef",
        agentId: "1000001",
        success: () => {
          common_vendor.index.showToast({
            title: "正在打开客服",
            icon: "none"
          });
        },
        fail: (err = null) => {
          common_vendor.index.__f__("log", "at pages/profile/profile.uvue:303", "打开客服失败:", err);
          common_vendor.index.showActionSheet({
            itemList: ["复制客服微信号", "拨打客服电话"],
            success: (res) => {
              if (res.tapIndex === 0) {
                common_vendor.index.setClipboardData({
                  data: "guanzhi-kefu",
                  success: () => {
                    common_vendor.index.showToast({
                      title: "客服微信号已复制",
                      icon: "success"
                    });
                  }
                });
              } else if (res.tapIndex === 1) {
                common_vendor.index.makePhoneCall({
                  phoneNumber: "400-123-4567",
                  success: () => {
                    common_vendor.index.showToast({
                      title: "正在拨打客服电话",
                      icon: "none"
                    });
                  }
                });
              }
            }
          });
        }
      }));
    },
    goToAccountSecurity() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/account-security/account-security"
      });
    },
    goToAboutUs() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/about-us/about-us"
      });
    },
    goToFeedback() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/feedback/feedback"
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.isLoggedIn
  }, !$data.isLoggedIn ? {
    b: common_vendor.o((...args) => $options.wechatLogin && $options.wechatLogin(...args))
  } : common_vendor.e({
    c: !$data.userInfo.avatar
  }, !$data.userInfo.avatar ? {
    d: common_vendor.t($data.userInfo.nickname.charAt(0))
  } : {
    e: $data.userInfo.avatar
  }, {
    f: common_vendor.t($data.userInfo.nickname),
    g: common_vendor.t($data.userInfo.userId),
    h: $data.userInfo.phoneBound
  }, $data.userInfo.phoneBound ? {
    i: $data.userInfo.phoneBound ? 1 : ""
  } : {}, {
    j: common_vendor.o((...args) => $options.goToEditProfile && $options.goToEditProfile(...args)),
    k: common_vendor.t($data.userInfo.isVip ? "VIP会员" : "普通用户"),
    l: !$data.userInfo.isVip
  }, !$data.userInfo.isVip ? {} : {}, {
    m: !$data.userInfo.isVip
  }, !$data.userInfo.isVip ? {
    n: common_vendor.o((...args) => $options.goToUpgradeMember && $options.goToUpgradeMember(...args))
  } : {}, {
    o: common_vendor.t($data.userInfo.coins),
    p: common_vendor.o((...args) => $options.goToRecharge && $options.goToRecharge(...args)),
    q: common_vendor.t($data.userInfo.rechargeOrders),
    r: common_vendor.t($data.userInfo.questionRecords),
    s: common_vendor.t($data.userInfo.creationRecords)
  }), {
    t: $data.isLoggedIn
  }, $data.isLoggedIn ? {
    v: common_vendor.o((...args) => $options.inviteFriends && $options.inviteFriends(...args))
  } : {}, {
    w: $data.isLoggedIn
  }, $data.isLoggedIn ? {
    x: common_vendor.o((...args) => $options.goToShareEarn && $options.goToShareEarn(...args))
  } : {}, {
    y: common_vendor.o((...args) => $options.goToDesktop && $options.goToDesktop(...args)),
    z: common_vendor.o((...args) => $options.goToUsageGuide && $options.goToUsageGuide(...args)),
    A: common_vendor.o((...args) => $options.contactService && $options.contactService(...args)),
    B: $data.isLoggedIn
  }, $data.isLoggedIn ? {
    C: common_vendor.o((...args) => $options.goToAccountSecurity && $options.goToAccountSecurity(...args))
  } : {}, {
    D: common_vendor.o((...args) => $options.goToAboutUs && $options.goToAboutUs(...args)),
    E: common_vendor.o((...args) => $options.goToFeedback && $options.goToFeedback(...args)),
    F: $data.isLoggedIn
  }, $data.isLoggedIn ? {
    G: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  } : {}, {
    H: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/profile/profile.js.map
