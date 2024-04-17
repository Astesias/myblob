<template>
<div id="head" class="head_item hmormal">
    <div id="nav">
        <div id="nav-left">
            <div class="dropdown title-icon" >
                <a class="icon-a profile-a" v-show="profileFold||profileHide" @click="hideProfile">
                    <svg t="1712672971576" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1543" width="200" height="200">
                        <path d="M512 554.667a93.867 93.867 0 1 0-93.867-93.867A93.867 93.867 0 0 0 512 554.667z m0 68.266A162.133 162.133 0 1 1 674.133 460.8 162.133 162.133 0 0 1 512 621.653zM266.667 797.44a420.693 420.693 0 0 1-78.08-72.107l-75.947 73.814 42.667 8.106a34.133 34.133 0 0 1 26.88 26.88l8.106 42.667z m544-152.747a350.293 350.293 0 1 0-13.654 20.054z m-53.76 154.88l79.786 79.787 8.107-42.667a34.133 34.133 0 0 1 25.6-26.026l42.667-8.107-78.507-77.227a420.693 420.693 0 0 1-78.933 74.24z m-60.587 35.84a418.987 418.987 0 0 1-368.213 0L192 968.96a34.133 34.133 0 0 1-57.6-17.493l-16.213-81.494-81.494-16.64a34.133 34.133 0 0 1-17.493-57.6l128-128a418.133 418.133 0 1 1 725.333 3.414l130.56 130.56a34.133 34.133 0 0 1-17.493 57.6l-81.493 16.213-16.214 81.493a34.133 34.133 0 0 1-57.6 17.494z" fill="#ffffff" p-id="1544"></path>
                    </svg>
                </a>
                <div id="brief" v-show="!profileFold&&!profileHide">Live Your Love</div>
            </div>
            <!-- <div class="none"></div> -->
        </div>
        <div id="nav-mid" >
            <div class="dropdown" v-show="!profileHide">
                <a class="icon-a" @click="flatenProfile">
                    <svg t="1712754247132" class="icon icon-rotate derotate" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1543" width="200" height="200">
                        <path d="M872.533 819.627a34.133 34.133 0 0 1-48.213 48.213L492.373 535.893a34.133 34.133 0 0 1 0-48.213L824.32 155.733a34.133 34.133 0 0 1 48.213 48.214L564.907 512z m-341.333 0a34.133 34.133 0 0 1-48.213 48.213l-331.52-331.52a34.133 34.133 0 0 1 0-48.213L483.413 156.16a34.133 34.133 0 0 1 48.214 48.213L223.573 512z" fill="#ffffff" p-id="1544"></path>
                    </svg>
                </a>
            </div>
            <div id="search" v-show="window_size_type<2">
                <input type="text" placeholder="搜索内容...">
                <a class="icon-a">
                    <svg t="1712625367754" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1543" width="200" height="200">
                        <path  d="M889.173 826.88l-112.64-113.067a362.667 362.667 0 1 0-46.933 49.494l111.36 111.36a34.133 34.133 0 0 0 48.213-48.214z m-398.506-42.667a294.4 294.4 0 1 1 294.4-294.4 294.4 294.4 0 0 1-294.4 295.254z" fill="#2c2c2c" p-id="1544"></path>
                    </svg>
                </a>
            </div>
        </div>
        <div class="none" v-show="!(window_size_type<2)"></div>
        <div class="none"></div>
        <div id="nav-right">
            <div class="list head-fold profile-fold">
                <div class="dropdown">
                    <a class="icon-a">
                        <svg t="1712408277754" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1543" width="200" height="200">
                            <path  d="M512 477.867a179.2 179.2 0 1 0-179.2-179.2 179.2 179.2 0 0 0 179.2 179.2zM368.64 500.48a247.467 247.467 0 1 1 286.293 0A460.8 460.8 0 0 1 972.8 938.667a34.133 34.133 0 0 1-68.267 0 392.533 392.533 0 0 0-785.066 0 34.133 34.133 0 1 1-68.267 0A460.8 460.8 0 0 1 368.64 500.48z" fill="#ffffff" p-id="1544"></path>
                        </svg>
                        <div class="text">关于我</div>
                    </a>
                </div>
                <div class="dropdown">
                    <a class="icon-a">
                        <svg t="1712408322227" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1749" width="200" height="200">
                            <path  d="M362.24 896H95.573V640l512-512a124.16 124.16 0 0 1 170.667 0l88.747 85.333A123.733 123.733 0 0 1 873.813 384z m-205.227-60.16h180.054l491.52-491.52a62.72 62.72 0 0 0 17.92-45.653 61.867 61.867 0 0 0-19.2-42.667l-88.747-85.333a62.72 62.72 0 0 0-85.333 0L157.013 665.6z m379.435-577.28l46.379-50.09 233.6 216.191-46.336 50.091z" fill="#ffffff" p-id="1750"></path>
                        </svg>
                        <div class="text">留言</div>
                    </a>
                </div>
                <div class="dropdown">
                    <a class="icon-a">
                        <svg t="1712417191027" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367" width="200" height="200">
                            <path  d="M264.107 948.053a34.133 34.133 0 0 1-50.774-35.84l46.934-276.053L61.44 440.747A34.133 34.133 0 0 1 80.213 384l277.334-42.667 124.16-250.88a34.133 34.133 0 0 1 61.013 0l123.733 250.88L943.787 384a34.133 34.133 0 0 1 18.773 58.027L762.453 637.44l48.214 274.773a34.133 34.133 0 0 1-49.494 35.84l-247.893-128z m232.106-198.826a34.133 34.133 0 0 1 31.574 0l202.666 104.106-38.4-225.706a34.133 34.133 0 0 1 9.814-30.294l163.84-160L640 407.04a34.133 34.133 0 0 1-25.6-18.773L512 183.04 410.453 388.267a34.133 34.133 0 0 1-25.6 18.773l-226.56 33.28 163.84 160a34.133 34.133 0 0 1 9.814 30.293l-38.4 222.72z" fill="#ffffff" p-id="2368"></path>
                        </svg>
                        <div class="text">精选</div>
                    </a>
                </div>
                <div class="dropdown login-item">
                    <a class="icon-a login-item" @click="flatenLogin">
                        <div class="text-div login-item">
                            <span class="icon text login-item">登录</span>
                            <b class="caret login-item"></b>
                        </div>
                    </a>
                </div>
                <div id="login-tab" class="logintmp login-fold login-item">
                    <div class=".login-item-s login-item">
                        <div class="login-item">用户名/邮箱</div>
                        <input type="text" class="login-input .login-item-s login-item" placeholder="用户名或电子邮箱">
                    </div>
                    <div class=".login-item-s">
                        <div class="login-item">密码</div>
                        <input type="text" class="login-input .login-item-s login-item" placeholder="密码">
                    </div>
                    <button class=".login-item-s btn login-item">登录</button>
                </div>
            </div>
            <div class="list2" v-show="(1<=window_size_type && window_size_type<=3)">
                <div class="media2_hide" @click="flatenHead">
                    <a class="icon-a">
                        <svg t="1712418693646" class="icon" v-show="headFold" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2573" width="200" height="200">
                            <path  d="M853.333 247.467H170.667c-17.067 0-34.134-17.067-34.134-34.134S153.6 179.2 170.667 179.2h682.666c17.067 0 34.134 17.067 34.134 34.133s-17.067 34.134-34.134 34.134z m0 298.666H170.667c-17.067 0-34.134-17.066-34.134-34.133s17.067-34.133 34.134-34.133h682.666c17.067 0 34.134 17.066 34.134 34.133s-17.067 34.133-34.134 34.133z m0 298.667H170.667c-17.067 0-34.134-17.067-34.134-34.133s17.067-34.134 34.134-34.134h682.666c17.067 0 34.134 17.067 34.134 34.134S870.4 844.8 853.333 844.8z" fill="#ffffff" p-id="2574"></path>
                        </svg>
                        <svg t="1712418934948" class="icon" v-show="!headFold" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2779" width="200" height="200">
                            <path  d="M213.333 887.467c-17.066 0-34.133-17.067-34.133-34.134V170.667c0-17.067 17.067-34.134 34.133-34.134s34.134 17.067 34.134 34.134v682.666c0 17.067-17.067 34.134-34.134 34.134z m298.667 0c-17.067 0-34.133-17.067-34.133-34.134V170.667c0-17.067 17.066-34.134 34.133-34.134s34.133 17.067 34.133 34.134v682.666c0 17.067-17.066 34.134-34.133 34.134z m298.667 0c-17.067 0-34.134-17.067-34.134-34.134V170.667c0-17.067 17.067-34.134 34.134-34.134S844.8 153.6 844.8 170.667v682.666c0 17.067-17.067 34.134-34.133 34.134z" fill="#ffffff" p-id="2780"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'AppHead',
    props: {
        clickFlatenProfile: Function,
        clickFlatenLogin: Function,
        clickFlatenHead: Function,
        clickHideProfile: Function,
        profileFold: Boolean,
        profileHide: Boolean,
        headFold: Boolean,
        window_size_type: Number,

    },
    methods: {
        flatenProfile() {
            if (this.clickFlatenProfile) {
                this.clickFlatenProfile();
            }
        },
        flatenLogin() {
            if (this.clickFlatenLogin) {
                this.clickFlatenLogin();
            }
        },
        flatenHead() {
            if (this.clickFlatenHead) {
                this.clickFlatenHead();
            }
        },
        hideProfile() {
            if (this.clickHideProfile) {
                this.clickHideProfile();
            }
        },

    }
}
</script>
