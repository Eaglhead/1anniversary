<template>
    <photo-view :title="'日常'" 
    :second_title="' '"
    :message="message"/>
</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import photo_view from '@/components/photo_view';
export default {
    name: 'fourteenth',
    components: {
        'photo-view': photo_view,
    },
    data() {
        return {
            message:[
                {
                    title: '没想到，这几个节假日让我拥有了这么多车票',
                    img: require('@/assets/img/richang/chepiao.jpg'),
                    active:true,
                },
                {
                    title: '然后陪你上了好多天的课？哈哈哈',
                    img:  '',
                    active:false,
                },
                {
                    title: '运气很好的抢到了林俊杰的演唱会门票',
                    img: require('@/assets/img/richang/yanchanghui.jpg'),
                    active:false,
                },
                {
                    title: '跟你一起过圣诞',
                    img: require('@/assets/img/richang/shengdan1.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/richang/shengdan2.jpg'),
                    active:false,
                },
                {
                    title: ' ',
                    img: require('@/assets/img/richang/shengdan3.jpg'),
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