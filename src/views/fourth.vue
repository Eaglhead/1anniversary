<template>
    <div class="about">
        <div class="title">
            2019年元旦
        </div>
        <div class="show-block" v-for="(item, index) in message" 
            :key="index" :class="{'hide-block':!item.active}">
            <div class="text1">
                {{item.title}}
            </div>
            <img :src="item.img" alt="">
        </div>
        <div class="text1">
            然后就是四处happy
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
        margin-bottom: 0.2rem;
    }
    .show-block{
        transition: all 1s linear;
        opacity: 1;
        position: absolute;
        top: 2.52rem;
    }
    .hide-block{
        transition: all 1s linear;
        opacity: 0;
    }
    .text1{
        padding: 0 0.2rem;
        font-size: 0.32rem;
        text-align: center;
        margin-bottom: 0.2rem;
    }
    img{
        height: 6.80rem;
        width: 5.40rem;
    }
</style>

<script>
// @ is an alias to /src

export default {
    name: 'fourth',
    data() {
        return {
            flag:0,
            message:[
                {
                    title: '三坊七巷',
                    img: require('@/assets/img/yuandan/sfqx.jpg'),
                    active:true,
                },
                {
                    title: '食堂学习',
                    img: require('@/assets/img/yuandan/study.jpg'),
                    active:false,
                },
                {
                    title: '电影院自拍',
                    img: require('@/assets/img/yuandan/zipai.jpg'),
                    active:false,
                },
                {
                    title: '万象城要饭',
                    img: require('@/assets/img/yuandan/yaofan.jpg'),
                    active:false,
                },
                {
                    title: '电玩女神',
                    img: require('@/assets/img/yuandan/playgame.jpg'),
                    active:false,
                },
                {
                    title: '抱猪睡公主',
                    img: require('@/assets/img/yuandan/sleep.jpg'),
                    active:false,
                },
                {
                    title: '比给你的小心心',
                    img: require('@/assets/img/yuandan/heart.jpg'),
                    active:false,
                },
            ]
        }
    },
    mounted() {
        this.change_block();
        setInterval(this.change_block,5000);
    },
    methods: {
        change_block() {
            this.message.forEach((item,index) => {
                this.$set(item , 'active' , false);
                if(index === this.flag) {
                    this.$set(item , 'active' , true);
                }
            })
            this.flag++;
            if(this.flag === this.message.length) {
                this.flag = 0;
            }
        }
    }
}
</script>