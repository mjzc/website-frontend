<template>
    <div>
        <!-- 大屏下的导航栏 -->
        <div class="page-top">
            <div class="left-nav">
                <ul>
                    <router-link to="/web/index" tag="li" active-class="active">
                        <a href="JavaScript:;">Home</a>
                    </router-link>
                    <router-link to="/web/blog" tag="li" active-class="active">
                        <a href="JavaScript:;">Blog</a>
                    </router-link>
                    <!-- <router-link to="/web/music" tag="li" active-class="active">
                        <a href="JavaScript:;">Music</a>
                    </router-link> -->
                    <router-link to="/resume" tag="li" active-class="active">
                        <a href="JavaScript:;">Resume</a>
                    </router-link>
                    <!-- <router-link to="/web/index" tag="li" active-class="active">
                        <a href="JavaScript:;">About</a>
                    </router-link> -->
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
    <div class="responsive-left-nav" v-show="showResponsiveMenu" @click="showResponsiveMenu = false">
        <div class="left-nav-box">
            <ul style="list-style: none;">
                <router-link to="/web/index" tag="li" active-class="active">
                    <a href="JavaScript:;">Home</a>
                </router-link>
                <router-link to="/web/blog" tag="li" active-class="active">
                    <a href="JavaScript:;">Blog</a>
                </router-link>
                <!-- <router-link to="/web/music" tag="li" active-class="active">
                    <a href="JavaScript:;">Music</a>
                </router-link> -->
                <router-link to="/resume" tag="li" active-class="active">
                    <a href="JavaScript:;">Resume</a>
                </router-link>
                <!-- <router-link to="/web/index" tag="li" active-class="active">
                    <a href="JavaScript:;">About</a>
                </router-link> -->
            </ul>
        </div>
    </div>
    </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=q94UM9A7kt6T105bvtoPWV5zzdiqWlGu"></script>
<script>
export default {
  data () {
    return {
      showResponsiveMenu: false,
      classId: 1,
      city: ''
    }
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
}
</script>

<style>

</style>
