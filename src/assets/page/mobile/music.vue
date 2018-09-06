<template>
  <div class="music-page">
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
          <input class="search-input" type="text" placeholder="搜索歌名 歌手">
          <span>搜索</span>
        </div>
      </div>
        <!-- 左边 -->
        <div class="music-list-box">
          <div class="nav-box">
            <span style="border-radius: 4px 0 0 4px; border-right: 0;">所有专辑</span>
            <span class="active" style="border-radius: 0 4px 4px 0; border-left: 0;">所有音乐</span>
          </div>
          <!-- 所有音乐列表 -->
          <div class="music-list">
            <ul>
              <li class="active">
                <i class="el-icon-caret-right icon"></i>
                <div class="song-box">
                  <i class="el-icon-download"></i>
                  <span>残酷月光</span>
                  --
                  <span>林宥嘉</span>
                </div>
              </li>
              <li class="">
                <div class="song-box">
                  <i class="el-icon-download icon"></i>
                  <span>残酷月光</span>
                  --
                  <span>林宥嘉</span>
                </div>
              </li>
              <li class="">
                <div class="song-box">
                  <i class="el-icon-download icon"></i>
                  <span>残酷月光</span>
                  --
                  <span>林宥嘉</span>
                </div>
              </li>
              <li class="">
                <div class="song-box">
                  <i class="el-icon-download icon"></i>
                  <span>残酷月光</span>
                  --
                  <span>林宥嘉</span>
                </div>
              </li>
              <li class="">
                <div class="song-box">
                  <i class="el-icon-download icon"></i>
                  <span>残酷月光</span>
                  --
                  <span>林宥嘉</span>
                </div>
              </li>
              <li class="">
                <div class="song-box">
                  <i class="el-icon-download icon"></i>
                  <span>残酷月光</span>
                  --
                  <span>林宥嘉</span>
                </div>
              </li>
              <li class="">
                <div class="song-box">
                  <i class="el-icon-download icon"></i>
                  <span>残酷月光</span>
                  --
                  <span>林宥嘉</span>
                </div>
              </li>
              <li class="">
                <div class="song-box">
                  <i class="el-icon-download icon"></i>
                  <span>残酷月光</span>
                  --
                  <span>林宥嘉</span>
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
              <li>回忆就像电话偶尔打扰</li>
              <li>它说过去 是善意的玩笑</li>
              <li>我仰起头 不让泪往下掉</li>
              <li>如果各自安好</li>
              <li>就应该放掉</li>
              <li>我终于可以不再爱你了</li>
              <li>我终于可以不再想你了</li>
              <li>日子填满了 心却空空的</li>
              <li>我知道是我不好</li>
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
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url("https://cdn.bootcss.com/normalize/7.0.0/normalize.min.css");
@import url("https://cdn.bootcss.com/element-ui/2.0.11/theme-chalk/index.css");
@import url("../../styles/mobile/music.css");
</style>
