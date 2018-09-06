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
    <script id="container" name="content" type="text/plain">
    </script>
    <div class="group-btn" style="text-align: right;">
      <button class="refresh-btn" @click="editArticle">修改</button>
    </div>
</div>
</template> 

<script>
import 'Static/js/utf8-php/ueditor.config'
import "Static/js/utf8-php/ueditor.all.js";
import "Static/js/utf8-php/lang/zh-cn/zh-cn.js";
import "Static/js/utf8-php/ueditor.parse.js";
import topHead from "@/components/admin/topHead.vue";
import leftNav from "@/components/admin/leftNav.vue";

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
      ue: "",
      title: "",
      addHtml: "",
      classId: "",
      classList: [],
      id: "",
      introductionText: ""
    };
  },
  components: {
    "top-mine-head": topHead,
    "left-mine-nav": leftNav
  },
  mounted() {
    this.ue = UE.getEditor("container", {
      initialFrameWidth: "100%",
      initialFrameHeight: 350
    });
  },
  created: function() {
    this.id = this.$route.query.id;
    if (this.id != undefined && this.id != "") {
      this.getClass();
      this.getArticleContent();
    }
  },
  methods: {
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
          that.ue.ready(function() {
            that.ue.setContent(response.data.result.contentHtml);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    //  修改文章
    editArticle: function() {
      var that = this;
      this.ue.ready(function() {
        that.addHtml = that.ue.getContent();
      });
      if (this.addHtml == "") {
        alert("请输入文章内容");
        return;
      }

      var data = {
        id: this.id,
        title: this.title,
        contentHtml: this.addHtml,
        classId: this.classId,
        introductionText: this.introductionText
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

