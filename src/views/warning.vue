<template>
  <div class="home">
        <div class="title">Single Dog Warning</div>
        <div class="text1">专为周年开发创作，单身狗慎入。</div>
        <div class="text2">(翻页请点击下边)</div>
        <div class="text2">(音乐请手动点击右上角)</div>
        <div class="text2">(嗯，因为服务器是免费的，所以会慢，请耐心等待)</div>
        <div class="text2">(下次一定买个服务器ORZ)</div>
        <div class="page-container" style="text-align: center;">
        <div class="loading">
            <div class="text1">Loading...</div>
            <div class="text2">{{percent}}</div>
        </div>
    </div>
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
    .loading{
        margin-top: 1rem; 
    }
</style>

<script>
// @ is an alias to /src

export default {
    name: 'home',
    data () {
        return {
            count: 0,
            percent: '',
        }
    },
    components: {

    },
    mounted() {
        this.preload();
    },
    methods:{
        preload: function() {
            let imgs = [
                require('@/assets/img/yuandan/sfqx.jpg'),
                require('@/assets/img/yuandan/study.jpg'),
                require('@/assets/img/yuandan/zipai.jpg'),
                require('@/assets/img/yuandan/yaofan.jpg'),
                require('@/assets/img/yuandan/playgame.jpg'),
                require('@/assets/img/yuandan/sleep.jpg'),
                require('@/assets/img/yuandan/heart.jpg'),
                require('@/assets/img/chunjie/bike.jpg'),
                require('@/assets/img/chunjie/ktv_photo.jpg'),
                require('@/assets/img/chunjie/sing.jpg'),
                require('@/assets/img/chunjie/hand.jpg'),
                require('@/assets/img/chunjie/yuanxiao.jpg'),
                require('@/assets/img/chunjie/baishamen.jpg'),
                require('@/assets/img/chunjie/all.jpg'),
                require('@/assets/img/qingming/love1.jpg'),
                require('@/assets/img/qingming/love2.jpg'),
                require('@/assets/img/qingming/love3.jpg'),
                require('@/assets/img/wuyi/chepiao.jpg'),
                require('@/assets/img/wuyi/jiewo.jpg'),
                require('@/assets/img/wuyi/two.jpg'),
                require('@/assets/img/wuyi/youju.jpg'),
                require('@/assets/img/wuyi/bixin1.jpg'),
                require('@/assets/img/wuyi/kiss.jpg'),
                require('@/assets/img/wuyi/bixin2.jpg'),
                require('@/assets/img/wuyi/two2.jpg'),
                require('@/assets/img/wuyi/kiss2.jpg'),
                require('@/assets/img/wuyi/kuangche.jpg'),
                require('@/assets/img/wuyi/dashu.jpg'),
                require('@/assets/img/wuyi/kiss3.jpg'),
                require('@/assets/img/wuyi/youxi.jpg'),
                require('@/assets/img/wuyi/pashan.jpg'),
                require('@/assets/img/wuyi/shaokao.jpg'),
                require('@/assets/img/wuyi/zizhu.jpg'),
                require('@/assets/img/duanwu/hezhao1.jpg'),
                require('@/assets/img/duanwu/hezhao2.jpg'),
                require('@/assets/img/duanwu/hezhao3.jpg'),
                require('@/assets/img/duanwu/hezhao4.jpg'),
                require('@/assets/img/duanwu/hezhao5.jpg'),
                require('@/assets/img/duanwu/hezhao6.jpg'),
                require('@/assets/img/duanwu/hezhao7.jpg'),
                require('@/assets/img/duanwu/qiche.jpg'),
                require('@/assets/img/duanwu/sing.jpg'),
                require('@/assets/img/duanwu/gouwuche.jpg'),
                require('@/assets/img/zhongqiu/hezhao1.jpg'),
                require('@/assets/img/zhongqiu/hezhao2.jpg'),
                require('@/assets/img/zhongqiu/guang2.jpg'),
                require('@/assets/img/zhongqiu/guang1.jpg'),
                require('@/assets/img/zhongqiu/guang3.jpg'),
                require('@/assets/img/zhongqiu/guang4.jpg'),
                require('@/assets/img/guoqing/xiamen1.jpg'),
                require('@/assets/img/guoqing/xiamen2.jpg'),
                require('@/assets/img/guoqing/xiamen3.jpg'),
                require('@/assets/img/guoqing/xiamen4.jpg'),
                require('@/assets/img/guoqing/xiamen5.jpg'),
                require('@/assets/img/guoqing/quanzhou.jpg'),
                require('@/assets/img/guoqing/quanzhou2.jpg'),
                require('@/assets/img/guoqing/quanzhou3.jpg'),
                require('@/assets/img/guoqing/lvdou.jpg'),
                require('@/assets/img/guoqing/fuzhou.jpg'),
                require('@/assets/img/richang/chepiao.jpg'),
                require('@/assets/img/richang/yanchanghui.jpg'),
                require('@/assets/img/richang/shengdan1.jpg'),
                require('@/assets/img/richang/shengdan2.jpg'),
                require('@/assets/img/richang/shengdan3.jpg'),
            ]

            for (let i = 0; i < imgs.length; i++) {
                let image = new Image()
                image.src = imgs[i];
                image.onload = () => {
                    this.count++;
                    // 计算图片加载的百分数，绑定到percent变量
                    let percentNum = Math.floor(this.count / imgs.length * 100)
                    this.percent = `${percentNum}%`
                    if(percentNum == 100){
                        localStorage.setItem('myflag',1);
                        this.$parent.show_button = true;
                        this.$router.push({
                            path: `/0`
                        })
                    }
                }
            }
        },
    }
}
</script>
