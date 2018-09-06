<template>
    <div>
      <div class="content">
        <div class="group-btn">
            <button class="del-btn" @click="delArticleCounts"><i class="el-icon-delete"></i>&nbsp;删除</button>
            <button class="add-btn" @click="$router.push('add_articles')"><i class="el-icon-plus"></i>&nbsp;新增</button>
            <!-- <button class="refresh-btn"><i class="el-icon-refresh"></i>&nbsp; 刷新</button> -->
            <div class="right">
                <input type="text" v-model="searchStr" placeholder="标题/分类" class="search-input">
                <button class="search-btn" @click="searchAerticles"><i class="el-icon-search"></i>&nbsp;查询</button>
            </div>
        </div>
    </div>
    <div class="content-table">
        <table>
            <tr class="title">
                <th style="width:10%;"><input @click="checkAll" name="checkAll" type="checkbox"></th>
                <th style="width:10%;">序号</th>
                <th style="width:15%;">分类</th>
                <th style="width:30%;">标题</th>
                <th style="width:20%;">更新日期</th>
                <th style="width:15%;">操作</th>
            </tr>
            <tr v-for="(item,index) in articlesList" :key="item.id">
                <td style="width:10%;"><input type="checkbox" name="articlebox" :id="item.id"></td>
                <td style="width:10%;">{{ index + 1 }}</td>
                <td style="width:15%;">{{ item.className }}</td>
                <td style="width:30%;">{{ item.title }}</td>
                <td style="width:20%;">{{ item.createTime }}</td>
                <td style="width:15%;" class="do-something">
                    <i class="el-icon-edit" @click="$router.push('edit_article?id='+item.id)"></i>
                    <i class="el-icon-delete" @click="delArticleOne(item.id)"></i>
                </td>
            </tr>
        </table>
    </div>

    <!-- 页脚 -->
    <div class="pagination-box">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[1, 5, 10, 80]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="counts">
        </el-pagination>
    </div>
    </div>
</template>

<script>
import { format } from "@/common/js/funMethod.js";
import {
  getArticleList,
  delMoreArticles,
  delOneArticle,
  searchArticlesByTitleOrClass
} from "@/api/admin";

export default {
  name: "articleList",
  data: function() {
    return {
      articlesList: [],
      pageNum: 1,
      pageSize: 10,
      counts: 0,
      delIds: [],
      searchStr: ""
    };
  },
  created: function() {
    this.getArticleList();
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.searchAerticles();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      console.log(3333)
      this.searchAerticles();
    },
    // 获取文章列表
    getArticleList: function() {
      var that = this;

      var data = {
        pageNum: that.pageNum,
        pageSize: that.pageSize
      };

      getArticleList(data)
        .then(response => {
          if (response.data.code == 200) {
            response.data.list.forEach(function(i) {
              i.createTime = format(i.createTime);
            });
            that.articlesList = response.data.list;
            that.counts = response.data.counts;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    // 全选
    checkAll: function() {
      var ischeckedAll = $('[name="checkAll"]').prop("checked");
      if (!ischeckedAll) {
        var ids = $('[name="articlebox"]').prop("checked", false);
      } else {
        var ids = $('[name="articlebox"]').prop("checked", "checked");
      }
    },
    // 批量删除文章
    delArticleCounts: function() {
      var that = this;
      $('[name="articlebox"]:checked').each((n, i) => {
        this.delIds.push(i.id);
      });
      if (this.delIds.lenght <= 0) {
        alert("请选则要删除的项！");
        return;
      }

      var data = { ids: this.delIds };
      delMoreArticles(data)
        .then(response => {
          if (response.data.code == 200) {
            alert("success");
            that.$router.go(0);
          } else {
            alert(response.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 单条删除文章
    delArticleOne: function(id) {
      var that = this;
      var delId = new Array();
      delId.push(id);
      var data = { ids: delId };
      delOneArticle(data)
        .then(response => {
          if (response.data.code == 200) {
            alert("success");
            that.$router.go(0);
          } else {
            alert(response.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 查询
    searchAerticles: function() {
      var that = this;
      var data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        searchStr: this.searchStr
      };
      searchArticlesByTitleOrClass(data)
        .then(response => {
          console.log (response)
          if (response.data.code == 200) {
            response.data.list.forEach(function(i) {
              i.createTime = format(i.createTime);
            });
            that.articlesList = response.data.list;
            that.counts = response.data.counts;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


