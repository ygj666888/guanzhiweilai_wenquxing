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
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "论文助手", desc: "基于专业知识库的AI论文专家" }),
            new UTSJSONObject({ icon: "/static/ppt.png", tag: "长文", name: "PPT", desc: "一键快速生成，轻松搞定PPT" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "心得体会", desc: "任何心得体会，都能上价值！" }),
            new UTSJSONObject({ icon: "/static/mic.png", tag: "长文", name: "演讲稿", desc: "各类用途、风格演讲稿快速生成！" }),
            new UTSJSONObject({ icon: "/static/report.png", tag: "长文", name: "实习总结报告", desc: "全面专业深入的实习总结/实习报告" }),
            new UTSJSONObject({ icon: "/static/summary.png", tag: "长文", name: "工作总结", desc: "适用于个人工作总结与回顾" })
          ]
        }),
        new UTSJSONObject({
          key: "edu",
          title: "学术教育",
          items: [
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "开题报告", desc: "万事开头难，开题报告特别难~来，点我！" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "文献综述", desc: "文献总结评价，观点深入剖析" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "文档翻译", desc: "做最专业的文档翻译助手~" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "论文助手", desc: "基于专业知识库的AI论文专家" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "文档改写降重", desc: "文档全文一键改写，降重神器" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "答辩稿", desc: "论文答辩，我来帮你精心准备" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "去AI痕迹", desc: "文章降重+去“AI”味" })
          ]
        }),
        new UTSJSONObject({
          key: "student",
          title: "学生常用",
          items: [
            new UTSJSONObject({ icon: "/static/report.png", tag: "长文", name: "实习总结报告", desc: "全面专业深入的实习总结/实习报告" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "心得体会", desc: "任何心得体会，都能上价值！" }),
            new UTSJSONObject({ icon: "/static/report.png", tag: "长文", name: "职业规划书", desc: "清晰的职业规划，是事业成功的前提" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "读后感", desc: "读后感没灵感的同学看这里！" }),
            new UTSJSONObject({ icon: "/static/ppt.png", tag: "长文", name: "PPT", desc: "一键快速生成，轻松搞定PPT" }),
            new UTSJSONObject({ icon: "/static/word.png", tag: "长文", name: "论文助手", desc: "基于专业知识库的AI论文专家" })
          ]
        }),
        new UTSJSONObject({
          key: "gov",
          title: "机关单位",
          items: [
            new UTSJSONObject({ icon: "/static/book.png", tag: "长文", name: "思想汇报", desc: "各类思想汇报，助力你的工作学习~" }),
            new UTSJSONObject({ icon: "/static/mic.png", tag: "长文", name: "发言材料", desc: "专业详实的发言材料，让你的发言掌声不停~" }),
            new UTSJSONObject({ icon: "/static/book.png", tag: "长文", name: "公文写作", desc: "格式规范，逻辑严谨，拟一篇公文只要几分钟" }),
            new UTSJSONObject({ icon: "/static/pen.png", tag: "长文", name: "征文", desc: "各类征文，高分作品，逻辑严谨" }),
            new UTSJSONObject({ icon: "/static/book.png", tag: "长文", name: "申请书", desc: "撰写各类申请书，信手拈来~" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "读后感", desc: "读后感没灵感的同学看这里！" }),
            new UTSJSONObject({ icon: "/static/ppt.png", tag: "长文", name: "PPT", desc: "一键快速生成，轻松搞定PPT" }),
            new UTSJSONObject({ icon: "/static/report.png", tag: "长文", name: "个人自我剖析", desc: "对照检查，思想剖析" })
          ]
        }),
        new UTSJSONObject({
          key: "media",
          title: "媒体文学",
          items: [
            new UTSJSONObject({ icon: "/static/gzh.png", tag: "长文", name: "公众号文章", desc: "写有料文章，找精准粉丝，让创作不再枯竭！" }),
            new UTSJSONObject({ icon: "/static/note.png", tag: "长文", name: "短篇小说", desc: "短篇小说，讲述最奇妙的故事" }),
            new UTSJSONObject({ icon: "/static/seo.png", tag: "长文", name: "SEO文章", desc: "SEO神器，让你的内容营销大放异彩" }),
            new UTSJSONObject({ icon: "/static/mic.png", tag: "长文", name: "小品剧本", desc: "小品剧本看过来，再也不担心晚会演什么了~" }),
            new UTSJSONObject({ icon: "/static/gzh.png", tag: "长文", name: "朋友圈文案", desc: "想发朋友圈，不知说点啥？我来搞定！" }),
            new UTSJSONObject({ icon: "/static/pen.png", tag: "长文", name: "科普文章", desc: "科普内容，通俗易懂" })
          ]
        }),
        new UTSJSONObject({
          key: "business",
          title: "商业分析",
          items: [
            new UTSJSONObject({ icon: "/static/analysis.png", tag: "长文", name: "市场分析", desc: "深度市场分析，助力决策" }),
            new UTSJSONObject({ icon: "/static/plan.png", tag: "长文", name: "商业计划书", desc: "专业商业计划书，融资路演必备" }),
            new UTSJSONObject({ icon: "/static/report.png", tag: "长文", name: "行业报告", desc: "权威行业报告，数据详实" }),
            new UTSJSONObject({ icon: "/static/summary.png", tag: "长文", name: "数据总结", desc: "数据总结，洞察趋势" })
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
        g: item.name
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
        f: item.name
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
        f: item.name
      });
    }),
    k: common_assets._imports_0,
    l: common_assets._imports_1,
    m: common_assets._imports_2,
    n: common_assets._imports_3,
    o: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9a84fa95"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/creation/creation.js.map
