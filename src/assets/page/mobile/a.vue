<template>
    <div class="resume-page">
        <div style="width: 100%;" ref="resumePage">
            <!-- 顶部 -->
            <div class="header-container d_jump">
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
                            <img src="../../images/resume/wechat.png" alt="">
                            <img src="../../images/resume/qq.png" alt="">
                            <a href="https://mjiacc.cn/">
                                <img src="../../images/resume/web.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 个人信息部分 -->
            <div class="block-box person-info-container d_jump">
                <div class="">
                    <p class="block-name">个人信息</p>
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
            <!-- 个人技能 -->
            <div class="block-box person-skill-container d_jump">
                <div style="width: 100%;">
                    <p class="block-name">个人技能</p>
                    <div class="skills-box">
                        <div v-for="(item, index) in skills" :key="index" class="skill-route">
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
            <!-- 工作经历 -->
            <div class="block-box work-experience d_jump">
                <div style="width:100%;">
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
            <!-- 项目经验 -->
            <div class="block-box item-experience d_jump">
                <div style="width: 100%;">
                    <p class="block-name">项目经验</p>
                    <div class="experience-list">
                        <div class="item-box" v-for="(item, index) in experience" :key="index">
                            <div class="img-box" :style="{'background-image': 'url('+item.img+')'}"></div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
                        <img src="../../images/resume/wechat.png" alt="">
                        <img src="../../images/resume/qq.png" alt="">
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
            <div class="block-box person-info-container d_jump">
                <div class="">
                    <p class="block-name">个人信息</p>
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
        <div class="block-box person-skill-container d_jump">
            <div style="width: 100%;">
                <p class="block-name">个人技能</p>
                <div class="skills-box">
                    <div v-for="(item, index) in skills" :key="index" class="skill-route">
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
        <div class="block-box work-experience d_jump">
            <div style="width:100%;">
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
        <div class="block-box item-experience d_jump">
            <div style="width: 100%;">
                <p class="block-name">项目经验</p>
                <div class="experience-list">
                    <div class="item-box" v-for="(item, index) in experience" :key="index">
                        <div class="img-box" :style="{'background-image': 'url('+item.img+')'}"></div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </swiper-slide>