<template>
    <div class="about">
        <div class="title">
            {{title}}
        </div>
        <div class="show-block" v-for="(item, index) in message" 
            :key="index" :class="{'hide-block':!item.active}">
            <div class="text1">
                {{item.title}}
            </div>
            <img :src="item.img" alt="">
        </div>
        <div class="text1" :class="{'hide-block': hide}">
            {{second_title}}
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
        display: flex;
        flex-flow: column;
        align-items: center;
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
        transition: all 1s linear;
    }
    img{
        height: 6.80rem;
        width: 5.40rem;
    }
</style>

<script>
// @ is an alias to /src

export default {
    name: 'photo_view',
    props:{
        title:String,
        second_title:String,
        message:Array
    },
    data() {
        return {
            flag:0,
            hide:false,
        }
    },
    mounted() {
        this.change_block();
        setTimeout(() => {
            this.hide = true;
        },1000*10);
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