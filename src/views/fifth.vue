<template>
    <div class="about">
        <div class="title">
            春节假期
        </div>
        <div class="text1 show-block">
            假期到咯,冲冲冲，赶紧肥家找你
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
    .show-block{
        opacity: 1!important;
    }
    .hide-block{
        opacity: 0;
    }
    .text1{
        opacity: 0;
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
    name: 'fifth',
    data() {
        return {
 
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>