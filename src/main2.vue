<style lang="scss">@import "./assets/css2/style_.scss";</style>
<template>
  
            <!-- :clickFlatenProfile="flatenProfile"
            :clickFlatenLogin="flatenLogin"
            :clickFlatenHead="flatenHead"
            :clickHideProfile="hideProfile"
            :profileFold="profileFold"
            :headFold="headFold"
            :profileHide="profileHide"
            :window_size_type="window_size_type" -->
            <AppHead  >
</AppHead>

</template>

<script>
// import { get_window_messages,
//         dqc,
//         dqc_rm,
//         dqc_ad,
//         dqc_switch
//  } from '@/utils.js';
// import AppRight from '@/contents2/AppRight.vue';

// import AppLeft from '@/contents2/AppLeft.vue';
import AppHead from '@/contents2/AppHead.vue';
// import AppFoot from '@/contents2/AppFoot.vue';

export default {
    name: 'App',
    data() {
        return {
            headFold: true,
            loginFold: true,
            profileFold: false,
            profileHide: false,
            window_size_type: 0,
            last_window_size_type: 0,
        }
    },
    components: {
        // AppRight,
        // AppLeft,
        AppHead,
        // AppFoot
    },

    methods: {

    },

    mounted() {
        // document.addEventListener('click', this.handleClick);
        // window.addEventListener('resize', this.handleResize);
    },

    beforeUnmount() {
        // document.removeEventListener('click', this.handleClick);
        // window.removeEventListener('resize', this.handleResize);
    }
}
</script>


