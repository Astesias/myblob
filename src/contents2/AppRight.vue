<template>
<div id="right" class="right_item rnormal base_head hnormal">
    <div id="right-content"></div>
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
    methods: {
        hideRight() {
          dqc_switch('.rnormal','rhide',['rnormal','rhide'])
        }
    },
    mounted() {
        if (this.wt >= 1) {
          this.hideRight();
        }
    }
}
</script>
