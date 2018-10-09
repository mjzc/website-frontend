<template> 
    <div class="content">
      <div class="text-content">
        <div>
          <label for="">文章表题：</label>
          <input type="text" v-model="title" class="input-box">
        </div>
        <div class="introdution-box">
          <label for="">文章简介：</label>
          <textarea class="introdution-input" name="" id="" cols="30" rows="3" v-model="introductionText"></textarea>
        </div>
        <div style="margin-top: 30px;">
          <label for="">文章分类：</label>
          <!-- <input type="text" > -->
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
        <button class="refresh-btn" @click="sumbitArticle">发布</button>
      </div>
  </div>
</template> 

<script>
import topHead from "@/components/admin/topHead.vue";
import leftNav from "@/components/admin/leftNav.vue";
import showdown from 'showdown'
import { addArticle, getAllArticlesClass } from "@/api/admin";

export default {
  name: "addArticles",
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
  mounted() {
    this.init()
  },
  components: {
    "top-mine-head": topHead,
    "left-mine-nav": leftNav
  },
  created: function() {
    this.getClass();
  },
  methods: {
    init:function () {
      var converter = new showdown.Converter()
      this.converter = converter
    },
    contentChanged(){
        this.html = this.converter.makeHtml(this.content)
        document.getElementById('show-content').innerHTML = this.html
    },
    // 获取所有的文章分类
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
    // 添加文章
    sumbitArticle: function() {
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
        title: that.title,
        content: that.content,
        classId: that.classId,
        introductionText: that.introductionText
      };
      addArticle(data)
        .then(response => {
          if (response.data.code == 200) {
            alert("添加成功");
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
