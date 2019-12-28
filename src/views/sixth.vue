<template>
    <photo-view :title="'春节假期'" 
    :second_title="'然后当然是带你到处溜达啦'"
    :message="message"/>
</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import photo_view from '@/components/photo_view';
export default {
    name: 'sixth',
    components: {
        'photo-view': photo_view,
    },
    data() {
        return {
            message:[
                {
                    title: '冲冲冲，骑上我心爱的小电驴',
                    img: require('@/assets/img/chunjie/bike.jpg'),
                    active:true,
                },
                {
                    title: 'ktv大厅的墙真好看',
                    img: require('@/assets/img/chunjie/ktv_photo.jpg'),
                    active:false,
                },
                {
                    title: '唱歌女神（嗯~，经）',
                    img: require('@/assets/img/chunjie/sing.jpg'),
                    active:false,
                },
                {
                    title: 'ktv里比手白',
                    img: require('@/assets/img/chunjie/hand.jpg'),
                    active:false,
                },
                {
                    title: '提前去万绿园逛花灯(今年继续)',
                    img: require('@/assets/img/chunjie/yuanxiao.jpg'),
                    active:false,
                },
                {
                    title: '白沙门等日落（悄咪咪偷拍）',
                    img: require('@/assets/img/chunjie/baishamen.jpg'),
                    active:false,
                },
                {
                    title: '还有泰龙城海大吃小吃',
                    img: require('@/assets/img/chunjie/all.jpg'),
                    active:false,
                },
                {
                    title: '一个春节假期，我们好像逛了半个海口',
                    img: '',
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