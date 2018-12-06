<template>
  <div class="content_contain">
    <div class="first_section">
      <div class="recommend_content">
        <div class="recommend_title">
          Today's Recommend
        </div>
        <div class="todays_block">
          <div class="todays_cover">
            <div class="myswiper">
              <swiper ref="myswiper" :options="swiperOption">
                <swiper-slide v-for="(item, index) in recommendData" :key="index">
                  <img :src="item.imgUrl" alt="">
                </swiper-slide>
              </swiper>
              <div class="swiper-pagination"  slot="pagination"></div>
            </div>
            <div class="article_discript_contain" v-show="showState.realIndex == index" v-for="(item, index) in recommendData" :key="index">
              <p class="article_title">{{item.title}}</p>
              <p class="article_content">
                {{item.discript}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend_side">
        <div class="side_title">
          Histry Recommend
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'
import { Getter, Mutation, Action } from 'vuex-class'
@Component
export default class Content extends Vue {
  title: string = '内容'
  showState: object = {
    realIndex: 0
  }
  swiperOption: object = {
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: false,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      init: () => {
        // this.realIndex === 0 && (that.homeState = 0)
      },
      slideChange: () => {
        let realIndex: any = this.$refs.myswiper
        let showState: any = this.showState
        showState.realIndex = realIndex.swiper.realIndex
      }
    }
  }
  recommendData: Array<object> = []

  @Action GET_ARTICLE: any

  async mounted () {
    this.getArticles()
  }

  async getArticles () {
    let res = await this.GET_ARTICLE()
    if (res.code === 200) {
      this.recommendData = res.data
    }
  }
}
</script>

<style lang="scss">
@mixin title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.content_contain {
  padding-top: 500px;
  margin: 0 auto;
  width: 1280px;
  padding-bottom: 100px;
  .first_section {
    display: flex;
    .recommend_content {
      margin-top: 50px;
      width: 800px;
      .recommend_title {
        @include title
      }
      .todays_block{
        .todays_cover {
          .myswiper {
            position: relative;
            img {
              width: 100%;
              height: 450px;
            }
          }
          .article_discript_contain {
            margin: 20px 0;
            .article_title {
              margin-bottom: 5px;
              font-size: 30px;
              font-weight: bold;
            }
            .article_content {
              font-size: 18px;
              margin-top: 10px;
              // overflow : hidden;
              // text-overflow: ellipsis;
              // display: -webkit-box;
              // -webkit-line-clamp: 2;
              // -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
    .recommend_side{
      margin-top: 50px;
      margin-left: 80px;
      width: 400px;
      .side_title {
        @include title
      }
    }
  }
}

.swiper-container {
  width: 800px;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
}
.swiper-pagination {
  bottom: 10px;
  left: 50%;
  width: 106px;
  margin-left: -55px;
}
.swiper-container-vertical > .swiper-pagination-bullets {
  width: 2vw;
}
.swiper-pagination-bullet {
  width: 30px;
  background-color: #fff;
  border-radius: 5px;
  margin-left: 5px;
  outline: none;
}
.swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>
