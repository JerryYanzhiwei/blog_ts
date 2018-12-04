<template>
  <div ref="mask" class="welcome_contain">
    <div class="text"></div>
  </div>
</template>

<script>
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'
@Component
export default class Welcome extends Vue {
  async mounted () {
    setTimeout(() => {
      this.$refs.mask.style.display = 'none'
    }, 7500)
  }
}
</script>

<style lang="scss" scoped>
.welcome_contain{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  // background: linear-gradient(to right, #001223 0%, #16314c 100%) transparent;
  background-image: url(../../../../assets/img/desk.jpg);
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 2s;
  -webkit-animation: scaleShow 6s linear 2s 1 alternate;
  animation: scaleShow 6s linear 2s 1 alternate;
  // opacity: 0;
  // 不需动画时...注释
  display: none;
  .text {
    width: 820px;
    height: 96px;
    -webkit-animation: move 4s infinite;
    animation: move 4s infinite;
    background-image: url(../../../../assets/img/text_bg5.jpg);
    background-position: 0 0;
    background-size: cover;
    -webkit-mask: url(../../../../assets/img/text_bg4.png);
    mask: url(../../../../assets/img/text_bg4.png);
    -webkit-mask-size: cover;
    mask-size: cover;
    position: relative;
    z-index: 999
  }
}
@-webkit-keyframes move {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 200px 0;
  }
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 200px 0;
  }
}

@-webkit-keyframes scaleShow {
  0% {
    display: block;
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(.9);
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}

@keyframes scaleShow {
  0% {
    display: block;
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(.9);
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
</style>
