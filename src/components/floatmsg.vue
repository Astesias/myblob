<template>
<div id="fmsg">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'fMsg',
    methods: {
        get_center() {
            let m = document.getElementById('fmsg');
            let a = document.getElementsByClassName('article-container')[0].getBoundingClientRect();
            m.style.left = `${a.width/2 + a.left - m.getBoundingClientRect().width/2 }px`;
            setTimeout(()=> void 5000);
        },
    },
    mounted() {
        this.get_center();
        // window.addEventListener('resize', this.get_center());
    }
}
</script>

<style>
#fmsg {
    top: 70px;
    display: block;
    position: absolute;
    background-color: pink;
    font-size: 15px;
    width: fit-content;
    height: fit-content;
    padding: 3px 5px;
    color: white;
    z-index: 1001;
    transition: all .5s ease;
}
</style>
