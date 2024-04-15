<template>
<AppHead    :clickFlatenProfile="flatenProfile"
            :clickFlatenLogin="flatenLogin"
            :clickFflatenHead="flatenHead"
            :profileFold="profileFold"
            :headFold="headFold">
</AppHead>
<AppLeft></AppLeft>
<AppRight></AppRight>
<AppFoot></AppFoot>

<div id="bg"></div>
<div class="article-bg _base_right">
    <div class="article-container">
        <div class="article-block" v-for="(item,index) of articles" :key="'article'+index">
            <img :src="item.img" alt="article title img" :style="imgStyle">
        </div>
    </div>
</div>

</template>

<script>
import { get_window_messages,dqc } from '@/utils.js';
import AppRight from '@/contents/AppRight.vue';
import AppLeft from '@/contents/AppLeft.vue';
import AppHead from '@/contents/AppHead.vue';
import AppFoot from '@/contents/AppFoot.vue';

export default {
    name: 'App',

    data() {
        return {
            wmsg: get_window_messages(),
            headFold: true,
            loginFold: true,
            profileFold: false,
            articles: [{
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
                },
                {
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
                },
                {
                    img: require('@/assets/image/abg1.jpg'),
                    imgStyle: {
                        '--img': require('@/assets/image/abg1.jpg')
                    },
                    title: '1111111111',
                    describe: '22222222222',
                    time: ['2000', '01', '01', '00', '00'],
                    contont: 'xxxxxxxxx',
                    comment: 0,
                    view: 1,
                    link: "/article/1"
                },
            ]
        }
    },
    components: {
        AppRight,AppLeft,AppHead,AppFoot
    },

    methods: {
        flatenHead() {
            dqc('.list', 'head-fold');
            this.flatenLogin();
            this.headFold = !this.headFold;
        },
        flatenLogin() {
            dqc('.logintmp', 'login-fold');
            this.loginFold = !this.loginFold;
        },
        flatenProfile() {
            dqc('#left', 'profile-fold');
            dqc('.icon-rotate', 'rotate');
            dqc('.icon-rotate', 'derotate');
            dqc('.list', 'profile-fold');
            dqc('.title-icon', 'profile-fold');
            dqc('#nav-left', 'profile-fold');
            dqc('._fold-hide', 'fold-hide');
            dqc('#body', 'profile-fold');
            dqc('.article-bg', 'profile-fold');
            dqc('.article-container', 'profile-fold');
            this.profileFold = !this.profileFold;
        },
        handleClick($event) {
            let nowel = $event.target;
            if (!nowel.classList.contains('login-item') && !this.loginFold) {
                this.flatenLogin();
            }
        }
    },

    mounted() {
        document.addEventListener('click', this.handleClick);
    },

    beforeUnmount() {
        document.removeEventListener('click', this.handleClick);
    }
}
</script>

<style lang="scss">
@import "./assets/css/style.scss";
</style>
