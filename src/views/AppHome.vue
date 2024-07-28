<template>
<AppBase></AppBase>

<div class="article-bg base_left lnormal hnormal container rnormal y-scroll " id="article">
    <div></div>
    <div class="article-container">
        <div class="articlectitle" style="padding-top: 5vh;margin-bottom: unset;">
            玫星晴的个人博客
        </div>
        <div class="articlectag" style="font-size: 12px;letter-spacing: 2px;color: white;text-shadow: 0 0 3px rgb(214 181 255 / 77%);">
            インターネット最高！！！
            <br>
            The Internet is the best
        </div>
        <div class="article-container2">
            <div class="article-block" v-for="(item,index) of articles" :key="'article'+index">
                <div class="articleimg-container" :class="{ 'top' : item.top }">
                    <div class="articletitlecontainer">
                        <div class="text articletitle">{{ item.title }}</div>
                        <div class="text articletitlecontent">
                            <div class="t1">{{ item.describe }}</div>
                            <div class="t2">{{ '——'.repeat(60) }}</div>
                            <div class="articlefootcontent">
                                <div class="t3"> <i class="iconfont icon-shijian"></i> {{ timeTransfer(item.time) }}</div>
                                <div class="t4"> <i class="iconfont icon-duihua"></i> {{ item.comment }}条评论</div>
                                <div class="t5"> <i class="iconfont icon-redu"></i> {{ item.view }}人看过</div>
                            </div>

                        </div>
                    </div>
                    <img :src="require(`@/assets/image/${item.img}`)" alt="article title img" class="articleimg" @click="this.$router.push(`/article/${item.link}`)">
                </div>
            </div>
        </div>

    </div>
    <div>

    </div>

    <AppRight :wt="wt">
    </AppRight>

</div>
</template>

<script>
import AppRight from '@/views/AppRight.vue';
import AppBase from '@/views/AppBase.vue';

export default {
    name: 'AppHome',
    data() {
        const context = require.context('@/assets/homearticles/', false, /\.json$/);
        // 获取目录下所有符合条件的文件名数组
        const keys = context.keys();
        // 遍历所有文件名，依次加载 JSON 内容
        const articles = keys.map(key => {
            const article = context(key);
            return article;
        });

        // 按照时间降序排序
        const topArticles = articles.filter(article => article.top === true);
        const normalArticles = articles.filter(article => article.top !== true);
        topArticles.sort(this.compareDates);
        normalArticles.sort(this.compareDates);
        const sortedArticles = [...topArticles, ...normalArticles];

        return {
            wt: 0,
            last_wt: 0,
            foot_height: 30,
            articles: sortedArticles,
        }
    },
    components: {
        AppRight,
        AppBase
    },

    methods: {
        timeTransfer(tl) {
            var [y, month, d, h, m] = tl;
            h = m;
            m = h;
            return `${y}年${month}月${d}日` //${h}时${m}分
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
    mounted() {},
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    created() {
        this.last_wt = this.wt = window.innerWidth > 1000 ? 0 : window.innerWidth > 750 ? 1 : window.innerWidth > 500 ? 2 : 3;
    },

}
</script>
