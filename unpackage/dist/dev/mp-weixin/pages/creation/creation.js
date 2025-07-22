"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      search: "",
      // 动态创作次数
      creationCount: 6951300,
      // 动态提示
      dynamicTip: "5秒前有用户创作了一篇论文助手",
      tipList: [
        "5秒前有用户创作了一篇论文助手",
        "8秒前有用户创作了一篇PPT",
        "10秒前有用户创作了一篇心得体会",
        "12秒前有用户创作了一份实习总结报告",
        "15秒前有用户创作了一篇演讲稿"
      ],
      tipIndex: 0,
      countTimer: null,
      tipTimer: null,
      groups: [
        new UTSJSONObject({
          key: "hot",
          title: "热门创作",
          items: [
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "论文助手（学术写作）", desc: "基于专业知识库的AI论文专家", bgColor: "#e3f2fd" }),
            new UTSJSONObject({ icon: "/static/ppt.png", tag: "长文", name: "PPT（演示制作）", desc: "一键快速生成，轻松搞定PPT", bgColor: "#fff3e0" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "心得体会（感悟总结）", desc: "任何心得体会，都能上价值！", bgColor: "#f3e5f5" }),
            new UTSJSONObject({ icon: "/static/mic.png", tag: "长文", name: "演讲稿（演讲准备）", desc: "演讲稿，让你的演讲更精彩", bgColor: "#e8f5e8" })
          ]
        }),
        new UTSJSONObject({
          key: "edu",
          title: "学术教育",
          items: [
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "开题报告（研究起点）", desc: "万事开头难，开题报告特别难~来，点我！" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "文献综述（研究梳理）", desc: "文献总结评价，观点深入剖析" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "论文助手（学术写作）", desc: "基于专业知识库的AI论文专家" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "文档改写降重（查重优化）", desc: "文档全文一键改写，降重神器" })
          ]
        }),
        new UTSJSONObject({
          key: "student",
          title: "学生常用",
          items: [
            new UTSJSONObject({ icon: "/static/report.png", tag: "长文", name: "实习总结报告（实习总结）", desc: "全面专业深入的实习总结/实习报告" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "心得体会（感悟总结）", desc: "任何心得体会，都能上价值！" }),
            new UTSJSONObject({ icon: "/static/report.png", tag: "长文", name: "职业规划书（就业准备）", desc: "清晰的职业规划，是事业成功的前提" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "读后感（学习总结）", desc: "读后感没灵感的同学看这里！" })
          ]
        }),
        new UTSJSONObject({
          key: "gov",
          title: "机关单位",
          items: [
            new UTSJSONObject({ icon: "/static/book.png", tag: "长文", name: "思想汇报（政治学习）", desc: "各类思想汇报，助力你的工作学习~" }),
            new UTSJSONObject({ icon: "/static/mic.png", tag: "长文", name: "发言材料（会议发言）", desc: "专业详实的发言材料，让你的发言掌声不停~" }),
            new UTSJSONObject({ icon: "/static/book.png", tag: "长文", name: "公文写作（日常工作）", desc: "格式规范，逻辑严谨，拟一篇公文只要几分钟" }),
            new UTSJSONObject({ icon: "/static/book.png", tag: "长文", name: "申请书（行政事务）", desc: "撰写各类申请书，信手拈来~" })
          ]
        }),
        new UTSJSONObject({
          key: "media",
          title: "媒体文学",
          items: [
            new UTSJSONObject({ icon: "/static/gzh.png", tag: "长文", name: "公众号文章（新媒体）", desc: "写有料文章，找精准粉丝，让创作不再枯竭！" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "短篇小说（文学创作）", desc: "短篇小说，讲述最奇妙的故事" }),
            new UTSJSONObject({ icon: "/static/seo.png", tag: "长文", name: "SEO文章（网络营销）", desc: "SEO神器，让你的内容营销大放异彩" }),
            new UTSJSONObject({ icon: "/static/gzh.png", tag: "长文", name: "朋友圈文案（社交内容）", desc: "想发朋友圈，不知说点啥？我来搞定！" })
          ]
        }),
        new UTSJSONObject({
          key: "business",
          title: "商业分析",
          items: [
            new UTSJSONObject({ icon: "/static/analysis.png", tag: "长文", name: "市场分析（商业决策）", desc: "深度市场分析，助力决策" }),
            new UTSJSONObject({ icon: "/static/plan.png", tag: "长文", name: "商业计划书（创业融资）", desc: "专业商业计划书，融资路演必备" }),
            new UTSJSONObject({ icon: "/static/report.png", tag: "长文", name: "行业报告（行业研究）", desc: "权威行业报告，数据详实" }),
            new UTSJSONObject({ icon: "/static/summary.png", tag: "长文", name: "数据总结（数据分析）", desc: "数据总结，洞察趋势" })
          ]
        })
      ]
    };
  },
  computed: {
    highlightedTip() {
      return this.dynamicTip.replace(/(\d+)(秒前)/, '<span class="tip-num">$1</span>$2');
    }
  },
  mounted() {
    this.countTimer = setInterval(() => {
      this.creationCount += Math.floor(Math.random() * 3) + 1;
    }, 2e3);
    this.tipTimer = setInterval(() => {
      this.tipIndex = (this.tipIndex + 1) % this.tipList.length;
      this.dynamicTip = this.tipList[this.tipIndex];
    }, 4e3);
  },
  beforeDestroy() {
    clearInterval(this.countTimer);
    clearInterval(this.tipTimer);
  },
  methods: {
    onSearch() {
    },
    goToMore(key = null) {
      common_vendor.index.navigateTo({ url: `/pages/creation/more/more?group=${key}` });
    },
    goToCreationTool(item = null) {
      switch (item.name) {
        case "论文助手（学术写作）":
          common_vendor.index.navigateTo({
            url: "/pages/creation/paper-assistant/paper-assistant"
          });
          break;
        case "PPT（演示制作）":
          common_vendor.index.navigateTo({
            url: "/pages/creation/ppt/ppt"
          });
          break;
        case "心得体会（感悟总结）":
          common_vendor.index.navigateTo({
            url: "/pages/creation/experience/experience"
          });
          break;
        case "演讲稿（演讲准备）":
          common_vendor.index.navigateTo({
            url: "/pages/creation/speech/speech"
          });
          break;
        case "开题报告（研究起点）":
        case "文献综述（研究梳理）":
        case "论文助手（学术写作）":
        case "文档改写降重（查重优化）":
        case "实习总结报告（实习总结）":
        case "心得体会（感悟总结）":
        case "职业规划书（就业准备）":
        case "读后感（学习总结）":
        case "思想汇报（政治学习）":
        case "发言材料（会议发言）":
        case "公文写作（日常工作）":
        case "申请书（行政事务）":
        case "公众号文章（新媒体）":
        case "短篇小说（文学创作）":
        case "SEO文章（网络营销）":
        case "朋友圈文案（社交内容）":
        case "市场分析（商业决策）":
        case "商业计划书（创业融资）":
        case "行业报告（行业研究）":
        case "数据总结（数据分析）":
          common_vendor.index.showToast({
            title: "功能开发中",
            icon: "none"
          });
          break;
        default:
          common_vendor.index.showToast({
            title: "功能开发中",
            icon: "none"
          });
          break;
      }
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.creationCount),
    b: $data.search,
    c: common_vendor.o(($event) => $data.search = $event.detail.value),
    d: common_vendor.o((...args) => $options.onSearch && $options.onSearch(...args)),
    e: common_vendor.t($data.dynamicTip),
    f: common_vendor.f($data.groups[0].items, (item, k0, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: item.icon
      } : {}, {
        c: item.bgColor,
        d: common_vendor.t(item.tag),
        e: common_vendor.t(item.name),
        f: common_vendor.t(item.desc),
        g: item.name,
        h: common_vendor.o(($event) => $options.goToCreationTool(item), item.name)
      });
    }),
    g: common_vendor.o(($event) => $options.goToMore($data.groups[1].key)),
    h: common_vendor.f($data.groups[1].items, (item, k0, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: item.icon
      } : {}, {
        c: common_vendor.t(item.tag),
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.desc),
        f: item.name,
        g: common_vendor.o(($event) => $options.goToCreationTool(item), item.name)
      });
    }),
    i: common_vendor.o(($event) => $options.goToMore($data.groups[2].key)),
    j: common_vendor.f($data.groups[2].items, (item, k0, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: item.icon
      } : {}, {
        c: common_vendor.t(item.tag),
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.desc),
        f: item.name,
        g: common_vendor.o(($event) => $options.goToCreationTool(item), item.name)
      });
    }),
    k: common_vendor.o(($event) => $options.goToMore($data.groups[3].key)),
    l: common_vendor.f($data.groups[3].items, (item, k0, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: item.icon
      } : {}, {
        c: common_vendor.t(item.tag),
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.desc),
        f: item.name,
        g: common_vendor.o(($event) => $options.goToCreationTool(item), item.name)
      });
    }),
    m: common_vendor.o(($event) => $options.goToMore($data.groups[4].key)),
    n: common_vendor.f($data.groups[4].items, (item, k0, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: item.icon
      } : {}, {
        c: common_vendor.t(item.tag),
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.desc),
        f: item.name,
        g: common_vendor.o(($event) => $options.goToCreationTool(item), item.name)
      });
    }),
    o: common_vendor.o(($event) => $options.goToMore($data.groups[5].key)),
    p: common_vendor.f($data.groups[5].items, (item, k0, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: item.icon
      } : {}, {
        c: common_vendor.t(item.tag),
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.desc),
        f: item.name,
        g: common_vendor.o(($event) => $options.goToCreationTool(item), item.name)
      });
    }),
    q: common_assets._imports_0,
    r: common_assets._imports_1,
    s: common_assets._imports_2,
    t: common_assets._imports_3,
    v: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9a84fa95"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/creation/creation.js.map
