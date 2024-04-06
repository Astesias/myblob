<template>
<div id="bg"></div>
<div id="bg-mask"></div>
<div id="head">
    <div id="nav">
        <div id="nav-right">
            <div class="list">
                <div class="dropdown hide">
                    <a href="#" class="icon-a">
                        <svg t="1712408277754" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1543" width="200" height="200">
                            <path d="M512 477.867a179.2 179.2 0 1 0-179.2-179.2 179.2 179.2 0 0 0 179.2 179.2zM368.64 500.48a247.467 247.467 0 1 1 286.293 0A460.8 460.8 0 0 1 972.8 938.667a34.133 34.133 0 0 1-68.267 0 392.533 392.533 0 0 0-785.066 0 34.133 34.133 0 1 1-68.267 0A460.8 460.8 0 0 1 368.64 500.48z" fill="#ffffff" p-id="1544"></path>
                        </svg>
                    </a>
                </div>
                <div class="dropdown hide">
                    <a href="#" class="icon-a">
                        <svg t="1712408322227" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1749" width="200" height="200">
                            <path d="M362.24 896H95.573V640l512-512a124.16 124.16 0 0 1 170.667 0l88.747 85.333A123.733 123.733 0 0 1 873.813 384z m-205.227-60.16h180.054l491.52-491.52a62.72 62.72 0 0 0 17.92-45.653 61.867 61.867 0 0 0-19.2-42.667l-88.747-85.333a62.72 62.72 0 0 0-85.333 0L157.013 665.6z m379.435-577.28l46.379-50.09 233.6 216.191-46.336 50.091z" fill="#ffffff" p-id="1750"></path>
                        </svg>
                    </a>
                </div>
                <div class="dropdown hide">
                    <a href="#" class="icon-a">
                        <svg t="1712417191027" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367" width="200" height="200">
                            <path d="M264.107 948.053a34.133 34.133 0 0 1-50.774-35.84l46.934-276.053L61.44 440.747A34.133 34.133 0 0 1 80.213 384l277.334-42.667 124.16-250.88a34.133 34.133 0 0 1 61.013 0l123.733 250.88L943.787 384a34.133 34.133 0 0 1 18.773 58.027L762.453 637.44l48.214 274.773a34.133 34.133 0 0 1-49.494 35.84l-247.893-128z m232.106-198.826a34.133 34.133 0 0 1 31.574 0l202.666 104.106-38.4-225.706a34.133 34.133 0 0 1 9.814-30.294l163.84-160L640 407.04a34.133 34.133 0 0 1-25.6-18.773L512 183.04 410.453 388.267a34.133 34.133 0 0 1-25.6 18.773l-226.56 33.28 163.84 160a34.133 34.133 0 0 1 9.814 30.293l-38.4 222.72z" fill="#ffffff" p-id="2368"></path>
                        </svg>
                    </a>
                </div>
                <div class="dropdown hide">
                    <a href="#" class="icon-a">
                        <div class="text-div">
                            <span class="icon text">登录</span>
                            <b class="caret"></b>
                        </div>
                    </a>
                </div>
                <div class="dropdown _hide" :on-click="flatenHead">
                    <a href="#" class="icon-a">
                        <svg t="1712418693646" class="icon click-hide" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2573" width="200" height="200">
                            <path d="M853.333 247.467H170.667c-17.067 0-34.134-17.067-34.134-34.134S153.6 179.2 170.667 179.2h682.666c17.067 0 34.134 17.067 34.134 34.133s-17.067 34.134-34.134 34.134z m0 298.666H170.667c-17.067 0-34.134-17.066-34.134-34.133s17.067-34.133 34.134-34.133h682.666c17.067 0 34.134 17.066 34.134 34.133s-17.067 34.133-34.134 34.133z m0 298.667H170.667c-17.067 0-34.134-17.067-34.134-34.133s17.067-34.134 34.134-34.134h682.666c17.067 0 34.134 17.067 34.134 34.134S870.4 844.8 853.333 844.8z" fill="#ffffff" p-id="2574"></path>
                        </svg>
                        <svg t="1712418934948" class="icon click-_hide" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2779" width="200" height="200">
                            <path d="M213.333 887.467c-17.066 0-34.133-17.067-34.133-34.134V170.667c0-17.067 17.067-34.134 34.133-34.134s34.134 17.067 34.134 34.134v682.666c0 17.067-17.067 34.134-34.134 34.134z m298.667 0c-17.067 0-34.133-17.067-34.133-34.134V170.667c0-17.067 17.066-34.134 34.133-34.134s34.133 17.067 34.133 34.134v682.666c0 17.067-17.066 34.134-34.133 34.134z m298.667 0c-17.067 0-34.134-17.067-34.134-34.134V170.667c0-17.067 17.067-34.134 34.134-34.134S844.8 153.6 844.8 170.667v682.666c0 17.067-17.067 34.134-34.133 34.134z" fill="#ffffff" p-id="2780"></path>
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    </div>

</div>
<div id="left" class="hide">
</div>
</template>

<script>
import {
    get_window_messages
} from './utils';

export default {
    name: 'App',

    data() {
        let window_message = get_window_messages()
        return {
            wmsg: window_message
        }
    },

    components: {},

}
</script>

<style lang="scss">
@import "./assets/css/style.scss";
</style>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antiaulased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
