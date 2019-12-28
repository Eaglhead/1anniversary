<template>
  <div class="home">
      <div class="title">Single Dog Warning</div>
      <div class="text1">专为周年开发创作，单身狗慎入。</div>
      <div class="text2">翻页请点击下边</div>
  </div>
</template>

<style scoped>
    .home{
        width: 100%;
        height: 100%;
        background-color: #000000;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        color: #ffffff;
    }
    .title{
        font-size: 0.40rem;
        font-weight: 600;
        color: #fb1a4c;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
    .text1{
        width: 100%;
        font-size: 0.28rem;
        text-align: center;
    }
    .text2{
        font-size: 0.24rem;
    }
</style>

<script>
// @ is an alias to /src

export default {
    name: 'home',
    components: {

    }
}
</script>
