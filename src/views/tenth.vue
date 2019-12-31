<template>
    <div class="about">
        <div class="title">
            端午
        </div>
        <div class="show" :class="{'hide': hide}" v-if="hide_div">
            <div class="text1">
                端午呀，因为你要考四级，所以，我又来啦
            </div>
            <div class="text1">
                (有照片)
            </div>
        </div>
        <photo-view class="show"
        v-if="hide"  
        :class="{'hide': hide_div}"
        :title="''" 
        :second_title="''"
        :message="message"/>
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
import photo_view from '@/components/photo_view';
export default {
    name: 'tenth',
    data() {
        return {
            hide:false,
            hide_div:true,
            message:[
                {
                    title: '端午节快乐（公交车上合照）',
                    img: require('@/assets/img/duanwu/hezhao1.jpg'),
                    active:true,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/duanwu/hezhao2.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/duanwu/hezhao3.jpg'),
                    active:false,
                },
                {
                    title: '在蛙舍',
                    img: require('@/assets/img/duanwu/hezhao4.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/duanwu/hezhao5.jpg'),
                    active:false,
                },
                {
                    title: '在食堂',
                    img: require('@/assets/img/duanwu/hezhao6.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/duanwu/hezhao7.jpg'),
                    active:false,
                },
                {
                    title: '和你一起骑单车',
                    img: require('@/assets/img/duanwu/qiche.jpg'),
                    active:false,
                },
                {
                    title: '一起唱歌',
                    img: require('@/assets/img/duanwu/sing.jpg'),
                    active:false,
                },
                {
                    title: '一起逛超市（←_←）',
                    img: require('@/assets/img/duanwu/gouwuche.jpg'),
                    active:false,
                },
            ]
        }
    },
    components: {
        'photo-view': photo_view,
    },
     mounted() {
        setTimeout(() => {
            this.hide = true;
            setTimeout(() => {
                this.hide_div = false;
            },1000);
        },1000*3);
    },
}
</script>