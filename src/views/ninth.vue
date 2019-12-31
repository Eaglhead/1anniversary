<template>
    <div class="about">
        <div class="title">
            六一
        </div>
        <div class="show" :class="{'hide': hide}" v-if="hide_div">
            <div class="text1">
                这个六一有丶不一样，我们去了杭州。
            </div>
            <div class="text1">
                第一次来到这座城市，别说，还挺有风味的
            </div>
            <div class="text1">
                特别是还有你跟我一起，嘿嘿
            </div>
            <div class="text1">
                （有视频）
            </div>
        </div>
        <div class="show" :class="{'hide': hide_div}">
            <video class="video" controls preload="auto">
                <source src="../assets/video/liuyi.mp4" type="video/mp4">
                您的浏览器不支持 HTML5 video 标签。
            </video>
        </div>
    </div>
</template>

<style scoped>
    .about{
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        color: #ffffff;
    }
    .title{
        font-size: 0.40rem;
        font-weight: 600;
        color: #fb1a4c;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .text1{
        margin-bottom: 0.1rem;
        padding: 0 0.2rem;
        font-size: 0.32rem;
        text-align: center;
    }
    .video{
        height: 4.80rem;
        width: 6.40rem;
    }
    .show{
        transition: all 1s linear;
        opacity: 1;
    }
    .hide{
        transition: all 1s linear;
        opacity: 0;
    }
</style>

<script>
// @ is an alias to /src

export default {
    name: 'ninth',
    data() {
        return {
            hide:false,
            hide_div:true,
        }
    },
     mounted() {
        setTimeout(() => {
            this.hide = true;
            setTimeout(() => {
                this.hide_div = false;
            },1000);
        },1000*3);
    },
    destroyed(){

    },
    components: {

    }
}
</script>