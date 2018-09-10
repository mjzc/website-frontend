<template>
    <div class="content">
        <div class="text-content">
            <div class="bg-img-content">
              <label for="">歌手头像：</label>
              <div class="bg-img-box" :style="{'background-image' : 'url('+ uploadImgUrl +')'}">
                <img v-show="isShowAdd" style="padding-top: 25px;" src="../../../images/add-img1.png" alt="">
                <input class="upload-input" type="file" @change="chooseImg">
              </div>
            </div>
            <label for="">名称：</label>
            <input type="text" v-model="name" class="input-box">
        </div>
        <div class="group-btn" style="text-align: right;">
            <button class="refresh-btn" @click="sumbitSinger">保存</button>
        </div>
    </div>
</template> 

<script>
import { addSingerAPI } from "@/api/admin";

export default {
  name: "addSinger",
  data() {
    return {
      name: "",
      uploadImgUrl: '',
      isShowAdd: true
    };
  },
  created () {
    
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
    // 提交
    sumbitSinger: function() {
      var that = this;
      if (this.singer_name == "") {
        alert("请输入名称");
        return;
      } else if (this.uploadImgUrl == '') {
        alert('请上传图片')
        return;
      }
      var data = {
        singer_name: that.name,
        head_img: that.uploadImgUrl
      };
      addSingerAPI(data)
        .then(response => {
          if (response.data.code == 200) {
            alert("添加成功");
            that.$router.push("/web_admin/singer_manage");
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
  width: 100px;
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
