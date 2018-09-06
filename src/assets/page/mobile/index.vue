<template>
  <div :style="{'background-image': 'url('+imgUrl+')'}" class="index-page">
    <!-- 遮罩 -->
    <div class="mask-fixedbg-top"></div>
     <!-- 遮罩 -->
    <div class="mask-fixedbg-bottom"></div>
    <!-- 大屏下的导航栏 -->
    <div class="page-top">
        <div class="left-nav">
            <ul>
                <li :class="{'active' : classId == 1}">
                    <a href="JavaScript:;">Home</a>
                </li>
                 <li>
                    <a href="JavaScript:;" @click="$router.push('/web/blog')">Blog</a>
                </li>
                <li>
                    <a href="JavaScript:;" @click="$router.push('/web/music')">Music</a>
                </li>
               <li>
                    <a href="JavaScript:;">Resume</a>
                </li>
                <li>
                    <a href="JavaScript:;">About</a>
                </li>
            </ul>
        </div>
        <div class="right-other">
            <span>
                <i class="el-icon-location"></i>&nbsp;{{ city }}</span>
        </div>
    </div>
    <!-- 适配下的顶部导航栏 -->
    <div class="responsive-nav">
        <span class="hiddend-nav-btn" @click="showResponsiveMenu = true">
            <i class="el-icon-menu"></i>
        </span>

        <div class="right-other">
            <span>
                <i class="el-icon-location"></i>&nbsp;{{ city }}</span>
        </div>
    </div>
    <!-- 适配隐藏导航栏 -->
    <div class="responsive-left-nav" v-show="showResponsiveMenu">
        <div class="left-nav-box">
            <ul style="list-style: none;">
                <li>
                    <a href="JavaScript:;" :class="{ 'active' : classId == 1}">Home</a>
                </li>
                <li>
                    <a @click="$router.push('/web/blog')">Blog</a>
                </li>
                <li>
                    <a href="JavaScript:;" @click="$router.push('/web/music')">Music</a>
                </li>
                <li>
                    <a href="JavaScript:;">Resume</a>
                </li>
                
                <li>
                    <a href="JavaScript:;">About</a>
                </li>
            </ul>
        </div>
    </div>
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
        <i class="el-icon-refresh"></i>
        <i class="el-icon-arrow-right" :class="{ 'end': (index+1) >= counts}" @click="(index+1) < counts && index++"></i>
    </div>
  </div>
  
</template>
<script src="https://cdn.bootcss.com/element-ui/2.0.11/index.js"></script>

<script>
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
      counts: 0,
      showResponsiveMenu: false,
      classId: 1,
      city: ""
    };
  },
  computed: {
    imgUrl () {
      return this.soupList[this.index].imgLink
    }
  },
  created: function() {
    this.getSoupList();
  },
  mounted: function () {
      var that = this
      // 百度地图API功能
	// var map = new BMap.Map("allmap");
	// var point = new BMap.Point(116.331398,39.897445);
	// map.centerAndZoom(point,12);

	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			// var mk = new BMap.Marker(r.point);
			// map.addOverlay(mk);
            // map.panTo(r.point);
            that.city = r.address.city
			// alert('您的位置：'+r.point.lng+','+r.point.lat);
		}
		else {
			alert('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true})
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
