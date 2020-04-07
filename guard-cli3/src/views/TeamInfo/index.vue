<template>
  <div class="companinfo">
    <el-input v-model="input"
              placeholder="请输入内容"
              style="width:10%"></el-input>
    <el-input v-model="input"
              placeholder="请输入内容"
              style="width:10%"></el-input>
    <el-button type="primary">搜索</el-button>
    <el-button type="warning">重置</el-button>
    <el-dropdown>
      <el-button>
        更多
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>批量删除</el-dropdown-item>
        <!-- <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item> -->
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 班组列表 -->
    <el-table :data="tableData"
              height="83vh"
              border
              style="width: 100%">
      <el-table-column prop="date"
                       label="序号"
                       width="180"></el-table-column>
      <el-table-column prop="name"
                       label="所在企业统一社会信用"
                       width="180"></el-table-column>
      <el-table-column prop="address"
                       label="班组所在企业名称"></el-table-column>
      <el-table-column prop="address"
                       label="班组名称"></el-table-column>
      <el-table-column prop="address"
                       label="责任人姓名"></el-table-column>
      <el-table-column prop="address"
                       label="责任人联系电话"></el-table-column>
      <el-table-column prop="address"
                       label="责任人证件类型"></el-table-column>
      <el-table-column prop="address"
                       label="备注"></el-table-column>
      <el-table-column prop="address"
                       label="进场日期"></el-table-column>
      <el-table-column prop="address"
                       label="退场日期"></el-table-column>
      <el-table-column prop="address"
                       label="进场附件"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage4"
                   :page-sizes="[100, 200, 300, 400]"
                   :page-size="100"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="400"></el-pagination>

    <!-- 修改和新增弹框 -->

  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
