"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      quickStartSteps: [
        new UTSJSONObject({
          title: "注册登录",
          description: "使用微信快速注册并登录账号"
        }),
        new UTSJSONObject({
          title: "选择功能",
          description: "在首页选择需要的AI创作功能"
        }),
        new UTSJSONObject({
          title: "输入需求",
          description: "详细描述您的创作需求和要求"
        }),
        new UTSJSONObject({
          title: "生成内容",
          description: "AI将为您生成高质量的内容"
        }),
        new UTSJSONObject({
          title: "编辑导出",
          description: "对生成内容进行编辑并导出使用"
        })
      ],
      features: [
        new UTSJSONObject({
          icon: "✍️",
          title: "智能写作",
          description: "支持论文、文章、报告等多种写作需求，AI智能生成高质量内容"
        }),
        new UTSJSONObject({
          icon: "🎯",
          title: "精准提问",
          description: "联网提问功能，获取最新、最准确的信息和答案"
        }),
        new UTSJSONObject({
          icon: "📚",
          title: "知识库",
          description: "上传文档建立专属知识库，基于文档内容进行智能问答"
        }),
        new UTSJSONObject({
          icon: "⚡",
          title: "快速创作",
          description: "一键生成，支持多种格式导出，提高创作效率"
        })
      ],
      faqs: [
        new UTSJSONObject({
          question: "如何获得创作硬币？",
          answer: "您可以通过充值、邀请好友、每日签到等方式获得创作硬币。1元人民币可兑换100个创作硬币。",
          expanded: false
        }),
        new UTSJSONObject({
          question: "AI生成的内容有版权吗？",
          answer: "AI生成的内容版权归用户所有，您可以自由使用和修改。但请注意遵守相关法律法规。",
          expanded: false
        }),
        new UTSJSONObject({
          question: "支持哪些文件格式？",
          answer: "支持Word、PDF、TXT等多种格式的文档上传和导出，满足不同使用场景需求。",
          expanded: false
        }),
        new UTSJSONObject({
          question: "如何提高生成质量？",
          answer: "详细描述需求、提供具体要求和背景信息，可以帮助AI生成更符合您期望的内容。",
          expanded: false
        }),
        new UTSJSONObject({
          question: "遇到问题怎么办？",
          answer: "您可以联系在线客服、发送邮件或查看常见问题解答，我们会尽快为您解决问题。",
          expanded: false
        })
      ]
    };
  },
  methods: {
    toggleFaq(index = null) {
      this.faqs[index].expanded = !this.faqs[index].expanded;
    },
    contactService() {
      common_vendor.index.openCustomerServiceChat(new UTSJSONObject({
        extInfo: new UTSJSONObject({
          url: "https://work.weixin.qq.com/kfid/kfc123456"
        }),
        success: () => {
          common_vendor.index.showToast({
            title: "正在打开客服",
            icon: "none"
          });
        }
      }));
    },
    sendEmail() {
      common_vendor.index.setClipboardData({
        data: "support@guanzhi.com.cn",
        success: () => {
          common_vendor.index.showToast({
            title: "邮箱已复制",
            icon: "success"
          });
        }
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.quickStartSteps, (step, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(step.title),
        c: common_vendor.t(step.description),
        d: index
      };
    }),
    b: common_vendor.f($data.features, (feature, index, i0) => {
      return {
        a: common_vendor.t(feature.icon),
        b: common_vendor.t(feature.title),
        c: common_vendor.t(feature.description),
        d: index
      };
    }),
    c: common_vendor.f($data.faqs, (faq, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(faq.question),
        b: faq.expanded ? 1 : "",
        c: common_vendor.o(($event) => $options.toggleFaq(index), index),
        d: faq.expanded
      }, faq.expanded ? {
        e: common_vendor.t(faq.answer)
      } : {}, {
        f: index
      });
    }),
    d: common_vendor.o((...args) => $options.contactService && $options.contactService(...args)),
    e: common_vendor.o((...args) => $options.sendEmail && $options.sendEmail(...args)),
    f: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/profile/usage-guide/usage-guide.js.map
