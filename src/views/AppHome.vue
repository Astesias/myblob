<template>
<AppHead :wt="wt">
</AppHead>

<AppLeft></AppLeft>
<AppFoot></AppFoot>

<div id="bg" class="base_head hnormal"></div>

<div class="article-bg base_left lnormal hnormal container rnormal y-scroll ">
    <div class="article-container">
        <div class="article-container2">
            <div class="article-block" v-for="(item,index) of articles" :key="'article'+index">
                <img :src="item.img" alt="article title img">
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
// import { get_window_messages,
//         dqc,
//         dqc_rm,
//         dqc_ad,
//         dqc_switch
//  } from '@/utils.js';

import AppRight from '@/views/AppRight.vue';
import AppLeft from '@/views/AppLeft.vue';
import AppHead from '@/views/AppHead.vue';
import AppFoot from '@/views/AppFoot.vue';

export default {
    name: 'App',
    data() {
        const article = [{
            img: require('@/assets/image/abg2.jpg'),
            imgStyle: {
                '--img': require('@/assets/image/abg2.jpg')
            },
            title: '1111111111',
            describe: '22222222222',
            time: ['2000', '01', '01', '00', '00'],
            contont: 'xxxxxxxxx',
            comment: 0,
            view: 1,
            link: "/article/1"
        }];
        return {
            wt: 0,
            last_wt: 0,
            articles: [].concat(article, article, article, article, article),
        }
    },
    components: {
        AppRight,
        AppLeft,
        AppHead,
        AppFoot
    },

    methods: {
        resizeListener() {
            this.wt = window.innerWidth > 1000 ? 0 : window.innerWidth > 750 ? 1 : window.innerWidth > 500 ? 2 : 3;
            console.log(this.wt, window.innerWidth);
            if (this.wt != this.last_wt) {
                location.reload();
                console.log("update");
            }
            this.last_wt = this.wt;
        },
    },

    created() {
        this.last_wt = this.wt = window.innerWidth > 1000 ? 0 : window.innerWidth > 750 ? 1 : window.innerWidth > 500 ? 2 : 3;
    },
    mounted() {
        window.addEventListener('resize', this.resizeListener);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    }
}
</script>
