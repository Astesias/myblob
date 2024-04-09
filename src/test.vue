<template name="test">
<svg t="1712418693646" class="icon"  style="--icon-size:30" v-show="headFold" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2573" width="200" height="200">
    <path class="pathx"  d="M853.333 247.467H170.667c-17.067 0-34.134-17.067-34.134-34.134S153.6 179.2 170.667 179.2h682.666c17.067 0 34.134 17.067 34.134 34.133s-17.067 34.134-34.134 34.134z m0 298.666H170.667c-17.067 0-34.134-17.066-34.134-34.133s17.067-34.133 34.134-34.133h682.666c17.067 0 34.134 17.066 34.134 34.133s-17.067 34.133-34.134 34.133z m0 298.667H170.667c-17.067 0-34.134-17.067-34.134-34.133s17.067-34.134 34.134-34.134h682.666c17.067 0 34.134 17.067 34.134 34.134S870.4 844.8 853.333 844.8z" p-id="2574"></path>
</svg>
</template>

    
<script>
import {
    get_window_messages,
    set_svg_path_len
} from './utils';

export default {
    name: 'App',

    data() {
        let window_message = get_window_messages()
        return {
            wmsg: window_message,
            headFold: true,
            loginFold: true,
            profileFold: false,
        }
    },

    components: {},
    methods: {
        flatenHead() {
            if (!this.headFold) {
                document.querySelector('.list').classList.add('head-fold');
            } else {
                document.querySelector('.list').classList.remove('head-fold');
            }
            this.headFold = !this.headFold;
            this.loginFold = false;
            this.flatenLogin();
        },
        flatenLogin() {
            if (!this.loginFold) {
                document.querySelector('.logintmp').classList.add('login-fold');
            } else {
                document.querySelector('.logintmp').classList.remove('login-fold');
            }
            this.loginFold = !this.loginFold;
        },
        flatenProfile() {
            if (!this.profileFold) {
                document.querySelector('#left').classList.add('profile-fold');
                document.querySelector('.icon-rotate').classList.add('rotate');
                document.querySelector('.icon-rotate').classList.remove('derotate');

                document.querySelector('.list').classList.remove('profile-fold');

            } else {
                document.querySelector('#left.profile-fold').classList.remove('profile-fold');
                document.querySelector('.icon-rotate').classList.remove('rotate');
                document.querySelector('.icon-rotate').classList.add('derotate');

                document.querySelector('.list').classList.add('profile-fold');

            }
            this.profileFold = !this.profileFold;
        },
    },

    mounted() {
        set_svg_path_len('path');
    }

}
</script>

    
<style lang="scss">
@import "./assets/css/style.scss";
</style><style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antiaulased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
