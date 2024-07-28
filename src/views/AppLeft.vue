<template>
<div id="left" class="left_item lnormal base_head hnormal y-scroll">
    <div id="left-container">
        <div id="left-block">
            <div id="profile-img-container">
                <img src="../assets/image/profile.jpg" alt="profile" @click="clickprofileimg">
            </div>
            <div id="profile-name" class="text">
                玫星晴
            </div>
        </div>
        <div id="left-block" v-for="linkscontent in alllinkscontent" :key="linkscontent.id">
            <div class="block-name">{{ linkscontent.name }}</div>
            <div class="block-item" v-for="linkcontent in linkscontent.content" :key="linkcontent.id" :class="{ subhide:linkcontent.sub , parent:linkcontent.parent , parentfold:linkcontent.parent}" 
            @click="linkcontent.href?openNewPage(linkcontent.href,linkcontent.blank):hideSub($event)">
                    <i class="iconfont" :class="linkcontent.class" :style="linkcontent.style"></i>
                    <div class="block-item-name text">{{ linkcontent.name }}</div>  
                    <div class="none _fold-hide"></div>
                    <div class="none _fold-hide"></div>
                    <i class="iconfont icon-fangxiangfangxiang-xiangzuo unfold" style="margin-left: auto; margin-right: 10px; color: rgb(0, 0, 0,0.44);font-size: 15px;"></i>
                    <i class="iconfont icon-fangxiangfangxiang-xiangxia fold" style="margin-left: auto; margin-right: 10px; color: rgb(0, 0, 0,0.44);font-size: 15px;"></i>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'AppLeft',
    props: {
        alllinkscontent: Array
    },
    methods: {
        openNewPage(href, blank = false) {
            if (blank) {
                window.open(href, '_blank');
            } else {
                // this.$router.push('/');
                this.$router.push(href);
            }
        },
        hideSub(event) {
            if(document.getElementById('left').classList.contains('lfold')) {
                document.getElementById('foldbtn').click();
            }
            let ele = event.target;
            if(ele.classList.contains('sub')){
                return;
            }
            let bro = ele.parentElement.children;
            let printNextElements = false;
            if (ele.classList.contains('parentfold')) {
                ele.classList.remove('parentfold');
                ele.classList.add('parentnofold');
            } else if(ele.classList.contains('parent')) {
                ele.classList.remove('parentnofold');
                ele.classList.add('parentfold');
            }
            // 遍历兄弟元素
            for (let i = 0; i < bro.length; i++) {
                let sibling = bro[i];

                if (printNextElements) {
                    // 判断是否包含特定 class
                    if (!sibling.classList.contains('sub') && !sibling.classList.contains('subhide')) {
                        break; // 遇到条件要求的元素，结束循环
                    } else {
                        if (sibling.classList.contains('subhide')) {
                            sibling.classList.add('sub');
                            sibling.classList.remove('subhide');
                        } else {
                            sibling.classList.add('subhide');
                            sibling.classList.remove('sub');
                        }
                    }
                }

                // 如果当前兄弟元素是 ele 元素，则开始打印其之后的兄弟元素
                if (sibling === ele) {
                    printNextElements = true;
                }
            }

        },
        clickprofileimg(){
            let a = document.getElementById("article");
            a.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
    }

}
</script>