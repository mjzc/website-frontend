<template>
  <div class="music-page">
    <nav-head></nav-head>
    <div class="music-page-bg">
      <div class="music-mask"></div>
    </div>
    <!-- 音乐盒子 -->
    <div class="music-container">
      <!-- 音乐内容 -->
      <div class="music-content-box">
        <!-- 顶部 -->
      <div class="top-nav">
        <span>JIA MUSIC</span>
        <div class="search-box">
          <input class="search-input" v-model="searchStr" type="text" placeholder="搜索歌名 歌手">
          <span>搜索</span>
        </div>
      </div>
        <!-- 左边 -->
        <div class="music-list-box">
          <div v-show="showLoading" class="loading">
            <i class="el-icon-loading"></i>
            <p>加载中</p>
          </div>
          <div class="nav-box">
            <span :class="selectType === 0 ? 'active' : ''" style="border-radius: 4px 0 0 4px; border-right: 0;">本地音乐</span>
            <span :class="selectType === 1 ? 'active' : ''" style="border-radius: 0 4px 4px 0; border-left: 0;">线上音乐</span>
          </div>
          <!-- 所有音乐列表 -->
          <div id="musicListBox" class="music-list" v-show="selectType === 0 && mySongList.length > 0">
            <ul>
              <li @click="selectMusic(mySongList,index)" class="active" v-for="(item, index) in mySongList" :key="index">
                <i class="el-icon-caret-right icon"></i>
                <div class="song-box">
                  <i class="el-icon-download"></i>
                  <span>{{ item.songName }}</span>
                  --
                  <span>{{ item.name }}</span>
                </div>
              </li>
            </ul>
          </div>
          <!-- 所有专辑音乐列表 -->
        </div>
      </div>
       <!-- 右边歌曲内容 -->
        <div class="song-content-box">
          <div class="song-info-box">
            <p class="song-name">再见 你好</p>
            <p>金玟岐</p>
          </div>
          <div class="player-boll">
            <div class="mask"></div>
          </div>
          <div class="lyric-box">
            <ul>
              <li>我喜欢的音乐</li>
              <li>那些年的颜色 渐渐淡掉</li>
              <li>而我很好 只缺了些烦恼</li>
              <li>也曾想过 若再遇到</li>
              <li>礼貌着微笑说你好</li>
            </ul>
          </div>
          <div class="bottom-box">
            <div class="strip-box">
              <span>04:40</span>
              <div class="progress-box">
                <div class="progress">
                  <div class="ball"></div>
                </div>
              </div>
              <span>00:10</span>
            </div>
            <div class="song-icon-box">
              <img src="../../images/previous.png" class="song-icon" alt="">
              <img src="../../images/play.png" class="song-icon" alt="">
              <img src="../../images/next.png" class="song-icon" alt="">
            </div>
          </div>
        </div>
        <audio :src="currentMusic"></audio>
    </div>
  </div>
</template>

<script>
import navHead from '../../components/mobile/navHead.vue'
import { _getSongList } from '@/api/admin'
import store from '@/store'
import $ from 'jquery'

export default {
  data () {
    return {
      showLoading: true,
      selectType: 0,
      searchStr: '',
      pageNum: 1,
      pageSize: 16,
      mySongList: [],
      currentMusic: ''
    }
  },
  components: {
    'nav-head': navHead
  },
  created () {
    this.getMyMusicList()
  },
  methods: {
    // 选择音乐
    selectMusic (list, index) {
      store.dispatch('setPlayMusicList', list, index).then(() => {
      })
    },
    // 滑到底部
    scrollBottom () {
      var that = this
     $("#musicListBox").on('scroll',function(){
       clearTimeout(timer);
         var $this =$(this),
         viewH =$(this).height(),//可见高度
         contentH =$(this).get(0).scrollHeight,//内容高度
         scrollTop =$(this).scrollTop();//滚动高度
        if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容
          that.showLoading = true
          var timer = setTimeout(() => {
            that.pageNum++
            that.getMyMusicList()
          }, 1000)
        }
     })
    },
    // 获取音乐列表
    getMyMusicList () {
      var data = {
        searchStr: this.searchStr,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      var that = this
      _getSongList(data).then(response => {
        if (response.data.code == 200) {
          if (response.data.list.length > 0) {
            var list = that.mySongList.concat(response.data.list)
            that.mySongList = list
            that.showLoading = false
            setTimeout(() => {
              if ($('#musicListBox')) {
                that.scrollBottom()
              }
            }, 200);
          }
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
@import url("https://cdn.bootcss.com/normalize/7.0.0/normalize.min.css");
@import url("https://cdn.bootcss.com/element-ui/2.0.11/theme-chalk/index.css");
@import url("../../styles/mobile/index.css");
@import url("../../styles/mobile/music.css");
</style>
