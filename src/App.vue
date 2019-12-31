<template>
    <div id="app">
        <div class="view" :class="{'changeup': changeup,'changedown': changedown}">
            <router-view/>
            <div class="change-page" v-if="!show_text && show_button">
                <i class="iconfont icon-fanye" @click="change_page"></i>
            </div>
            <div class="page_button" v-if="show_text">
                <div class="button1" v-for="(item, index) in button_num" 
                :key="index" @click="jump_page(item)">
                    {{item}}
                </div>
            </div>
        </div>
        <i class="iconfont icon-yinle music" :class="{'music-rotate':music}"
         @click="play_music" ref="button_music"></i>
        <audio controls preload="auto" loop ref="audio">
            <source src="./assets/video/turanzhijian.mp3" type="audio/mpeg">
        </audio>
        <video class="video hidden-video" controls preload="auto">
            <source src="./assets/video/fudao.mp4" type="video/mp4">
        </video>
        <video class="video hidden-video" controls preload="auto">
            <source src="./assets/video/playground.mp4" type="video/mp4">
        </video>
        <video class="video hidden-video" controls preload="auto">
            <source src="./assets/video/liuyi.mp4" type="video/mp4">
        </video>
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
    .music{
        font-size: 0.42rem!important;
        position: absolute;
        top: 0.2rem;
        right: 0.3rem;
        z-index: 100;
        color: #ffffff;
        opacity: 0.8;
    }
    .music-rotate{
        animation: rotate 3s;
        -webkit-animation: rotate 3s; /* Safari and Chrome */
        animation-iteration-count:infinite;
        -webkit-animation-iteration-count:infinite;
        animation-timing-function:linear;
        -webkit-animation-timing-function:linear;
    }
    /* 音乐图标动画 */
    @keyframes rotate
    {
        0%   {transform: rotate(0);}
        25%  {transform: rotate(90deg);}
        50%  {transform: rotate(180deg);}
        75%  {transform: rotate(270deg);}
        100% {transform: rotate(0);}
    }
    @-webkit-keyframes rotate
    {
        0%   {transform: rotate(0);}
        25%  {transform: rotate(90deg);}
        50%  {transform: rotate(180deg);}
        75%  {transform: rotate(270deg);}
        100% {transform: rotate(0);}
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
    .page_button{
        width: 100%;
        position: fixed;
        bottom: 0;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 0.2rem;
    }
    .page_button .button1{
        width: 0.6rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.46rem;
        color: #ffffff;
        border: 0.02rem solid #ffffff;
        border-radius: 1rem;
        margin: 0.06rem 0.08rem;
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
    audio,.hidden-video{
        position: absolute;
        top: 0;
        height: 0.1rem;
        width: 0.1rem;
        opacity: 0;
    }
</style>

<script>
export default {
    name: 'app',
    data() {
        return {
            flag: localStorage.getItem('myflag'),
            changeup: false,
            changedown: false,
            show_text:false,
            show_button: false,
            music: false,
            button_num:[],
        }
    },
    mounted(){
        localStorage.setItem('myflag',0);
    },
    methods:{
        change_page() {
            this.changeup = true;
            this.changedown = true;
            setTimeout(() => {
                this.flag = Math.round(localStorage.getItem('myflag'));
                if(this.flag === 0) {
                    this.button_num = [];
                }
                this.$router.push({
                    path: `/${this.flag}`
                })
                this.flag++;
                if(this.flag == 17) {
                    localStorage.setItem('myflag',0);
                    this.button_num.push(17); 
                    this.show_text = true;
                } else {
                    this.button_num.push((this.flag)); 
                    this.show_text = false;
                    localStorage.setItem('myflag',this.flag);
                }
                this.changeup = false;
                setTimeout(() => {
                    this.changedown = false;
                },300);
                
            },300);
        },
        jump_page(index) {
            this.$router.push({
                path: `/${(index-1)}`
            })
        },
        play_music() {
            this.music = !this.music;
            if (this.music) {
                this.$refs.audio.play();
            }else{
                this.$refs.audio.pause();
            }
        }
    }
}
</script>
