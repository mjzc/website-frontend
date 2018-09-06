<template> 
    <div class="content">
        <div class="text-content">
           <div class="bg-img-content">
              <label for="">全屏背景：</label>
              <div class="bg-img-box" :style="{'background-image' : 'url('+ uploadImgUrl +')'}">
                <img v-show="isShowAdd" style="padding-top: 25px;" src="../../../images/add-img1.png" alt="">
                <input class="upload-input" type="file" @change="chooseImg">
              </div>
            </div>
            <label for="">鸡汤标题：</label>
            <input type="text" v-model="title" class="input-box">
            <div class="introdution-box">
            <label for="">文章内容：</label>
            <textarea class="introdution-input" name="" id="" cols="30" rows="5" v-model="soupContent"></textarea>
            </div>
        </div>
        <div class="group-btn" style="text-align: right;">
            <button class="refresh-btn" @click="editSoup">修改</button>
        </div>
    </div>
</template> 

<script>
import { getSoupDetailById, editSoupById } from "@/api/admin";

export default {
  name: "addArticles",
  data() {
    return {
      id: "",
      title: "",
      soupContent: "",
      uploadImgUrl: "",
      isShowAdd: false
    };
  },
  created: function() {
    this.id = this.$route.query.id;
    this.getSoupDetail()
  },
  methods: {
    // 选择相片
    chooseImg (e) {
      var that = this
      var file = e.target.files[0]
       if (!file || !window.FileReader) return
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader()
        // 将图片2将转成 base64 格式
        reader.readAsDataURL(file)
        // 读取成功后的回调
        reader.onloadend = function () {
          let result = this.result
          //  判断图片是否大于200K,是就直接上传，反之压缩图片
          if (this.result.length <= (500 * 1024)) {
            that.uploadImgUrl = result
            that.isShowAdd = false
            console.log(that.uploadImgUrl)
          } else {
            alert('图片过大，请上传小于500k的照片')
          }
        }
      }
    },
    // 获取详情
    getSoupDetail: function() {
      getSoupDetailById({'id':this.id}).then(response => {
        this.uploadImgUrl = response.data.imgLink
        this.title = response.data.title
        this.soupContent = response.data.content
      }).catch(error => {
          console.log(error)
      });
    },
    editSoup: function() {
      var that = this;
      if (this.soupContent == "") {
        alert("请输入文章内容");
        return;
      }
      var data = {
        id: this.id,
        title: this.title,
        content: this.soupContent,
        img: this.uploadImgUrl
      };
      editSoupById(data)
        .then(response => {
          if (response.data.code == 200) {
            alert("修改成功");
            that.$router.push("/web_admin/soup_manage");
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
.bg-img-content {
  display: flex;
  align-items: center;
}
.bg-img-box {
  position: relative;
  border: 2px dashed #cac9c9;
  width: 200px;
  height: 100px;
  display: inline-block;
  margin-bottom: 20px;
  background: #f5f5f5;
  text-align: center;
  background-size: cover;
}
.bg-img-box .upload-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100px;
  opacity: 0;
}
</style>
