<template>
<AppHead :wt="wt">
</AppHead>
<AppLeft :alllinkscontent="alllinkscontent">
</AppLeft>
<div id="bg" class="base_head hnormal"></div>
<AppFoot :wt="wt"></AppFoot>
</template>

<script>
import {
    dqc_rm,
    dqc_ad,
    dqc_switch,
} from '@/utils.js';

import AppLeft from '@/views/AppLeft.vue';
import AppHead from '@/views/AppHead.vue';
import AppFoot from '@/views/AppFoot.vue';

export default {
    name: 'AppBase',
    data() {
        let linkscontent1 = {

            id: 1,
            name: "导航"
        };
        let content = [{
                class: "icon-zhuye",
                name: "首页",
                style: "color:rgb(25, 172, 245);font-size:13px",
                href: "/",
                id: 1
            },
            {
                class: "icon-wenhao-xianxingyuankuang",
                name: "关于本站",
                style: "color:#99cc44;font-size:16px",
                href: "/article/about",
                id: 2
            },
            {
                class: "icon-fuhaolei-yemian",
                name: "文章归档",
                style: "color: rgb(255, 126, 126, 0.845)",
                href: "/timeset",
                id: 3
            },

            {
                class: "icon-shijian",
                name: "最近更新",
                style: "color: rgb(25, 126, 126, 0.845)",
                id: 4,
                parent: 1
            },

            {
                class: "icon-fenlei1",
                name: "文章分类",
                style: "color: rgb(25, 26, 126);font-size:14px;padding-left:17.5px",
                id: 5,
                parent: 4
            },
            {
                class: "icon-fenlei1",
                name: "随笔",
                href: '',
                style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                id: 51,
                sub: 4
            },
            {
                class: "icon-fenlei1",
                name: "技术",
                href: '',
                style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                id: 52,
                sub: 4
            },
        ];
        const context = require.context('@/assets/mainarticles/', false, /\.json$/);
        // 获取目录下所有符合条件的文件名数组
        const keys = context.keys();
        // 遍历所有文件名，依次加载 JSON 内容
        const articles = keys.map(key => {
            const article = context(key);
            return article;
        });
        let normalArticles = articles.filter(article => article.top !== true);
        normalArticles.sort(this.compareDates);
        normalArticles = normalArticles.slice(0, 5);

        let array2 = [];
        let i = 0;
        normalArticles.forEach(element => {
            array2.push({
                class: "icon-shijian",
                name: element.title,
                href: `/article/${element.link}`,
                style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                id: `4${i++}`,
                sub: 1
            }, )
        });
        Array.prototype.splice.apply(content, [4, 0].concat(array2));
        linkscontent1.content = content;
        // console.log(linkscontent1);

        const linkscontent2 = {
            content: [{
                    class: "icon-fuhaolei-yemian",
                    name: "资源下载",
                    style: "color:rgb(22, 121, 125);font-size:14px;padding-left:17px",
                    id: 6,
                    href: "/data"
                },

                {
                    class: "icon-xinfengtianchong",
                    name: "联系方式",
                    style: "color:rgb(122, 133, 112);font-size:14px;padding-left:17px",
                    id: 1,
                    parent: 1
                },
                {
                    class: "icon-github",
                    name: "github",
                    style: "color:#000000 ",
                    href: "https://github.com/Astesias",
                    id: 11,
                    blank: true,
                    sub: 1
                },
                {
                    class: "icon-bilibili-line",
                    name: "bilibili",
                    style: "color:#66ccff ",
                    href: "https://space.bilibili.com/195516167",
                    blank: true,
                    id: 12,
                    sub: 1
                },

                {
                    class: "icon-xiangmu2",
                    name: "个人项目",
                    style: "color:rgb(118, 134, 214);font-size:14px;padding-left:17px",
                    id: 3,
                    parent: 2
                },
                {
                    class: "icon-github",
                    name: "懒得整理",
                    style: "color:rgb(161, 135, 218, 0);padding-left:17px",
                    id: 31,
                    sub: 2
                },

                {
                    class: "icon-gongju-",
                    name: "实用工具",
                    style: "color:rgb(22, 21, 25);font-size:14px;padding-left:17px",
                    id: 4,
                    parent: 3
                },
                {
                    class: "icon-gongju-",
                    name: "文件加速下载",
                    href: 'https://down.npee.cn/',
                    style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                    id: 41,
                    sub: 3,
                    blank: true
                },
                {
                    class: "icon-gongju-",
                    name: "正则表达式测试",
                    href: 'https://www.jyshare.com/front-end/854/',
                    style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                    id: 42,
                    sub: 3,
                    blank: true
                },
                {
                    class: "icon-gongju-",
                    name: "HuggingFace镜像",
                    href: 'https://aliendao.cn/',
                    style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                    id: 43,
                    sub: 3,
                    blank: true
                },
                {
                    class: "icon-gongju-",
                    name: "ChatGPT3.5",
                    href: 'https://chat18.aichatos.xyz/',
                    style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                    id: 44,
                    sub: 3,
                    blank: true
                },
                {
                    class: "icon-gongju-",
                    name: "在线编码转换",
                    href: 'https://tool.oschina.net/encode?type=4',
                    style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                    id: 45,
                    sub: 3,
                    blank: true
                },
                {
                    class: "icon-gongju-",
                    name: "AI语音",
                    href: 'https://www.modelscope.cn/studios/xzjosh/Bert-VITS2/summary',
                    style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                    id: 46,
                    sub: 3,
                    blank: true
                },
                {
                    class: "icon-gongju-",
                    name: "在线Latex编辑器",
                    href: 'https://www.latexlive.com/',
                    style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                    id: 47,
                    sub: 3,
                    blank: true
                },
                {
                    class: "icon-gongju-",
                    name: "爬虫工具",
                    href: 'https://spidertools.cn/#/',
                    style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                    id: 49,
                    sub: 3,
                    blank: true
                },
                {
                    class: "icon-gongju-",
                    name: "md5破解",
                    href: 'https://www.cmd5.org/',
                    style: "color:rgb(22, 21, 25,0.5);font-size:14px;padding-left:34px",
                    id: 491,
                    sub: 3,
                    blank: true
                },

                {
                    class: "icon-lianjie",
                    name: "友情链接",
                    style: "color:rgb(161, 135, 218, 0.904);font-size:14px;padding-left:17px",
                    id: 5,
                    parent: 4
                },
                {
                    class: "icon-github",
                    name: "留下你的博客地址吧",
                    style: "color:rgb(161, 135, 218, 0);padding-left:17px",
                    id: 51,
                    sub: 4
                },
            ],
            id: 2,
            name: "关于"
        };

        return {
            alllinkscontent: [linkscontent1, linkscontent2],
            wt: this.wt
        }
    },
    components: {
        AppLeft,
        AppHead,
        AppFoot,
    },
    methods: {
        resizeListener() {
            this.wt = window.innerWidth > 1000 ? 0 : window.innerWidth > 750 ? 1 : window.innerWidth > 500 ? 2 : 3;
            // console.log(this.wt, window.innerWidth);
            if (this.wt != this.last_wt) {
                location.reload();
                console.log("update");
            }
            this.last_wt = this.wt;
            if (this.wt == 0) {
                dqc_ad(".articleimg-container", "wt0");
            } else {
                dqc_rm(".articleimg-container", "wt0");
            }
            dqc_switch(".article-bg", `wt${this.wt}`, ['wt0', 'wt1', 'wt2', 'wt3']);
        },
        handleScroll() {
            var article = document.getElementById("article");
            var foot = document.getElementById("foot");
            var scrollTop = article.scrollTop;
            var articleHeight = article.scrollHeight;
            var articleVisibleHeight = article.clientHeight;
            var articleBottomDistance = articleHeight - (scrollTop + articleVisibleHeight);
            if (articleBottomDistance < 30) {
                foot.style.bottom = `${-1-articleBottomDistance}px`;
            } else {
                foot.style.bottom = `${-30-1}px`;
            }
            let d = document.getElementById('right');
            let dt = document.getElementById('rtitle');
            if (dt.getBoundingClientRect().top < 0) {
                d.style.opacity = 0;
            } else {
                d.style.display = 'block';
                d.style.opacity = 1;
            }

        },
        compareDates(article1, article2) {
            // 获取文章的时间数组
            const time1 = article1.time;
            const time2 = article2.time;

            // 将时间数组转换为日期对象
            const date1 = new Date(`${time1[0]}-${time1[1]}-${time1[2]} ${time1[3]}:${time1[4]}`);
            const date2 = new Date(`${time2[0]}-${time2[1]}-${time2[2]} ${time2[3]}:${time2[4]}`);

            // 比较日期对象
            return date2 - date1; // 降序排序
        }
    },

    mounted() {
        this.resizeListener();
        window.addEventListener('resize', this.resizeListener);

        // 监听 article 的滚动事件
        this.handleScroll();
        document.getElementById("article").addEventListener("scroll", this.handleScroll);

    },
    beforeUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    },
    created() {
        this.last_wt = this.wt = window.innerWidth > 1000 ? 0 : window.innerWidth > 750 ? 1 : window.innerWidth > 500 ? 2 : 3;
    },

}
</script>
