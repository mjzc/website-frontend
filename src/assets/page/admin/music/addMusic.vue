
<template>
  <div>
     <div class="text-content">
        <div class="mar-20">
          <label for="">歌名：</label>
          <input type="text" v-model="name" class="input-box">
        </div>
        <div class="mar-20">
          <label for="">歌手：</label>
          <el-autocomplete
            popper-class="my-autocomplete"
            v-model="singerName"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect">
            <template slot-scope="{ item }">
              <div class="name">{{ item.name }}</div>
            </template>
          </el-autocomplete>
        </div>

        <div style="display: flex;align-items: center;">
          <label for="" name="music">音乐：</label>
          <el-upload
            :action="uploadMusicUrl"
            accept="audio/mp3"
            class="upload-demo"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :on-success="handleSuccess">
            <el-button size="small" type="primary">点击上传音乐</el-button>
            <div slot="tip" class="el-upload__tip">只能上传mp3文件</div>
          </el-upload>
        </div>
        <div style="margin-bottom: 0;" class="mar-20 bg-img-content">
            <label for="">背景：</label>
            <div class="bg-img-box" :style="{'background-image' : 'url('+ uploadImgUrl +')'}">
            <img v-show="isShowAdd" style="padding-top: 25px;" src="../../../images/add-img1.png" alt="">
            <input class="upload-input" type="file" @change="chooseImg">
            </div>
        </div>
        <div class="lyric-container">
          <label for="">歌词：</label>
          <textarea type="text" v-model="lyrice" class="text-box2" ></textarea>
        </div>
    </div>
    <div class="group-btn" style="text-align: right;">
        <button class="refresh-btn" @click="sumbitSong">保存</button>
    </div> 
  </div>
</template>

<script>
import { _sumbitSong, _getSingers, _uploadMusic } from "@/api/admin";

export default {
  name: "addSinger",
  data() {
    return {
      name: "",
      uploadImgUrl: '',
      isShowAdd: true,
      singerList: [],
      singerName: '',
      singerId: '',
      fileList: [],
      lyrice: '',
      uploadMusicUrl: ''
    }
  },
  created () {
    this.uploadMusicUrl = process.env.NODE_ENV == 'development' ? process.env.BASE_API + '/activity/upload_music' : process.env.BASE_API + '/upload_music'
    this.getSingers()
  },
  methods: {
    // 获取歌手
    getSingers () {
      _getSingers().then(response => {
        if (response.data.code == 200) {
          this.singerList = response.data.list
        }
      }).catch(error => {
        console.log(error)
      })
    },
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
          } else {
            alert('图片过大，请上传小于500k的照片')
          }
        }
      }
    },
    // 上传音乐
    uploadMusic: function (file) {
      var formData=new FormData();
      formData.append('file',file);
      var file = formData;
      _uploadMusic(file).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 提交
    sumbitSong: function() {
      var that = this;
      if (this.singer_name == "") {
        alert("请输入名称");
        return;
      } else if (this.uploadMusicUrl == '') {
        alert('请上传音乐')
        return;
      } 
      var data = {
        name: that.name,
        lyric: that.lyrice,
        singer_id: that.singerId,
        music_url: that.uploadMusicUrl,
        img_url: that.uploadImgUrl
      };
      _sumbitSong(data)
        .then(response => {
          if (response.data.code == 200) {
            alert("添加成功");
            // that.$router.push("/web_admin/music_manage");
          } else {
            alert(response.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  
    handleSuccess (response, file, fileList) {
      console.log(response)
      if (response.code == 200) {
        this.uploadMusicUrl = response.url
      } else {
        alert(response.msg)
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择1个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },

    querySearch(queryString, cb) {
      var singerList = this.singerList;
      var results = queryString ? singerList.filter(this.createFilter(queryString)) : singerList;
      cb(results);
    },
    createFilter(queryString) {
      return (singer) => {
        return (singer.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      this.singerName = item.name
      this.singerId = item.id
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
.lyric-container {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.text-box2 {
  width: 500px;
  height: 100px;
  border: 1px solid #eee
}
.my-autocomplete li{
  line-height: normal;
  padding: 7px;
}
.name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.addr {
  font-size: 12px;
  color: #b4b4b4;
}
.highlighted .addr {
  color: #ddd;
}
.mar-20 {
  margin: 20px 0;
}
</style>
