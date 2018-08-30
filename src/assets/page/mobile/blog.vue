 <template>
  <!-- 导航栏 -->
    <div class="blog-page">
        <div class="left-box">
            <div class="head" :style="{'background-image': 'url('+ headImg +')'}"></div>
            <div class="author">
                <p>{{ name }}</p>
                <p>{{ intro }}</p>
            </div>
            <div class="blog-nav">
                <ul>
                    <li v-for="item in classList" :key="item" @click="getAllArticles(item.id)" :class="{ 'active': item.id == classId }">{{ item.name }}</li>
                </ul>
            </div>
        </div>
        <!-- 适配导航栏 -->
        <div class="responsive-top-nav">
            <div style="display: flex;padding: 20px;">
                <div class="responsive-head" :style="{'background-image': 'url('+ headImg +')'}"></div>
                <div>
                    <p>{{ name }}</p>
                    <p>{{ intro }}</p>
                </div>
            </div>
            <i class="el-icon-menu" @click="responsiveIconEvent"></i>
            <!-- <i class="nav-btn el-icon-menu" ></i> -->
        </div>

        <div class="responsive-left-nav" v-show="responseMenu">
            <div class="responsive-left-nav-content" @click="responseMenu = false">
                <ul>
                    <li v-for="item in classList" :key="item" @click="getAllArticles(item.id)">
                        <span :class="{ 'active': item.id == classId }">{{ item.name }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 内容 -->
        <div class="right-box">
            <div class="tag-contets">
                <p class="nav-name">{{ className }}</p>
                <div class="no-content" v-show="articlesList.length == 0">暂无文章</div>
                <div class="content-box" v-for="item in articlesList" :key="item">
                    <div class="content-main">
                        <p class="article-title">{{ item.title }}</p>
                        <p class="article-intro">简介：{{ item.introductionText }}</p>
                        <p class="article-main-content" v-show="item['content_'+item.id]" v-html="item.contentHtml"></p>
                    </div>
                    <div class="content-bottom">
                        <p class="date">{{ item.createTime }} || {{ item.className}}</p>
                        <span @click="(item['content_'+item.id])  ? (item['content_'+item.id]) = false : (item['content_'+item.id]) = true">
                            <a href="JavaScript:;">{{item['content_'+item.id] ? '我暂不要阅读': '我要阅读'}}</a>
                        </span>
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
    background: #eee;
    border-radius: 10px;
    margin-bottom: 40px;
    height: 30px;
    text-align: center;
    line-height: 30px;
}
</style>
