<style lang="scss">@import "./assets/css2/style_.scss";</style>
<template>
  
            
<AppHead :wt="wt"
>
</AppHead>
<AppLeft></AppLeft>
<div id="bg" class="base_head hnormal"></div>

</template>


<script>
// import { get_window_messages,
//         dqc,
//         dqc_rm,
//         dqc_ad,
//         dqc_switch
//  } from '@/utils.js';
// import AppRight from '@/contents2/AppRight.vue';

import AppLeft from '@/contents2/AppLeft.vue';
import AppHead from '@/contents2/AppHead.vue';
// import AppFoot from '@/contents2/AppFoot.vue';

export default {
    name: 'App',
    data() {
        return {
            wt : 0,
            last_wt : 0,
        }
    },
    components: {
        // AppRight,
        AppLeft,
        AppHead,
        // AppFoot
    },

    methods: {
        resizeListener() {
            this.wt = window.innerWidth > 1000 ? 0 : window.innerWidth > 750 ? 1 : window.innerWidth > 500 ? 2 : 3;
            console.log(this.wt,window.innerWidth);
            if(this.wt!=this.last_wt){
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


