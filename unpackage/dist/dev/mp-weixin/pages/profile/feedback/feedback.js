"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      selectedType: 0,
      feedbackContent: "",
      uploadedImages: [],
      contactInfo: "",
      feedbackTypes: ["功能建议", "问题反馈", "体验优化", "其他"]
    };
  },
  computed: {
    canSubmit() {
      return this.feedbackContent.trim().length > 0;
    },
    submitText() {
      return this.canSubmit ? "提交反馈" : "请填写反馈内容";
    }
  },
  methods: {
    selectType(index = null) {
      this.selectedType = index;
    },
    chooseImage() {
      common_vendor.index.chooseImage(new UTSJSONObject({
        count: 3 - this.uploadedImages.length,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          this.uploadedImages = [...this.uploadedImages, ...res.tempFilePaths];
        }
      }));
    },
    deleteImage(index = null) {
      this.uploadedImages.splice(index, 1);
    },
    submitFeedback() {
      if (!this.canSubmit) {
        common_vendor.index.showToast({
          title: "请填写反馈内容",
          icon: "none"
        });
        return null;
      }
      common_vendor.index.showLoading({
        title: "提交中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "提交成功",
          icon: "success"
        });
        this.feedbackContent = "";
        this.uploadedImages = [];
        this.contactInfo = "";
        this.selectedType = 0;
        setTimeout(() => {
          common_vendor.index.navigateBack();
        }, 1500);
      }, 2e3);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.feedbackTypes, (type, index, i0) => {
      return {
        a: common_vendor.t(type),
        b: $data.selectedType === index ? 1 : "",
        c: index,
        d: common_vendor.o(($event) => $options.selectType(index), index)
      };
    }),
    b: $data.feedbackContent,
    c: common_vendor.o(($event) => $data.feedbackContent = $event.detail.value),
    d: common_vendor.t($data.feedbackContent.length),
    e: common_vendor.f($data.uploadedImages, (image, index, i0) => {
      return {
        a: image,
        b: common_vendor.o(($event) => $options.deleteImage(index), index),
        c: index
      };
    }),
    f: $data.uploadedImages.length < 3
  }, $data.uploadedImages.length < 3 ? {
    g: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args))
  } : {}, {
    h: $data.contactInfo,
    i: common_vendor.o(($event) => $data.contactInfo = $event.detail.value),
    j: common_vendor.t($options.submitText),
    k: common_vendor.o((...args) => $options.submitFeedback && $options.submitFeedback(...args)),
    l: !$options.canSubmit,
    m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/profile/feedback/feedback.js.map
