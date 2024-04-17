<style lang="scss">@import "./assets/css/style.scss";</style>
<template>
<AppHead    :clickFlatenProfile="flatenProfile"
            :clickFlatenLogin="flatenLogin"
            :clickFlatenHead="flatenHead"
            :clickHideProfile="hideProfile"
            :profileFold="profileFold"
            :headFold="headFold"
            :profileHide="profileHide"
            :window_size_type="window_size_type">
</AppHead>
<AppLeft    :window_size_type="window_size_type"
            :profileHide="profileHide">
</AppLeft>
<AppRight></AppRight>
<AppFoot></AppFoot>

<div id="bg"></div>
<div class="article-bg _base_right">
    <div class="article-container">
        <div class="article-block" v-for="(item,index) of articles" :key="'article'+index">
            <img :src="item.img" alt="article title img">
        </div>
    </div>
</div>

</template>

<script>
import { get_window_messages,dqc,dqc_rm,dqc_ad } from '@/utils.js';
import AppRight from '@/contents/AppRight.vue';
import AppLeft from '@/contents/AppLeft.vue';
import AppHead from '@/contents/AppHead.vue';
import AppFoot from '@/contents/AppFoot.vue';

export default {
    name: 'App',
    setup() {},

    data() {
        return {
            wmsg: get_window_messages(),
            headFold: true,
            loginFold: true,
            profileFold: false,
            profileHide: false,
            window_size_type: 0,
            last_window_size_type: 0,
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
        hideProfile() {
            dqc("#left","profile-hide");
            dqc("#left","profile-hide-re");
            dqc(".list","profile-hide-flag");
            dqc("#nav-left","profile-hide-flag");
            // dqc(".article-bg","profile-hide-flag");
            this.profileHide = !this.profileHide;
        },

        handleClick($event) {
            let nowel = $event.target;
            if (!nowel.classList.contains('login-item') && !this.loginFold) {
                this.flatenLogin();
            }
        },
        handleResize($event,first=false) {
            let nowel = $event.target;
            console.log(window.innerWidth);
            this.window_size_type = window.innerWidth > 750 ? 0 : window.innerWidth > 450 ? 1 : 2;
            
            if(first||this.last_window_size_type!=this.window_size_type){
                console.log(nowel);
                console.log(first);
                if(this.window_size_type==0){
                    if(this.profileFold){
                        this.flatenProfile();
                    }
                }
                if(this.window_size_type==2){
                    if(!this.profileHide){
                        this.hideProfile();
                        this.profileHide = true;
                    }
                }
            else {
                if(!this.profileFold){
                    this.flatenProfile();
                }
            }
            }
            if(this.window_size_type==2){
                dqc_ad("#nav-left","profile-hide-flag");
            }
            if(this.window_size_type!=2){
                dqc_rm("#left","profile-hide");
                dqc_rm("#left","profile-hide-re");
            }
            this.last_window_size_type = this.window_size_type;
        }
    },

    mounted() {
        document.addEventListener('click', this.handleClick);
        window.addEventListener('resize', this.handleResize);
        this.handleResize(true);
        // this.profileFold = this.window_size_type<=0;

    },

    beforeUnmount() {
        document.removeEventListener('click', this.handleClick);
        window.removeEventListener('resize', this.handleResize);
    }
}
</script>


