<template>
    <photo-view :title="'清明'" 
    :second_title="'你的一张开往上海的车票，把我堵在了外滩QAQ  嗯~气哦，照片都在你那没给我'"
    :message="message"/>
</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import photo_view from '@/components/photo_view';
export default {
    name: 'seventh',
    components: {
        'photo-view': photo_view,
    },
    data() {
        return {
            message:[
                {
                    title: '',
                    img: require('@/assets/img/qingming/love1.jpg'),
                    active:true,
                },
                {
                    title: '',
                    img: require('@/assets/img/qingming/love2.jpg'),
                    active:false,
                },
                {
                    title: '',
                    img: require('@/assets/img/qingming/love3.jpg'),
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