<template>
<AppBase></AppBase>

<div class="article-bg base_left lnormal hnormal container rnormal y-scroll " id="article">
    <div></div>
    <div class="article-container">
        <div class="article-container2 articlecontent">
            <div class="articlectitle">11</div>
            <div class="articlectag">
                11
            </div>
            <div class="timelinecontainer">
                <ul >
                    <div v-for="index in 10" :key="index">
                        <div class="time">{{index}}</div>
                        <div class="titleattime">{{index}}</div>
                    </div>
                </ul>
            </div>
            <!-- <img class="articlectitleimg" :src="require(`@/assets/image/${acticle.img}`)"> -->
            <!-- <div class="articlecsubtitle">{{ acticle.describe }}</div> -->
            <!-- <div class="articlectext">
                <MdComponent scrollElement="scrollElement" :text="mdtext"></MdComponent>
            </div> -->
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
        return {
        }
    },
    methods: {
    },
    created() {
        this.last_wt = this.wt = window.innerWidth > 1000 ? 0 : window.innerWidth > 750 ? 1 : window.innerWidth > 500 ? 2 : 3;
    },



}
</script>
