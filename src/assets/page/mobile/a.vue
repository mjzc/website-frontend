<template>
  <div :style="{'background-image': 'url('+imgUrl+')'}" class="index-page">
    <!-- 遮罩 -->
    <div class="mask-fixedbg-top"></div>
     <!-- 遮罩 -->
    <div class="mask-fixedbg-bottom"></div>
    <nav-head></nav-head>
    <!-- 中间内容 -->
    <div class="index-content-box">
        <div class="">
            <div class="title-box">
                <span class="title">{{ soupList[index].title }}</span>
                <span class="soup-time">{{ soupList[index].createTime}}</span>
            </div>
            <div class="content-text">
                <p>{{ soupList[index].content}}</p>
            </div>
        </div>
    </div>
    <!-- 鸡汤轮播按钮 -->
    <div class="soup-box">
        <i class="el-icon-arrow-left" :class="{ 'end': index == 0}" @click="index > 0 && index--"></i>
        <!-- <i class="el-icon-refresh"></i> -->
        <i class="el-icon-arrow-right" :class="{ 'end': (index+1) >= counts}" @click="(index+1) < counts && index++"></i>
    </div>
  </div>
  
</template>
<script src="https://cdn.bootcss.com/element-ui/2.0.11/index.js"></script>

<script>
import navHead from '../../components/mobile/navHead.vue'
import { getAllSoup } from "../../api/admin";
import { format } from "../../common/js/funMethod";
export default {
  name: "webIndex",
  data: function() {
    return {
      soupList: [
        {
          title: "",
          createTime: "",
          content: "",
        }
      ],
      index: 0,
      counts: 0
      
    };
  },
  components: {
    'nav-head': navHead
  },
  computed: {
    imgUrl () {
      return this.soupList[this.index].imgLink
    }
  },
  created: function() {
    this.getSoupList();
  },
  
  methods: {
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
@import url("https://cdn.bootcss.com/normalize/7.0.0/normalize.min.css");
@import url("https://cdn.bootcss.com/element-ui/2.0.11/theme-chalk/index.css");
@import url("../../styles/mobile/index.css");
.end {
  color: #bbbbbb !important;
}
.index-page {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-size: cover;
}
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
</style>
