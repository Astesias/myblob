<template>
<div id="foot" class="foot_item fnormal base_left lnormal">
    <div class="text" id="foot-link1" href="">
        © 2020-2026 Copyright Astesias
    </div>   
    <a class="text" id="foot-link2" href="" v-show="wt<=1">
        Theme by Astesias | Theme modified by Astesias
    </a>   
</div>
</template>

<script>
export default {
    name: 'AppFoot',
    props: {
        wt: Number,
    },
}
</script>
