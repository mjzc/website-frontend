<template>
  <div style="width:85%; margin: 30px auto;">
    <div class="from-row-box">
        <label for="">昵称：</label>
        <input type="text" class="input-box" placeholder="" v-model="blogName">
    </div>
    <div class="from-row-box">
        <label for="">简介：</label>
        <input type="text" class="input-box" placeholder="" v-model="blogIntro">
    </div>
   
    <el-upload
    method="post"
    class="avatar-uploader"
    :action="uploadImgUrl"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

    <div style="text-align: right;">
        <button class="user-btn" @click="editUserInfo">修改</button>
    </div>
</div>
</template>

<script>
import {
  getAuthorInfoById,
  editAuthorInfoById,
  uoloadBolgHeadImg
} from "@/api/admin";
export default {
  name: "userManage",
  data: function() {
    return {
      id: "",
      blogName: "",
      blogIntro: "",
      imageUrl: "",
      fileName: '',
      uploadImgUrl: ''
    };
  },
  created: function() {
    this.uploadImgUrl = process.env.NODE_ENV == 'development' ? process.env.BASE_API + '/activity/web_uploadBlogHeadImg' : process.env.BASE_API + '/web_uploadBlogHeadImg'
    this.id = this.$store.state.id;
    this.getAuthorInfo();
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.fileName = file.name
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error("上传头像图片只能是 JPG 或者 PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isPNG || isJPG && isLt2M;
    },
    // 获取用户设置的信息
    getAuthorInfo: function() {
      var that = this;
      getAuthorInfoById({ id: this.id })
        .then(response => {
          that.blogName = response.data[0].blogName;
          that.blogIntro = response.data[0].blogIntro;
          that.imageUrl = response.data[0].blogHeadImg;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 修改用户信息
    editUserInfo: function() {

      if (this.blogName == "") {
        alert("内容不完整！");
        return;
      }

      var data = {
        id: this.id,
        blogName: this.blogName,
        blogIntro: this.blogIntro,
        blogHeadImg: this.fileName
      };
      editAuthorInfoById(data)
        .then(response => {
          if (response.data.code == 20000) {
            alert("success");
            this.$router.go(0)
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.from-row-box {
  display: flex;
  display: -webkit-flex;
  justify-content: start;
  text-align: center;
  align-items: center;
  margin-bottom: 20px;
}
.from-input {
  border: 1px solid #eee !important;
  width: 70%;
  padding: 10px !important;
  margin: 0 20px !important;
}
.from-file-input {
  line-height: 20px !important;
  margin: 0 20px !important;
  opacity: 0;
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  position: relative;
  z-index: 2;
}
.from-img-box {
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  position: relative;
  left: -120px;
  z-index: 1;
}
.blog-head-img {
  /* background-image: url("../../images/1.png"); */
  background-size: cover;
  width: 100px;
  height: 100px;
}
.user-btn {
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  border: 0;
  width: 70px;
  background: #5eb95e;
}
</style>

