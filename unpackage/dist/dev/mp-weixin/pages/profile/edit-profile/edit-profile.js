"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      userInfo: new UTSJSONObject({
        nickname: "inner2466",
        userId: "1933438229252542466",
        avatar: "",
        phoneBound: false,
        gender: "男",
        birthday: "",
        bio: ""
      }),
      genderOptions: ["男", "女", "保密"],
      genderIndex: 0
    };
  },
  onLoad() {
    this.loadUserData();
  },
  onShow() {
    this.loadUserData();
  },
  methods: {
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
      }
      this.genderIndex = this.genderOptions.indexOf(this.userInfo.gender);
      if (this.genderIndex === -1)
        this.genderIndex = 0;
    },
    chooseAvatar() {
      common_vendor.index.chooseImage(new UTSJSONObject({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          this.userInfo.avatar = res.tempFilePaths[0];
          common_vendor.index.setStorageSync("userAvatar", res.tempFilePaths[0]);
          common_vendor.index.showToast({
            title: "头像已选择",
            icon: "success"
          });
        }
      }));
    },
    onGenderChange(e = null) {
      this.genderIndex = e.detail.value;
      this.userInfo.gender = this.genderOptions[this.genderIndex];
    },
    onBirthdayChange(e = null) {
      this.userInfo.birthday = e.detail.value;
    },
    copyUserId() {
      common_vendor.index.setClipboardData({
        data: this.userInfo.userId,
        success: () => {
          common_vendor.index.showToast({
            title: "用户ID已复制",
            icon: "success"
          });
        }
      });
    },
    goToBindPhone() {
      common_vendor.index.navigateTo({
        url: "/pages/profile/bind-phone/bind-phone"
      });
    },
    saveProfile() {
      common_vendor.index.showLoading({
        title: "保存中..."
      });
      common_vendor.index.setStorageSync("userInfo", this.userInfo);
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "保存成功",
          icon: "success"
        });
        setTimeout(() => {
          common_vendor.index.navigateBack();
        }, 1500);
      }, 1e3);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.userInfo.avatar
  }, !$data.userInfo.avatar ? {
    b: common_vendor.t($data.userInfo.nickname.charAt(0))
  } : {
    c: $data.userInfo.avatar
  }, {
    d: common_vendor.o((...args) => $options.chooseAvatar && $options.chooseAvatar(...args)),
    e: $data.userInfo.nickname,
    f: common_vendor.o(($event) => $data.userInfo.nickname = $event.detail.value),
    g: common_vendor.t($data.userInfo.userId),
    h: common_vendor.o((...args) => $options.copyUserId && $options.copyUserId(...args)),
    i: common_vendor.t($data.userInfo.phoneBound ? "已绑定" : "绑定成功送5000硬币"),
    j: $data.userInfo.phoneBound ? 1 : "",
    k: common_vendor.o((...args) => $options.goToBindPhone && $options.goToBindPhone(...args)),
    l: common_vendor.t($data.genderOptions[$data.genderIndex]),
    m: $data.genderIndex,
    n: $data.genderOptions,
    o: common_vendor.o((...args) => $options.onGenderChange && $options.onGenderChange(...args)),
    p: common_vendor.t($data.userInfo.birthday || "请选择生日"),
    q: $data.userInfo.birthday,
    r: common_vendor.o((...args) => $options.onBirthdayChange && $options.onBirthdayChange(...args)),
    s: $data.userInfo.bio,
    t: common_vendor.o(($event) => $data.userInfo.bio = $event.detail.value),
    v: common_vendor.t($data.userInfo.bio.length),
    w: common_vendor.o((...args) => $options.saveProfile && $options.saveProfile(...args)),
    x: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/profile/edit-profile/edit-profile.js.map
