<template>
 <div :style="{'background-image': 'url('+imgUrl+')'}" class="index-page">
    <!-- 遮罩 -->
    <div class="mask-fixedbg-top"></div>
     <!-- 遮罩 -->
    <div class="mask-fixedbg-bottom"></div>
    <nav-head></nav-head>
    <!-- 中间内容 -->
    <swiper v-show="soupList.length > 0" ref="mySwiper" @slideChangeTransitionEnd="changeImg" style="display: flex;" class="index-content-box">
        <swiper-slide v-for="(item, index) in soupList" :key="index" class="silder">
            <div class="soup-content-box">
              <div class="title-box">
                <span class="title">{{ item.title }}</span>
                <span class="soup-time">{{ item.createTime}}</span>
              </div>
              <div class="content-text">
                <p>{{ item.content}}</p>
              </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
    <!-- 鸡汤轮播按钮 -->
    <!-- <div class="soup-box">
        <i class="el-icon-arrow-left" :class="{ 'end': index == 0}" @click="index > 0 && index"></i>
        <i class="el-icon-refresh"></i>
        <i class="el-icon-arrow-right" :class="{ 'end': (index+1) >= counts}" @click="(index+1) < counts && index++"></i>
    </div> -->
  </div>
</template>
<!--<script src="https://cdn.bootcss.com/element-ui/2.0.11/index.js"></script> -->

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import navHead from '../../components/mobile/navHead.vue'
import { getAllSoup } from "../../api/admin";
import { format } from "../../common/js/funMethod";
export default {
  data: function() {
    return {
      index: '',
      soupList: [
        {
          title: "",
          createTime: "",
          content: "",
        }
      ],
      index: 0,
      counts: 0,
      swiperOption: {
        spaceBetween : 10
      }
    };
  },
  components: {
    'nav-head': navHead,
    'swiper': swiper,
    'swiper-slide': swiperSlide
  },
  computed: {
    imgUrl () {
      return this.soupList[this.index].imgLink
    },
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created: function() {
    setTimeout(() => {
      this.getSoupList()
    }, 200);
  },
  methods: {
    changeImg: function () {
      if (this.swiper) {
        this.index = this.swiper.activeIndex
      }
    },
    // 获取所有
    getSoupList: function() {
      var that = this;
      getAllSoup()
        .then(response => {
          response.data.list.forEach(function(i) {
            i.createTime = format(i.createTime);
          });
          that.soupList = response.data.list;
          that.counts = parseInt(response.data.counts);
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
};
</script>
<style>
/* @import url("https://cdn.bootcss.com/normalize/7.0.0/normalize.min.css"); */
/* @import url("https://cdn.bootcss.com/element-ui/2.0.11/theme-chalk/index.css"); */
@import 'swiper/dist/css/swiper.css';
@import url("../../styles/mobile/index.css");
.mask-fixedbg-top {
  background: -webkit-linear-gradient(#000000e6, #ffffff00);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 500px;
}
.mask-fixedbg-bottom {
  background: -webkit-linear-gradient(#ffffff00, #000000e6);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 500px;
}
/* @font-face {
  font-family: element-icons;
  src: url('../../fonts/element-icons.woff?t=1472440741') format('woff'), url('../../fonts/element-icons.ttf?t=1472440741') format('truetype');
  font-weight: 400;
  font-style: normal;
} */
.soup-content-box {
  position: absolute;
  left: 0;
  right: 0;
  display: table;
  margin: auto;
  height: auto;
  bottom: 0;
  top: 0;
  width: 100%;
}
</style>
