<template> 
  <div class="content">
    <div class="text-content">
      <label for="">文章表题：</label>
      <input type="text" v-model="title" class="input-box">
      <div class="introdution-box">
        <label for="">文章简介：</label>
        <textarea class="introdution-input" name="" id="" cols="30" rows="3" v-model="introductionText"></textarea>
      </div>
      <div style="margin-top: 30px;">
        <label for="">文章分类：</label>
        <select class="input-box" v-model="classId">
          <option v-for="item in classList" :key="item" v-bind:value="item.id">{{ item.name }}</option>
        </select>

      </div>
    </div>
    <!-- markdown -->
        <div>
          <p>使用Markdown编辑内容</p>
          <div class="edit-md-box">
            <textarea class="md-box" v-model='content'></textarea>
            <div id="show-content"></div>
          </div>
        </div>
    <div class="group-btn" style="text-align: right;">
      <button class="refresh-btn" @click="editArticle">修改</button>
    </div>
</div>
</template> 

<script>
import topHead from "@/components/admin/topHead.vue";
import leftNav from "@/components/admin/leftNav.vue";
import showdown from 'showdown'
import {
  addArticle,
  getAllArticlesClass,
  getArticleById,
  editArticleById
} from "@/api/admin";

export default {
  name: "editArticles",
  data() {
    return {
      title: "",
      classId: "",
      classList: [],
      introductionText: "",
      content: '',
      converter: null,
      html: ''
    };
  },
  watch: {
    'content':'contentChanged'
  },
  components: {
    "top-mine-head": topHead,
    "left-mine-nav": leftNav
  },
  mounted() {
   this.init()
  },
  created: function() {
    this.id = this.$route.query.id;
    if (this.id != undefined && this.id != "") {
      this.getClass();
      this.getArticleContent();
    }
  },
  methods: {
    contentChanged(){
        this.html = this.converter.makeHtml(this.content)
        document.getElementById('show-content').innerHTML = this.html
    },
    init:function () {
      var converter = new showdown.Converter()
      this.converter = converter
    },
    //   获取所有文章分类
    getClass: function() {
      var that = this;
      getAllArticlesClass()
        .then(response => {
          if (response.data.code == 200) {
            that.classList = response.data.list;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 获取文章内容
    getArticleContent: function() {
      var that = this;
      getArticleById({ id: this.id })
        .then(response => {
          that.title = response.data.result.title;
          that.classId = response.data.result.belongClass;
          that.introductionText = response.data.result.introductionText;
          that.content = response.data.result.contentHtml
        })
        .catch(error => {
          console.log(error);
        });
    },
    //  修改文章
    editArticle: function() {
      var that = this;
      if (
        this.content == "" ||
        this.title == "" ||
        this.introductionText == "" ||
        this.classId == ""
      ) {
        alert("请输入内容");
        return;
      }
      var data = {
        id: this.id,
        title: that.title,
        contentHtml: that.content,
        classId: that.classId,
        introductionText: that.introductionText
      };
      editArticleById(data)
        .then(response => {
          if (response.data.code == 200) {
            alert("修改成功");
            that.$router.push("/web_admin/article_manage");
          } else {
            alert(response.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script> 
 <style>
 .edit-md-box {
  display: flex;
  justify-content: space-around;
}
.md-box{
  border: 1px solid #eee;
  flex: 0.5;
  margin-right: 20px;
  padding: 10px;
  min-height: 400px;
}
#show-content{
  border: 1px solid #eee;
  flex: 0.5;
  padding: 10px;
  min-height: 400px;
}

 </style>
