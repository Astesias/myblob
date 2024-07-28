<template>
<AppBase></AppBase>

<div class="article-bg base_left lnormal hnormal container rnormal y-scroll " id="article">
    <div></div>
    <div class="article-container">
        <div class="article-container2 articlecontent">
            <div class="articlectitle"> 404 </div>
            <img class="articlectitleimg" :src="require('@/assets/image/xxx.avif')">
            <div class="articlecsubtitle" style="text-align: center;font-size: 25px;padding-bottom: 10vh;;padding-top: 10vh">
                你找的页面似乎已经不存在了
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

export default {
    name: 'App',
    components: {
        AppRight,
        AppBase,
    },
    data() {
        this.articleId = this.$route.params.id;
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
    },
    
    created() {
        this.last_wt = this.wt = window.innerWidth > 1000 ? 0 : window.innerWidth > 750 ? 1 : window.innerWidth > 500 ? 2 : 3;
    },
}
</script>
