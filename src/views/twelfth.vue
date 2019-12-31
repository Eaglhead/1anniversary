<template>
    <div class="about">
        <div class="title">
            国庆节
        </div>
        <div class="show" :class="{'hide': hide}" v-if="hide_div">
            <div class="text1">
                7天长假，走走走，去嗨，去放纵
            </div>
            <img class="face-img" src="../assets/img/guoqing/hai.jpg" alt="">
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
    .face-img{
        margin: auto;
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
    name: 'twelfth',
    data() {
        return {
            hide:false,
            hide_div:true,
            message:[
                {
                    title: '第一站：厦门',
                    img: require('@/assets/img/guoqing/xiamen1.jpg'),
                    active:true,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/guoqing/xiamen2.jpg'),
                    active:false,
                },
                {
                    title: '小导游',
                    img: require('@/assets/img/guoqing/xiamen3.jpg'),
                    active:false,
                },
                {
                    title: '在钟鼓索道',
                    img: require('@/assets/img/guoqing/xiamen4.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/guoqing/xiamen5.jpg'),
                    active:false,
                },
                {
                    title: '第二站：泉州',
                    img: require('@/assets/img/guoqing/quanzhou.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/guoqing/quanzhou2.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/guoqing/quanzhou3.jpg'),
                    active:false,
                },
                {
                    title: '第三站：回福州（一看到吃的就开心白蝶）',
                    img: require('@/assets/img/guoqing/lvdou.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/guoqing/fuzhou.jpg'),
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