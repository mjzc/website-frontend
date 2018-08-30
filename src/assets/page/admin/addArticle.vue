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
      <script id="container" name="content" type="text/plain">
            文章内容写这里～
      </script>
      <div class="group-btn" style="text-align: right;">
        <button class="refresh-btn" @click="sumbitArticle">发布</button>
      </div>
  </div>
</template> 

<script>
import "../../../../static/js/utf8-php/ueditor.config";
import "../../../../static/js/utf8-php/ueditor.all.js";
import "../../../../static/js/utf8-php/lang/zh-cn/zh-cn.js";
import "../../../../static/js/utf8-php/ueditor.parse.js";
import topHead from "../../components/admin/topHead.vue";
import leftNav from "../../components/admin/leftNav.vue";

import { addArticle, getAllArticlesClass } from "../../api/admin";

export default {
  name: "addArticles",
  data() {
    return {
      ue: "",
      title: "",
      addHtml: "",
      classId: "",
      classList: [],
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
    var lang = this.ue.getOpt("lang"); //默认返回：zh-cn
  },
  created: function() {
    this.getClass();
  },
  methods: {
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
      this.ue.ready(function() {
        that.addHtml = that.ue.getContent();
      });
      if (
        this.addHtml == "" ||
        this.title == "" ||
        this.introductionText == "" ||
        this.classId == ""
      ) {
        alert("请输入内容");
        return;
      }
      var data = {
        title: that.title,
        content: that.addHtml,
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

