<template>
<div id="left" class="y-scroll profile-hide-re" v-show="window_size_type<2||profileHide">
    <div id="left-container">
        <div id="left-block">
            <div id="profile-img-container">
                <img src="../assets/image/profile.jpg" alt="profile">
            </div>
            <div id="profile_name" class="text center">玫星晴</div>
        </div>
        <div id="left-block" v-for="_ in 3" :key="_">
            <div class="block-name">导航</div>
            <div class="block-item" v-for="_ in 5" :key="_">
                <svg t="1712852815015" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1543" width="200" height="200">
                    <path d="M640 631.467a8.533 8.533 0 0 0-8.533 8.533v213.333a8.533 8.533 0 0 0 8.533 8.534h213.333a8.533 8.533 0 0 0 8.534-8.534V640a8.533 8.533 0 0 0-8.534-8.533z m0-68.267h213.333a76.8 76.8 0 0 1 76.8 76.8v213.333a76.8 76.8 0 0 1-76.8 76.8H640a76.8 76.8 0 0 1-76.8-76.8V640a76.8 76.8 0 0 1 76.8-76.8z m0-401.067a8.533 8.533 0 0 0-8.533 8.534V384a8.533 8.533 0 0 0 8.533 8.533h213.333a8.533 8.533 0 0 0 8.534-8.533V170.667a8.533 8.533 0 0 0-8.534-8.534z m0-68.266h213.333a76.8 76.8 0 0 1 76.8 76.8V384a76.8 76.8 0 0 1-76.8 76.8H640a76.8 76.8 0 0 1-76.8-76.8V170.667a76.8 76.8 0 0 1 76.8-76.8z m-469.333 537.6a8.533 8.533 0 0 0-8.534 8.533v213.333a8.533 8.533 0 0 0 8.534 8.534H384a8.533 8.533 0 0 0 8.533-8.534V640a8.533 8.533 0 0 0-8.533-8.533z m0-68.267H384a76.8 76.8 0 0 1 76.8 76.8v213.333a76.8 76.8 0 0 1-76.8 76.8H170.667a76.8 76.8 0 0 1-76.8-76.8V640a76.8 76.8 0 0 1 76.8-76.8z m0-401.067a8.533 8.533 0 0 0-8.534 8.534V384a8.533 8.533 0 0 0 8.534 8.533H384a8.533 8.533 0 0 0 8.533-8.533V170.667a8.533 8.533 0 0 0-8.533-8.534z m0-68.266H384a76.8 76.8 0 0 1 76.8 76.8V384a76.8 76.8 0 0 1-76.8 76.8H170.667a76.8 76.8 0 0 1-76.8-76.8V170.667a76.8 76.8 0 0 1 76.8-76.8z" fill="#16adfc" p-id="1544"></path>
                </svg>
                <div class="block-item-name text _fold-hide">原神？启动！</div>
                <div class="none _fold-hide"></div>
                <div class="none _fold-hide"></div>
            </div>

        </div>
    </div>
</div>
</template>

    
<script>
export default {
    name: 'AppLeft',
    props: {
        window_size_type: Int16Array,
        profileHide: Boolean,
    }
}
</script>
