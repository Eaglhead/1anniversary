<template>
    <div id="app">
        <div class="view" :class="{'changeup': changeup,'changedown': changedown}">
            <router-view/>
            <div class="change-page">
                <i class="iconfont icon-fanye" v-if="!show_text" @click="change_page"></i>
                <span v-if="show_text" @click="change_page">回到最初的起点</span>
            </div>
        </div>
    </div>
</template>

<style>
    html,body{
        margin: 0!important;
        height: 100%;
        width: 100%;
    }
    #app {
        height: 100%;
        width: 100%;
        background-image: url('./assets/看星星.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        overflow: auto;
        position: relative;
    }
    .change-page{
        height: 1.2rem;
        width: 100%;
        position: fixed;
        bottom: 0;
        text-align: center;
    }
    .change-page i{
        font-size: 0.80rem;
        color: #ffffff;
        opacity: 0.5;
    }
    .change-page span{
        font-size: 0.40rem;
        color: #ffffff;
        opacity: 0.5;
    }
    .view {
        height: 100%;
        width: 100%;
        transition: all 0.4s linear;
        opacity: 1;
        transform: translate(0, 0);
    }

    .view.changeup{
        opacity: 0!important;
        transform: translate(0, -100%)!important;
    }    
    .view.changedown{
        opacity: 0;
        transform: translate(0, 100%);
    }    
</style>

<script>
export default {
    name: 'app',
    data() {
        return {
            flag: 0,
            changeup: false,
            changedown: false,
            show_text:false,
        }
    },
    mounted(){

    },
    methods:{
        change_page() {
            this.changeup = true;
            this.changedown = true;
            setTimeout(() => {
                this.$router.push({
                    path: `/${this.flag}`
                })
                this.flag++;
                if(this.flag == 17) {
                    this.show_text = true;
                    this.flag = 0;
                } else {
                    this.show_text = false;
                }
                this.changeup = false;
                setTimeout(() => {
                    this.changedown = false;
                },300);
                
            },300);
        }
    }
}
</script>
