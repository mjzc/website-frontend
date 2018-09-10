<template>
  <table-list ref="tableList" v-if="flag" :pageNum="pageNum"
              :pageSize="pageSize"
              :counts="counts"
              placehoder="歌手"
              @changePageNum="handleCurrentChange"
              @changePageSize="handleSizeChange"
              @search="getSingerList"
              @add="$router.push('add_singer')"
              @del="delSoupCounts">
    <div slot="tableContainer">
      <table>
        <tr class="title">
            <th style="width:10%;"><input @click="checkAll" name="checkAll" type="checkbox"></th>
            <th style="width:10%;">序号</th>
            <th style="width:30%;">歌手</th>
            <th style="width:20%;">更新日期</th>
            <th style="width:15%;">操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="item.id">
            <td style="width:10%;"><input type="checkbox" name="articlebox" :id="item.id"></td>
            <td style="width:10%;">{{ index + 1 }}</td>
            <td style="width:30%;">{{ item.name }}</td>
            <td style="width:20%;">{{ item.createTime }}</td>
            <td style="width:15%;" class="do-something">
                <i class="el-icon-edit" @click="$router.push('edit_singer?id='+item.id)"></i>
                <i class="el-icon-delete" @click="delSoupOne(item.id)"></i>
            </td>
        </tr>
        </table>
    </div>
  </table-list>
</template>
<script>
import { format } from "@/common/js/funMethod.js"
import tableList from '@/components/admin/tableList.vue'
import { getSingerList, delSingers } from "@/api/admin";

export default {
  name: "soupList",
  data: function() {
    return {
      list: [],
      pageNum: 1,
      pageSize: 10,
      counts: 0,
      delIds: [],
      searchStr: '',
      flag: false
    };
  },
  components:{
    'table-list': tableList
  },
  created: function() {
    this.getSingerList({})
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val
      this.getSingerList({})
    },
    handleCurrentChange(val) {
      this.pageNum = val
      this.getSingerList({})
    },
    // 获取列表
    getSingerList: function(msg) {
      this.searchStr = msg.searchStr ? msg.searchStr : ''
      var btn = msg.isBtnEvent ? msg.isBtnEvent : false
      var that = this
      var data = {
        pageNum: btn ? 1 : that.pageNum,
        pageSize: that.pageSize,
        searchStr: that.searchStr
      };
      getSingerList(data)
        .then(response => {
          if (response.data.code == 200) {
            response.data.list.forEach(function (i) {
              i.createTime = format(i.createTime)
            })
            that.list = response.data.list;
            that.counts = response.data.counts;
            that.flag = true
            if (that.$refs.tableList) {
              that.$refs.tableList.changeCounts(that.counts)
            }
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
    delSoupCounts: function() {
      var that = this;
      $('[name="articlebox"]:checked').each((n, i) => {
        this.delIds.push(i.id);
      });
      if (this.delIds.lenght <= 0) {
        alert("请选则要删除的项！");
        return;
      }

      var data = { ids: this.delIds };
      delSingers(data)
        .then(response => {
          if (response.data.code == 200) {
            alert("success");
            that.$router.go(0)
          } else {
            alert(response.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 单条删除文章
    delSoupOne: function(id) {
      var that = this
      var delId = new Array();
      delId.push(id);
      var data = {ids: delId};
      delSingers(data)
        .then(response => {
          if (response.data.code == 200) {
            alert("success");
            that.$router.go(0)            
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

