<template>
    <photo-view :title="'五一'" 
    :second_title="'清明节过完不久，就到五一啦'"
    :message="message"/>
</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import photo_view from '@/components/photo_view';
export default {
    name: 'eighth',
    components: {
        'photo-view': photo_view,
    },
    data() {
        return {
            message:[
                {
                    title: '没错，我又来了，福州',
                    img: require('@/assets/img/wuyi/chepiao.jpg'),
                    active:true,
                },
                {
                    title: '傻宝宝接我还躲起来被我发现了',
                    img: require('@/assets/img/wuyi/jiewo.jpg'),
                    active:false,
                },
                {
                    title: '哼，黄碧苗一来，就不要我了QAQ',
                    img: require('@/assets/img/wuyi/two.jpg'),
                    active:false,
                },
                {
                    title: '邮局（还记得跟我合照哦←_←）',
                    img: require('@/assets/img/wuyi/youju.jpg'),
                    active:false,
                },
                {
                    title: '不知道说什么，那就跟你比个心扒',
                    img: require('@/assets/img/wuyi/bixin1.jpg'),
                    active:false,
                },
                {
                    title: '然后亲一下',
                    img: require('@/assets/img/wuyi/kiss.jpg'),
                    active:false,
                },
                {
                    title: '还是比个心',
                    img: require('@/assets/img/wuyi/bixin2.jpg'),
                    active:false,
                },
                {
                    title: '哼，不要我+1（在游乐场）',
                    img: require('@/assets/img/wuyi/two2.jpg'),
                    active:false,
                },
                {
                    title: '不要我，那就在旋转木马上亲你',
                    img: require('@/assets/img/wuyi/kiss2.jpg'),
                    active:false,
                },
                {
                    title: '被搬砖耽误的美少女',
                    img: require('@/assets/img/wuyi/kuangche.jpg'),
                    active:false,
                },
                {
                    title: '我们走，不许愿',
                    img: require('@/assets/img/wuyi/dashu.jpg'),
                    active:false,
                },
                {
                    title: '然后在摩天轮上亲你',
                    img: require('@/assets/img/wuyi/kiss3.jpg'),
                    active:false,
                },
                {
                    title: '电竞女神（其实还有个经字）',
                    img: require('@/assets/img/wuyi/youxi.jpg'),
                    active:false,
                },
                {
                    title: '爬山王（在鼓山）',
                    img: require('@/assets/img/wuyi/pashan.jpg'),
                    active:false,
                },
                {
                    title: '黄碧苗走了，吃个烧烤庆祝一下',
                    img: require('@/assets/img/wuyi/shaokao.jpg'),
                    active:false,
                },
                {
                    title: '再吃个大餐庆祝',
                    img: require('@/assets/img/wuyi/zizhu.jpg'),
                    active:false,
                },
            ]
        }
    },
    mounted() {

    },
    methods: {
    
    }
}
</script>