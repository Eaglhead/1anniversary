<template>
    <div class="end">
        <div class="box" ref="box">
            <ul class="minbox">
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
            </ul>
            <ol class="maxbox">
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
                <li><img src="../assets/万家灯火.jpg" alt=""></li>
            </ol>
        </div>
        <div class="tips" :class="{'tips2':show2}" v-if="show">点击旋转魔方展开相册，收起则点其他地方</div>
    </div>
</template>

<style scoped>
.end{
	width: 100%;
	height: 100%;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size:100% 100%;
	position: absolute;
	margin-left: auto;
	margin-right: auto;
    display: flex;
}
.tips{
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    font-size: 0.32rem;
    color: #ffffff;
    z-index: 1;
    transition: all 3s linear;
}
.tips2{
    opacity: 0;
}
li{
	list-style: none;
}
img{
    height: 100%;
    width: 100%;
}
.box{
	width:4rem;
	height:4rem;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size:100% 100%;
	position: absolute;
    margin-left: 1.75rem;
    margin-top: 2.6rem;
	transform-style:preserve-3d;
	transform:rotateX(13deg);
	animation:move 7s linear infinite;
	-webkit-transform-style:preserve-3d;
	-webkit-transform:rotateX(13deg);
	-webkit-animation:move 7s linear infinite;
}
.minbox{
	position: absolute;
	left:1rem;
	top:0.6rem;
	transform-style:preserve-3d;
	-webkit-transform-style:preserve-3d;
}
.minbox li{
	width:1.6rem;
	height:1.6rem;
    opacity: 0.3;
    transition:all 1s ease;
	-webkit-transition:all 1s ease;
	position: absolute;
	left:0;
	top:0;
}
.minbox li:nth-child(1){
	transform:translateZ(1rem);
	-webkit-transform:translateZ(1rem);
}
.minbox li:nth-child(2){
	transform:rotateX(180deg) rotateZ(180deg) translateZ(1rem);
	-webkit-transform:rotateX(180deg) rotateZ(180deg) translateZ(1rem);
}
.minbox li:nth-child(3){
	transform:rotateX(-90deg) translateZ(1rem);
	-webkit-transform:rotateX(-90deg) translateZ(1rem);
}
.minbox li:nth-child(4){
	transform:rotateX(90deg) translateZ(1rem);
	-webkit-transform:rotateX(90deg) translateZ(1rem);
}
.minbox li:nth-child(5){
	transform:rotateY(-90deg) translateZ(1rem);
	-webkit-transform:rotateY(-90deg) translateZ(1rem);
}
.minbox li:nth-child(6){
	transform:rotateY(90deg) translateZ(1rem);
	-webkit-transform:rotateY(90deg) translateZ(1rem);
}
.maxbox{
	position: absolute;
	left: 0;
	top: -0.4rem;
	transform-style: preserve-3d;
	-webkit-transform-style: preserve-3d;
}
.maxbox li{
	width: 3rem;
	height: 3rem;
	position: absolute;
	left: 0;
	top: 0;
	opacity: 0.3;
	transition:all 1s ease;
	-webkit-transition:all 1s ease;
}
.maxbox li:nth-child(1){
	transform:translateX(0.36rem) translateZ(2rem);
	-webkit-transform:translateX(0.36rem) translateZ(2rem);
}
.maxbox li:nth-child(2){
	transform:rotateX(180deg) rotateZ(180deg) translateX(-0.36rem) translateZ(2rem);
	-webkit-transform:rotateX(180deg) rotateZ(180deg) translateX(-0.36rem) translateZ(2rem);
}
.maxbox li:nth-child(3){
	transform:rotateX(-90deg) translateX(0.36rem) translateZ(2rem);
	-webkit-transform:rotateX(-90deg) translateX(0.36rem) translateZ(2rem);
}
.maxbox li:nth-child(4){
	transform:rotateX(90deg) translateX(0.36rem)  translateZ(2rem);
	-webkit-transform:rotateX(90deg) translateX(0.36rem)  translateZ(2rem);
}
.maxbox li:nth-child(5){
	transform:rotateY(-90deg) translateZ(1.4rem);
	-webkit-transform:rotateY(-90deg) translateZ(1.4rem);
}
.maxbox li:nth-child(6){
	transform:rotateY(90deg) translateZ(2.2rem);
	-webkit-transform:rotateY(90deg) translateZ(2.2rem);
}
.box:hover ul li{
	opacity: 0.8;
}
.box:hover ol li{
	width: 6rem;
	height: 6rem;
	opacity: 0.8;
	left: -1.4rem;
	top: -1rem;
}
.box:hover ol li:nth-child(1){
	transform:translateX(0.36rem) translateZ(4rem);
	-webkit-transform:translateX(0.36rem) translateZ(4rem);
}
.box:hover ol li:nth-child(2){
	transform:rotateX(180deg) rotateZ(180deg) translateX(-0.36rem) translateZ(4rem);
	-webkit-transform:rotateX(180deg) rotateZ(180deg) translateX(-0.36rem) translateZ(4rem);
}
.box:hover ol li:nth-child(3){
	transform:rotateX(-90deg) translateX(0.36rem) translateZ(4rem);
	-webkit-transform:rotateX(-90deg) translateX(0.36rem) translateZ(4rem);
}
.box:hover ol li:nth-child(4){
	transform:rotateX(90deg) translateX(0.36rem) translateZ(4rem);
	-webkit-transform:rotateX(90deg) translateX(0.36rem) translateZ(4rem);
}
.box:hover ol li:nth-child(5){
	transform:rotateY(-90deg) translateZ(3.6rem);
	-webkit-transform:rotateY(-90deg) translateZ(3.6rem);
}
.box:hover ol li:nth-child(6){
	transform:rotateY(90deg) translateZ(4.2rem);
	-webkit-transform:rotateY(90deg) translateZ(4.2rem);
}
@keyframes move{
	0%{
		transform: rotateX(13deg) rotateY(0deg);
		-webkit-transform: rotateX(13deg) rotateY(0deg);
	}
	100%{
		transform:rotateX(13deg) rotateY(360deg);
		-webkit-transform:rotateX(13deg) rotateY(360deg);
	}
}
</style>

<script>
export default {
    name: 'end',
    data() {
        return {
            show:true,
            show2:false,
        }  
    },
    mounted(){
        setTimeout(() => {
            this.show2 = true;
            setTimeout(() => {
                this.show = false;
            },3000);
        },3000);
     
    }
}
</script>