<template>
  <el-row class="main_contain">
    <el-col class="header" :span="24">
      <div class="title">
        {{title}}
      </div>
      <div class="tag_contain">
        <a href="/" @mousemove="moveStyle" @mouseout="moveOut">Home</a>
        <a href="/" @mousemove="moveStyle" @mouseout="moveOut">Article</a>
        <a href="/" @mousemove="moveStyle" @mouseout="moveOut">About</a>
      </div>
    </el-col>
    <router-view/>
    <Welcome></Welcome>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'
import { Getter, Mutation, Action } from 'vuex-class'
import Welcome from '@/views/page/home/component/welcome.vue'

@Component({
  components: {
    Welcome
  }
})
export default class Home extends Vue {
  title: string = 'Jerry&Jean\'s Inn.'

  moveOut (e: any) {
    e.target.style.background = 'transparent'
  }
  moveStyle (e: any) {
    // alert(111)
    var width = e.target.offsetWidth
    // var height = e.offsetHeight
    var left = e.target.offsetLeft
    // var topD = e.offsetTop
    var currentLeft = e.clientX
    // var currentTop = event.clientY
    var pre = (currentLeft - left) / width * 100
    e.target.style.backgroundImage = 'linear-gradient(to right, #2B8899 0%, #000 ' + pre + '%)'
  }
}
</script>

<style lang="scss" scoped>
.main_contain{
  width: 100%;
  height: 100%;
  .header{
    // height: 60%;
    height: 500px;
    background-image: url('../../../assets/img/desk.jpg');
    background-size: cover;
    background-attachment: fixed;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 50px;
      font-weight: bold;
      p {
        font-weight: normal;
        font-size: 16px;
        margin-top: 20px;
      }
    }
    .tag_contain {
      margin-top: 30px;
      a {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 80px;
        color: #fff;
        padding: 0 5px;
        border: 1px solid #fff;
        border-radius: 20px;
        margin-left: 30px;
        &:first-child{
          margin: 0;
        }
      }
    }
  }
}
</style>
