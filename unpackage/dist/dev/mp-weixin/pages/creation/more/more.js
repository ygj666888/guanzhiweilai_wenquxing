"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      groupKey: "",
      groupTitle: "",
      activeCategory: "hot",
      categories: [
        new UTSJSONObject({ key: "hot", title: "热门创作" }),
        new UTSJSONObject({ key: "edu", title: "学术教育" }),
        new UTSJSONObject({ key: "student", title: "学生常用" }),
        new UTSJSONObject({ key: "gov", title: "机关单位" }),
        new UTSJSONObject({ key: "media", title: "媒体文学" }),
        new UTSJSONObject({ key: "business", title: "商业分析" })
      ],
      allTools: new UTSJSONObject({})
    };
  },
  computed: {
    currentTools() {
      return this.allTools[this.activeCategory] || [];
    }
  },
  onLoad(options) {
    if (options.group) {
      this.groupKey = options.group;
      this.activeCategory = options.group;
    }
    this.loadAllTools();
  },
  methods: {
    loadAllTools() {
      this.allTools = new UTSJSONObject(
        {
          "hot": [
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "论文助手", desc: "基于专业知识库的AI论文专家" }),
            new UTSJSONObject({ icon: "/static/ppt.png", tag: "长文", name: "PPT", desc: "一键快速生成，轻松搞定PPT" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "心得体会", desc: "任何心得体会，都能上价值！" }),
            new UTSJSONObject({ icon: "/static/mic.png", tag: "长文", name: "演讲稿", desc: "演讲稿，让你的演讲更精彩" })
          ],
          "edu": [
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "去AI痕迹", desc: "文章降重+去“AI”味，提升原创度" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "文档翻译", desc: "专业文档翻译，支持多语种转换" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "实验数据", desc: "实验数据整理与分析，科学严谨" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "实证分析", desc: "实证分析报告，数据驱动结论" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "论文助手", desc: "基于专业知识库的AI论文专家" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "开题报告", desc: "万事开头难，开题报告特别难~来，点我！" })
          ],
          "student": [
            new UTSJSONObject({ icon: "/static/report.png", tag: "长文", name: "求职简历", desc: "专业简历制作，突出个人优势" }),
            new UTSJSONObject({ icon: "/static/mic.png", tag: "长文", name: "面试自我介绍", desc: "面试自我介绍，展现个人魅力" }),
            new UTSJSONObject({ icon: "/static/report.png", tag: "长文", name: "职业规划书", desc: "清晰的职业规划，是事业成功的前提" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "实习总结报告", desc: "全面专业深入的实习总结/实习报告" })
          ],
          "gov": [
            new UTSJSONObject({ icon: "/static/book.png", tag: "长文", name: "思想汇报", desc: "各类思想汇报，助力你的工作学习~" }),
            new UTSJSONObject({ icon: "/static/mic.png", tag: "长文", name: "发言材料", desc: "专业详实的发言材料，让你的发言掌声不停~" }),
            new UTSJSONObject({ icon: "/static/book.png", tag: "长文", name: "公文写作", desc: "格式规范，逻辑严谨，拟一篇公文只要几分钟" }),
            new UTSJSONObject({ icon: "/static/book.png", tag: "长文", name: "申请书", desc: "撰写各类申请书，信手拈来~" })
          ],
          "media": [
            new UTSJSONObject({ icon: "/static/gzh.png", tag: "长文", name: "公众号文章", desc: "写有料文章，找精准粉丝，让创作不再枯竭！" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "短篇小说", desc: "短篇小说，讲述最奇妙的故事" }),
            new UTSJSONObject({ icon: "/static/seo.png", tag: "长文", name: "SEO文章", desc: "SEO神器，让你的内容营销大放异彩" }),
            new UTSJSONObject({ icon: "/static/gzh.png", tag: "长文", name: "朋友圈文案", desc: "想发朋友圈，不知说点啥？我来搞定！" })
          ],
          "business": [
            new UTSJSONObject({ icon: "/static/analysis.png", tag: "长文", name: "市场分析", desc: "深度市场分析，助力决策" }),
            new UTSJSONObject({ icon: "/static/plan.png", tag: "长文", name: "商业计划书", desc: "专业商业计划书，融资路演必备" }),
            new UTSJSONObject({ icon: "/static/report.png", tag: "长文", name: "行业报告", desc: "权威行业报告，数据详实" }),
            new UTSJSONObject({ icon: "/static/summary.png", tag: "长文", name: "数据总结", desc: "数据总结，洞察趋势" })
          ]
        }
        // 设置分组标题
      );
      const categoryMap = new UTSJSONObject({
        "hot": "热门创作",
        "edu": "学术教育",
        "student": "学生常用",
        "gov": "机关单位",
        "media": "媒体文学",
        "business": "商业分析"
      });
      this.groupTitle = categoryMap[this.activeCategory] || "更多工具";
    },
    switchCategory(categoryKey = null) {
      this.activeCategory = categoryKey;
      const categoryMap = new UTSJSONObject({
        "hot": "热门创作",
        "edu": "学术教育",
        "student": "学生常用",
        "gov": "机关单位",
        "media": "媒体文学",
        "business": "商业分析"
      });
      this.groupTitle = categoryMap[categoryKey] || "更多工具";
    },
    selectTool(tool = null) {
      const toolName = tool.name;
      switch (toolName) {
        case "论文助手":
          common_vendor.index.navigateTo({
            url: "/pages/creation/paper-assistant/paper-assistant"
          });
          break;
        case "PPT":
          common_vendor.index.navigateTo({
            url: "/pages/creation/ppt/ppt"
          });
          break;
        case "心得体会":
          common_vendor.index.navigateTo({
            url: "/pages/creation/experience/experience"
          });
          break;
        case "演讲稿":
          common_vendor.index.navigateTo({
            url: "/pages/creation/speech/speech"
          });
          break;
        case "求职简历":
        case "面试自我介绍":
        case "开题报告":
        case "文献综述":
        case "文档改写降重":
        case "文档翻译":
        case "答辩稿":
        case "去AI痕迹":
        case "实习总结报告":
        case "职业规划书":
        case "读后感":
        case "思想汇报":
        case "发言材料":
        case "公文写作":
        case "申请书":
        case "征文":
        case "个人自我剖析":
        case "公众号文章":
        case "短篇小说":
        case "SEO文章":
        case "朋友圈文案":
        case "小品剧本":
        case "科普文章":
        case "市场分析":
        case "商业计划书":
        case "行业报告":
        case "数据总结":
        case "论文选题":
        case "论文答辩":
        default:
          common_vendor.index.showToast({
            title: `${toolName}功能开发中`,
            icon: "none"
          });
          break;
      }
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.groupTitle),
    b: common_vendor.f($data.categories, (category, index, i0) => {
      return {
        a: common_vendor.t(category.title),
        b: index,
        c: $data.activeCategory === category.key ? 1 : "",
        d: common_vendor.o(($event) => $options.switchCategory(category.key), index)
      };
    }),
    c: common_vendor.f($options.currentTools, (tool, index, i0) => {
      return common_vendor.e({
        a: tool.icon
      }, tool.icon ? {
        b: tool.icon
      } : {
        c: common_vendor.t(tool.name.charAt(0))
      }, {
        d: common_vendor.t(tool.name),
        e: common_vendor.t(tool.desc),
        f: common_vendor.t(tool.tag),
        g: index,
        h: common_vendor.o(($event) => $options.selectTool(tool), index)
      });
    }),
    d: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/creation/more/more.js.map
