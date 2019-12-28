<template>
    <div class="about">
        <div class="title">
            2019年元旦
        </div>
        <div class="text1">
            福道，我们福州行的第一站<br/>（在自拍的你还不知道晚上会被我表白扒，嘿嘿）
        </div>
        <video class="video" controls>
            <source src="../assets/video/fudao.mp4" type="video/mp4">
            您的浏览器不支持 HTML5 video 标签。
        </video>
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
        padding: 0 0.2rem;
        font-size: 0.32rem;
        text-align: center;
        margin-bottom: 0.2rem;
    }
    .video{
        height: 4.80rem;
        width: 6.40rem;
    }
</style>

<script>
// @ is an alias to /src

export default {
    name: 'second',
    components: {

    }
}
</script>