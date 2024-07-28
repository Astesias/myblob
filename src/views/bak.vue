<template>
<AppBase></AppBase>

<div class="article-bg base_left lnormal hnormal container rnormal y-scroll " id="article">
    <div></div>
    <div class="article-container">
        <div class="article-container2 articlecontent">
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
