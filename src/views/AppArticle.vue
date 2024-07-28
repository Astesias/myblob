<template>
<AppBase></AppBase>

<div class="article-bg base_left lnormal hnormal container rnormal y-scroll " id="article">
    <div></div>
    <div class="article-container">
        <div class="article-container2 articlecontent">
            <div class="articlectitle">{{ acticle.title }}</div>
            <div class="articlectag">
                <i class="iconfont icon-shijian"></i> {{ timeTransfer(acticle.time) }}
                <i class="iconfont icon-liulan"></i> {{ acticle.view }}
                <i class="iconfont icon-pinglun"></i> {{ acticle.comment }}
                <i class="iconfont icon-tanbi"></i> {{ acticle.comment }}
                <i class="iconfont icon-biaoqian"></i> {{ acticle.tag?acticle.tag.join('、'):"无" }}
            </div>
            <img class="articlectitleimg" :src="require(`@/assets/image/${acticle.img}`)">
            <div class="articlecsubtitle" v-show="!acticle.unusedescribe">{{ acticle.describe }}</div>
            <div class="articlectext">
                <MdComponent scrollElement="scrollElement" :text="mdtext"></MdComponent>
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
import AppBase from '@/views/AppBase.vue';
import AppRight from '@/views/AppRight.vue';
import MdComponent from '@/components/MdComponent.vue';

export default {
    name: 'App',
    components: {
        AppRight,
        AppBase,
        MdComponent
    },
    data() {
        this.articleId = this.$route.params.id;

        return {
            acticle: /^\d+$/.test(this.articleId) ? require(`@/assets/mainarticles/${this.articleId}`) : require(`@/assets/homearticles/${this.articleId}`),
            scrollElement : document.getElementsByClassName("articlectext")[0],
            mdtext : ''
        }
    },
    methods: {
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
        },
        timeTransfer(tl) {
            var [y, month, d, h, m] = tl;
            h = m;
            m = h;
            return `${y}年${month}月${d}日` //${h}时${m}分
        },
    },
    async mounted() {
        try {
            console.log(this.acticle.href + '1111');
            const response = await fetch(`/data/${this.acticle.href}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            this.mdtext = await response.text();
            this.mdtext = this.mdtext.replace('img/','../../data/daylog/img/');
            console.log(this.mdtext);
        } catch (error) {
            console.error('Fetch error:', error);
            // Handle error appropriately, e.g., set a default value for mdtext
            this.mdtext = 'Failed to fetch article content.';
        }
        this.handleScroll();
        document.getElementById("article").addEventListener("scroll", this.handleScroll);
    },
    
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    created() {
        this.last_wt = this.wt = window.innerWidth > 1000 ? 0 : window.innerWidth > 750 ? 1 : window.innerWidth > 500 ? 2 : 3;
    },
    watch: {
        '$route.params.id'(newId, oldId) {
            console.log(oldId);
            this.acticle  = /^\d+$/.test(this.articleId) ? require(`@/assets/mainarticles/${this.$route.params.id}`) : require(`@/assets/homearticles/${this.$route.params.id}`)
        }
    },

}
</script>
