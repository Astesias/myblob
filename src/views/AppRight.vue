<template>
<div id="right" class="right_item rnormal base_head hnormal">
    <div id="right-content">
        <div id="rtitle" style="white-space: pre-line;">
            本站已经持续运行 <br>
            {{ siteRunningTime }}
        </div>
    </div>
</div>
</template>

<script>
import {
    // dqc_ad,
    // dqc_rm,
    dqc_switch
} from "../utils"

export default {
    name: 'AppRight',
    props: {
        wt: Number,
    },
    data() {
        return {
            siteRunningTime : ''
        }
    },
    methods: {
        hideRight() {
            dqc_switch('.rnormal', 'rhide', ['rnormal', 'rhide'])
        },
        calculateTimeSince() {
            const targetDate = new Date('2023-09-10T00:00:00Z');

            // 获取当前日期时间
            const currentDate = new Date();

            // 计算时间差（毫秒）
            const timeDifference = currentDate.getTime() - targetDate.getTime();

            // 转换为年月日时分秒
            const seconds = Math.floor(timeDifference / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            const months = Math.floor(days / 30.4375); // 平均每月约为30.4375天
            const years = Math.floor(months / 12);

            // 计算余数以获取时分秒
            const secondsLeft = seconds % 60;
            const minutesLeft = minutes % 60;
            const hoursLeft = hours % 24;
            const daysLeft = days % 30.4375; // 剩余不足一个月的天数
            const monthsLeft = months % 12;

            // 构造输出字符串
            this.siteRunningTime  = `${years} 年 ${monthsLeft.toString().padStart(2, '0')} 月 ${Math.floor(daysLeft).toString().padStart(2, '0')} 天
                                    ${hoursLeft.toString().padStart(2, '0')} 小时 ${minutesLeft.toString().padStart(2, '0')} 分钟 ${secondsLeft.toString().padStart(2, '0')} 秒`;
        },
        startTimer() {
            this.calculateTimeSince(); // 首次调用以确保立即显示时间
            this.intervalId = setInterval(() => {
                this.calculateTimeSince();
            }, 1000);
        },
        stopTimer() {
            clearInterval(this.intervalId);
        }
    },
    mounted() {
        if (this.wt >= 1) {
            this.hideRight();
        }
        this.startTimer();
    },
    unmounted() {
        this.stopTimer();
    },
}
</script>
