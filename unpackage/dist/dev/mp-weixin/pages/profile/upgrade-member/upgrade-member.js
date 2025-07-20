"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      selectedPlan: 1,
      selectedPayment: 0,
      benefits: [
        "无限次AI创作，无字数限制",
        "优先使用最新AI模型",
        "专属客服支持",
        "高级模板库访问",
        "批量导出功能",
        "数据统计分析"
      ],
      plans: [
        new UTSJSONObject({
          name: "周卡",
          price: "19.9",
          originalPrice: "29.9",
          unit: "周",
          description: "适合短期体验",
          tag: "体验"
        }),
        new UTSJSONObject({
          name: "月卡",
          price: "59.9",
          originalPrice: "99.9",
          unit: "月",
          description: "性价比之选",
          tag: "推荐"
        }),
        new UTSJSONObject({
          name: "年卡",
          price: "599",
          originalPrice: "1199",
          unit: "年",
          description: "最优惠选择",
          tag: "超值"
        })
      ],
      paymentMethods: [
        new UTSJSONObject({ name: "微信支付", icon: "💳" }),
        new UTSJSONObject({ name: "支付宝", icon: "💰" })
      ]
    };
  },
  computed: {
    selectedPlanPrice() {
      return this.plans[this.selectedPlan].price;
    }
  },
  methods: {
    selectPlan(index = null) {
      this.selectedPlan = index;
    },
    selectPayment(index = null) {
      this.selectedPayment = index;
    },
    confirmPayment() {
      const plan = this.plans[this.selectedPlan];
      const payment = this.paymentMethods[this.selectedPayment];
      common_vendor.index.showModal(new UTSJSONObject({
        title: "确认支付",
        content: `确认使用${payment.name}支付${plan.name} ¥${plan.price}？`,
        success: (res) => {
          if (res.confirm) {
            this.processPayment();
          }
        }
      }));
    },
    processPayment() {
      common_vendor.index.showLoading({
        title: "支付中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "支付成功",
          icon: "success"
        });
        setTimeout(() => {
          common_vendor.index.navigateBack();
        }, 1500);
      }, 2e3);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.benefits, (benefit, index, i0) => {
      return {
        a: common_vendor.t(benefit),
        b: index
      };
    }),
    b: common_vendor.f($data.plans, (plan, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(plan.name),
        b: plan.tag
      }, plan.tag ? {
        c: common_vendor.t(plan.tag)
      } : {}, {
        d: common_vendor.t(plan.price),
        e: common_vendor.t(plan.unit),
        f: plan.originalPrice
      }, plan.originalPrice ? {
        g: common_vendor.t(plan.originalPrice)
      } : {}, {
        h: common_vendor.t(plan.description),
        i: $data.selectedPlan === index ? 1 : "",
        j: index,
        k: common_vendor.o(($event) => $options.selectPlan(index), index)
      });
    }),
    c: common_vendor.f($data.paymentMethods, (payment, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(payment.icon),
        b: common_vendor.t(payment.name),
        c: $data.selectedPayment === index
      }, $data.selectedPayment === index ? {} : {}, {
        d: $data.selectedPayment === index ? 1 : "",
        e: index,
        f: common_vendor.o(($event) => $options.selectPayment(index), index)
      });
    }),
    d: common_vendor.t($options.selectedPlanPrice),
    e: common_vendor.o((...args) => $options.confirmPayment && $options.confirmPayment(...args)),
    f: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/profile/upgrade-member/upgrade-member.js.map
