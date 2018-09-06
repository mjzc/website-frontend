 <template>
  <div>
    <div class="bg bg-blur"></div>
    <div class="content-front">
        <!-- 适配导航栏 -->
        <div class="responsive-top-nav">
            <div style="display: flex;padding: 10px;">
                <div class="responsive-head" :style="{'background-image': 'url('+ headImg +')'}"></div>
                <div class="responsive-top-nav-name">
                    <p>{{ name }}</p>
                    <p style="font-size: 12px;">{{ intro }}</p>
                </div>
            </div>
            <i class="el-icon-menu" style="color: #fff;" @click="responsiveIconEvent"></i>
        </div>

        <transition name="nav-fade">
            <div class="responsive-left-nav" v-show="responseMenu" @click="responseMenu = false">
                <div class="responsive-left-nav-content">
                    <ul>
                        <li v-for="(item, index) in classList" :key="index">
                            <span @click="getAllArticles(item.id)" :class="{ 'active': item.id == classId }">{{ item.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
        
        <!-- 左边导航栏 -->
      <div class="left-box">
        <div class="head" :style="{'background-image': 'url('+ headImg +')'}"></div>
        <div class="author">
          <p>{{ name }}</p>
          <p class="intro-text">{{ intro }}</p>
        </div>
        <div class="blog-nav">
          <ul>
            <li v-for="(item, index) in classList" :key="index" @click="getAllArticles(item.id)" :class="{ 'active': item.id == classId }">{{ item.name }}</li>
          </ul>
        </div>
      </div>
         <!-- 内容 -->
        <div class="right-box">
            <div class="tag-contets">
                <p class="nav-name">{{ className }}</p>
                <div class="no-content" v-show="articlesList.length == 0">暂无文章</div>
                <div class="content-box" v-for="(item, index) in articlesList" :key="index">
                    <div class="content-main">
                        <p class="article-title">{{ item.title }}</p>
                        <p class="article-intro">简介：{{ item.introductionText }}</p>
                        <p class="article-main-content" v-show="item['content_'+item.id]" v-html="item.contentHtml"></p>
                        <span style="font-size: 12px; color:rgb(255, 65, 88);float: right;" @click="(item['content_'+item.id])  ? (item['content_'+item.id]) = false : (item['content_'+item.id]) = true">
                            {{item['content_'+item.id] ? '收起': '阅读全文'}}
                            <i v-show="!item['content_'+item.id]" class="el-icon-arrow-down"></i>
                            <i v-show="item['content_'+item.id]" class="el-icon-arrow-up"></i>
                        </span>
                    </div>
                    <div class="content-bottom">
                        <p class="date">{{ item.createTime }} || {{ item.className}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>  
</template>

<script>
import {
  getAuthorInfoById,
  getAllArticlesClass,
  getAllArticlesByClassId
} from "../../api/admin";
import { format } from "../../common/js/funMethod";
export default {
  name: "webBlog",
  data: function() {
    return {
      id: "",
      name: "",
      intro: "",
      headImg: "",
      classList: [],
      classId: 0,
      articlesList: [],
      responseMenu: false,
      className: ""
    };
  },
  created: function() {
    this.id = this.$store.state.id;
    this.getUserInfo();
    this.getAllClass();
  },
  methods: {
    getUserInfo: function() {
      var that = this;
      getAuthorInfoById({ id: this.id })
        .then(response => {
          that.name = response.data[0].blogName;
          that.intro = response.data[0].blogIntro;
          that.headImg = response.data[0].blogHeadImg;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getAllClass: function() {
      var that = this;
      getAllArticlesClass()
        .then(response => {
          that.classList = response.data.list;
          that.getAllArticles(that.classList[0].id);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getAllArticles: function(classId) {
      var that = this;
      this.classId = classId;
      getAllArticlesByClassId({ classId: this.classId })
        .then(response => {
          if (response.data.code == 200) {
            response.data.list.forEach(i => {
              i['content_'+ i.id] = false
              i.createTime = format(i.createTime);
            });
            that.className = response.data.className;
            that.articlesList = response.data.list;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    responsiveIconEvent: function () {
          this.responseMenu= this.responseMenu ? false : true
      }
  }
};
</script>

<style>
@import url('https://cdn.bootcss.com/normalize/7.0.0/normalize.min.css');
@import url('https://cdn.bootcss.com/element-ui/2.0.11/theme-chalk/index.css');
@import url("../../styles/mobile/article.css");
.no-content {
    border-radius: 10px;
    margin-bottom: 40px;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
}

.nav-fade-enter-active {
  transition: all .3s cubic-bezier(.55,0,.1,1);
}
.nav-fade-enter, .nav-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

</style>
