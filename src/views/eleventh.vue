<template>
    <div class="about">
        <div class="title">
            中秋节
        </div>
        <div class="show" :class="{'hide': hide}" v-if="hide_div">
            <div class="text1">
                哇，时隔3个月，又见面了！！！开心(*^▽^*)
            </div>
            <div class="text1">
               中秋快乐！！！！！
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
    name: 'eleventh',
    data() {
        return {
            hide:false,
            hide_div:true,
            message:[
                {
                    title: '一见面就合照（有毒）',
                    img: require('@/assets/img/zhongqiu/hezhao1.jpg'),
                    active:true,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/zhongqiu/hezhao2.jpg'),
                    active:false,
                },
                {
                    title: '然后我带着你，你带着学妹四处逛',
                    img: require('@/assets/img/zhongqiu/guang2.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/zhongqiu/guang1.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/zhongqiu/guang3.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/zhongqiu/guang4.jpg'),
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