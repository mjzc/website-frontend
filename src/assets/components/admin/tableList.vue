<template>
    <div>
      <div class="content">
        <div class="group-btn">
            <button class="del-btn" @click="delBtnEvent"><i class="el-icon-delete"></i>&nbsp;删除</button>
            <button class="add-btn" @click="addBtnEvent"><i class="el-icon-plus"></i>&nbsp;新增</button>
            <!-- <button class="refresh-btn"><i class="el-icon-refresh"></i>&nbsp; 刷新</button> -->
            <div class="right">
                <input type="text" v-model="searchStr" :placeholder="placeholder" class="search-input">
                <button class="search-btn" @click="searchBtnEvent"><i class="el-icon-search"></i>&nbsp;查询</button>
            </div>
        </div>
    </div>
    <div class="content-table">
        <slot name="tableContainer"></slot>
    </div>
    <!-- 页脚 -->
    <div v-if="allcounts > 0" class="pagination-box">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[1, 5, 10, 80]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="allcounts">
        </el-pagination>
    </div>
    </div>
</template>

<script>
export default {
  name: 'tableList',
  props: {
    pageNum: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    counts: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      searchStr: '',
      allcounts: 0
    }
  },
  created () {
    setTimeout(() => {
       this.allcounts = this.counts
    }, 300);
  },
  watch: {
    counts () {
    }
  },
  methods: {
    delBtnEvent () {
      this.$emit('del')
    },
    addBtnEvent () {
      this.$emit('add')
    },
    searchBtnEvent () {
      this.$emit('search', {searchStr: this.searchStr, isBtnEvent: true})
    },
    handleSizeChange(val) {
      var pageSize = val
      this.$emit('changePageSize', pageSize)
    },
    handleCurrentChange(val) {
      var pageNum = val;
      this.$emit('changePageNum', pageNum)
    },
    changeCounts (val) {
      this.allcounts = val
    }
  }
}
</script>
