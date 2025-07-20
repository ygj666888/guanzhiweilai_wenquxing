"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      currentBalance: 5e3,
      selectedPackage: 1,
      selectedPayment: 0,
      customAmount: "",
      packages: [
        new UTSJSONObject({ amount: 1e3, price: "10" }),
        new UTSJSONObject({ amount: 5e3, price: "50" }),
        new UTSJSONObject({ amount: 1e4, price: "100" }),
        new UTSJSONObject({ amount: 2e4, price: "200" }),
        new UTSJSONObject({ amount: 5e4, price: "500" }),
        new UTSJSONObject({ amount: 1e5, price: "1000" })
      ],
      paymentMethods: [
        new UTSJSONObject({ name: "微信支付" }),
        new UTSJSONObject({ name: "支付宝" })
      ]
    };
  },
  computed: {
    totalAmount() {
      if (this.customAmount && this.customAmount > 0) {
        return parseFloat(this.customAmount).toFixed(2);
      }
      return this.packages[this.selectedPackage].price;
    },
    totalCoins() {
      if (this.customAmount && this.customAmount > 0) {
        return Math.floor(parseFloat(this.customAmount) * 100);
      }
      return this.packages[this.selectedPackage].amount;
    }
  },
  methods: {
    selectPackage(index = null) {
      this.selectedPackage = index;
      this.customAmount = "";
    },
    selectPayment(index = null) {
      this.selectedPayment = index;
    },
    confirmRecharge() {
      const payment = this.paymentMethods[this.selectedPayment];
      common_vendor.index.showModal(new UTSJSONObject({
        title: "确认充值",
        content: `确认使用${payment.name}充值 ¥${this.totalAmount}，获得${this.totalCoins}个硬币？`,
        success: (res) => {
          if (res.confirm) {
            this.processRecharge();
          }
        }
      }));
    },
    processRecharge() {
      common_vendor.index.showLoading({ title: "充值中..." });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({ title: "充值成功", icon: "success" });
        this.currentBalance += this.totalCoins;
        setTimeout(() => {
          common_vendor.index.navigateBack();
        }, 1500);
      }, 2e3);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.currentBalance),
    b: common_vendor.f($data.packages, (pkg, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(pkg.amount),
        b: common_vendor.t(pkg.price),
        c: index === 1
      }, index === 1 ? {} : {}, {
        d: $data.selectedPackage === index ? 1 : "",
        e: index,
        f: common_vendor.o(($event) => $options.selectPackage(index), index)
      });
    }),
    c: $data.customAmount,
    d: common_vendor.o(($event) => $data.customAmount = $event.detail.value),
    e: common_vendor.f($data.paymentMethods, (payment, index, i0) => {
      return {
        a: common_vendor.t(payment.name),
        b: $data.selectedPayment === index ? 1 : "",
        c: index,
        d: common_vendor.o(($event) => $options.selectPayment(index), index)
      };
    }),
    f: common_vendor.t($options.totalAmount),
    g: common_vendor.t($options.totalCoins),
    h: common_vendor.o((...args) => $options.confirmRecharge && $options.confirmRecharge(...args)),
    i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/profile/recharge/recharge.js.map
