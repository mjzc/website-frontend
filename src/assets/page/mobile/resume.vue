<template>
  <div class="page">
      <swiper :options="swiperOption" class="container adapter-pc" ref="mySwiper">
        <swiper-slide class="slide">
            <!-- 顶部 -->
            <div class="header-container">
                <div class="overlay">
                    <div class="contain-box">
                        <div class="head-img"></div>
                        <p class="header-name-box">
                            <span class="name"> Li Man Jia</span>
                        </p>
                        <p class="motto">Every day to be a litte better</p>
                        <div class="icon-box">
                            <a href="https://github.com/mjzc">
                                <img src="../../images/resume/github.png" alt="">
                            </a>
                            <img src="../../images/resume/wechat.png" alt="jiafrist">
                            <img src="../../images/resume/qq.png" alt="853569768">
                            <a href="https://mjiacc.cn/">
                                <img src="../../images/resume/web.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <!-- 个人信息部分 -->
            <div class="block-box person-info-container">
                <!-- <div class="overMask" style="color: #fff;"> -->
                <div class="">
                    <p class="block-name" style="">个人信息</p>
                    <div class="person-box">
                        <div class="information-box">
                            <ul>
                                <li>
                                    <span class="th-name">Name:</span>
                                    <span class="content">李漫嘉</span>
                                </li>
                                <li>
                                    <span class="th-name">Email:</span>
                                    <span class="content">853569768@qq.com</span>
                                </li>
                                <li>
                                    <span class="th-name">Website:</span>
                                    <span class="content"><a href="https://mjiacc.cn/">https://mjiacc.cn</a></span>
                                </li>
                                <li>
                                    <span class="th-name">Phone:</span>
                                    <span class="content">159157XXXXX</span>
                                </li>
                                <li>
                                    <span class="th-name">Birthday:</span>
                                    <span class="content">1996.12.08</span>
                                </li>
                                <li>
                                    <span class="th-name">Address:</span>
                                    <span class="content">中国·广东·广州</span>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="introduction-box">
                            <p>
                                本人熟悉掌握HTML5和CSS3，能够熟练还原设计图，并处理浏览器兼容问题，以及熟悉使用CSS预处理语言Sass，来提升加强CSS，熟悉JavaScript以及精通Vue、Jquery框架，能熟练的使用Vue全家桶，还掌握PHP后台语言和Smyfony框架以及twig模版引擎，对nodeJS以及express开发框架有一定的了解，但不精通，对前端打包工具webpack也有了解，对微信小程序也做过相应的项目，平时空闲的时候也喜欢学习新东西，然后自己做项目巩固一下，前端的工作出于设计与后台的中间领域，起到了承上启下的作用，所以需要懂得东西要多，所以自己每天都在不断的学习，不过更重要的是团队的协作能力了以及沟通能力，希望能将自己会的东西实现的最大的意义。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <!-- 个人技能 -->
            <div class="block-box person-skill-container">
                <div style="width: 100%;" class="">
                    <p class="block-name">个人技能</p>
                    <div class="skills-box">
                        <div v-for="(item, index) in skills" :key="index" class="skill-route circle-box">
                            <span>{{ item.name }}<br>
                            {{ item.value}}%</span>
                            <svg style="transform: rotate(-140deg);" width="220" height="220" viewbox="0 0 220 220">
                                <circle cx="110" cy="110" r="85" stroke-width="5" stroke="#f5f5f5" fill="none"></circle>
                                <circle cx="110" cy="110" r="85" stroke-width="5" stroke="#ff9003" fill="none" :stroke-dasharray="getStorkDash(item.value)"></circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <!-- 工作经历 -->
            <div class="block-box work-experience">
                <div style="width:100%;" class="">
                    <p class="block-name">工作经历</p>
                    <div class="container">
                        <div class="content">
                            <div class="router"></div>
                            <div class="time">
                                <p class="year">2017</p>
                                <p>6月</p>
                            </div>
                            <div class="text-box">
                                <span class="title">珠海为伍互动科技有限公司</span>
                                <p class="position">&lt; 前端工程师 &gt;</p>
                                <p class="intro">负责乐世界以及各大娱乐场所的h5活动。仍在职</p>
                            </div>
                        </div>
                        <div class="content">
                            <div class="router"></div>
                            <div class="time">
                                <p class="year">2016</p>
                                <p>9月</p>
                            </div>
                            <div class="text-box">
                                <span class="title">佛山市华星蚂蚁网络服务有限公司</span>
                                <p class="position">&lt; 软件工程师实习生 &gt;</p>
                                <p class="intro">负责移动端、PC端商城以及吸粉营销h5互动(投票、抽奖)的前端页面和逻辑处理。2017年6月从该公司离职</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <!-- 项目经验 -->
            <div class="block-box item-experience">
                <div style="width: 100%;" class="">
                    <p class="block-name">项目经验</p>
                    <div class="experience-list">
                        <swiper :options="swiperOption2">
                            <swiper-slide v-for="(item, index) in experience" :key="index">
                                <div @click="isHasLink(item)" class="item-box" v-on:mouseenter="hoverIndex = index" v-on:mouseleave="hoverIndex = 0">
                                    <div class="img-box hoverShowdow" :style="{'background-image': 'url('+item.img+')'}"></div>
                                    <div v-show="hoverIndex == index" class="item-mask">
                                        <img :src="item.fadeImg" alt="">
                                    </div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
    <div class="adapter-mobile">
        <!-- 顶部 -->
        <div class="header-box">
            <div class="mask-cheng">
                <div class="contain-box">
                    <div class="head-img"></div>
                    <p class="header-name-box">
                        <span class="mine-name"> Li Man Jia</span>
                    </p>
                    <p class="motto">Every day to be a litte better</p>
                    <div class="icon-box">
                        <a href="https://github.com/mjzc">
                            <img src="../../images/resume/github.png" alt="">
                        </a>
                        <img src="../../images/resume/wechat.png" alt="jiafrist">
                        <img src="../../images/resume/qq.png" alt="853569768">
                        <a href="https://mjiacc.cn/">
                            <img src="../../images/resume/web.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 个人信息 -->
        <div class="mobile-block">
            <span class="title">关于我</span>
                <div class="information-box">
                    <ul>
                        <li>
                            <span class="th-name">Name:</span>
                            <span class="content">李漫嘉</span>
                        </li>
                        <li>
                            <span class="th-name">Email:</span>
                            <span class="content">853569768@qq.com</span>
                        </li>
                        <li>
                            <span class="th-name">Website:</span>
                            <span class="content"><a href="https://mjiacc.cn/">https://mjiacc.cn</a></span>
                        </li>
                        <li>
                            <span class="th-name">Phone:</span>
                            <span class="content">159157XXXXX</span>
                        </li>
                        <li>
                            <span class="th-name">Birthday:</span>
                            <span class="content">1996.12.08</span>
                        </li>
                        <li>
                            <span class="th-name">Address:</span>
                            <span class="content">中国·广东·广州</span>
                        </li>
                        
                    </ul>
                </div>
                <div class="introduction-box">
                    <p>
                        你好！熟悉掌握HTML5和CSS3，能够熟练还原设计图，并处理浏览器兼容问题，以及熟悉使用CSS预处理语言Sass，来提升加强CSS，熟悉JavaScript以及精通Vue、Jquery框架，能熟练的使用Vue全家桶，还掌握PHP后台语言和Smyfony框架以及twig模版引擎，对nodeJS以及express开发框架有一定的了解，但不精通，对前端打包工具webpack也有了解，对微信小程序也做过相应的项目，平时空闲的时候也喜欢学习新东西，然后自己做项目巩固一下，前端的工作出于设计与后台的中间领域，起到了承上启下的作用，所以需要懂得东西要多，所以自己每天都在不断的学习，不过更重要的是团队的协作能力了以及沟通能力，希望能将自己会的东西实现的最大的意义。
                    </p>
                </div>
        </div>
        <!-- 个人技能 -->
        <div class="mobile-block">
            <span class="title">技能掌握</span>
            <div class="skills-container">
                <div v-for="(item, index) in skills" :key="index" class="skill-box">
                    <span class="skill-name">{{ item.name }}</span>
                    <div class="skill-tiao">
                        <div :style="{'width': item.value + '%'}" class="skill">
                            <span class="num">{{ item.value }}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <!-- 个人经历 -->
        <div class="mobile-block">
            <span class="title">个人经历</span>
                <div class="experience-container">
                    <div class="content">
                        <div class="router"></div>
                        <div class="time">
                            <p class="year">2017</p>
                            <p>6月</p>
                        </div>
                        <div class="text-box">
                            <span class="company">珠海为伍互动科技有限公司</span>
                            <p class="position">&lt; 前端工程师 &gt;</p>
                            <p class="intro">负责乐世界以及各大娱乐场所的h5活动。仍在职</p>
                        </div>
                    </div>
                    <div class="content">
                        <div class="router"></div>
                        <div class="time">
                            <p class="year">2016</p>
                            <p>9月</p>
                        </div>
                        <div class="text-box">
                            <span class="company">佛山市华星蚂蚁网络服务有限公司</span>
                            <p class="position">&lt; 软件工程师实习生 &gt;</p>
                            <p class="intro">负责移动端、PC端商城以及吸粉营销h5互动(投票、抽奖)的前端页面和逻辑处理。2017年6月从该公司离职</p>
                        </div>
                    </div>
                </div>
        </div>
         <!-- 项目经验 -->
        <div class="mobile-block">
            <span class="title">项目经验</span>
            <div style="margin: 30px auto;">
                <swiper class="swiper3" :options="swiperOption3">
                    <swiper-slide v-for="(item, index) in experience" :key="index">
                        <div @click="isHasLink(item)" class="item-box">
                            <div class="img-box hoverShowdow" :style="{'background-image': 'url('+item.img+')'}"></div>
                            <div class="item-mask">
                                <img v-show="item.fadeImg != ''" :src="item.fadeImg" alt="">
                                <p style="color: #fff;font-size: 17px;">扫描二维码或者点击进入查看</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination3"  slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      hoverIndex: 0,
      skills: [
        {name: 'HTML5', value: 95},
        {name: 'CSS3', value: 95},
        {name: 'JavaScript', value: 80},
        {name: 'JQuery', value: 90},
        {name: 'Vue', value: 90},
        {name: 'Sass', value: 90},
        {name: 'PHP', value: 60},
        {name: 'MySQL', value:60}
      ],
      experience: [
        {name: 'yiqigo',img: './static/img/resume/3.jpg',fadeImg: './static/img/resume/eq2.png',link: ''},
        {name: 'lsjvip',img: './static/img/resume/2.jpg',fadeImg: './static/img/resume/eq3.jpeg',link: ''},
        {name: 'pandaMusic',img: './static/img/resume/1.jpg',fadeImg: './static/img/resume/eq4.jpg',link: 'https://www.mjiacc.cn/mine-music/'},
        {name: 'maisilin',img: './static/img/resume/5.jpg',fadeImg: './static/img/resume/eq1.png',link: ''},
        {name: 'puzzle',img:'./static/img/resume/4.jpg',fadeImg: '',link: 'http://pg2r2whem.bkt.clouddn.com/18-10-08/puzzle/index.html'},
        {naem: 'moneyFly',img:'./static/img/resume/6.jpg',fadeImg: '',link: 'http://pg2r2whem.bkt.clouddn.com/18-10-08/money-fly/index.html'},
        
      ],
      swiperOption: {
        direction : 'vertical'
      },
      swiperOption3: {
        spaceBetween : 30,
        pagination: {
          el: '.swiper-pagination3'
        }
      },
      swiperOption2: {
        spaceBetween : 10,
        loop: true,
        slidesPerView : 3,
        centeredSlides : true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
   computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(4, 1000, false)
    },
  methods: {
    isHasLink (item) {
        return item.link !== '' ? window.location.href = item.link : ''
    },
    getStorkDash (value) {
      var percent = value / 100;
	  var perimeter = Math.PI * 2 * 85;
      return perimeter * percent + " " + perimeter * (1- percent)
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style>
@import 'swiper/dist/css/swiper.css';
@import url('../../styles/mobile/resume.css');

</style>
