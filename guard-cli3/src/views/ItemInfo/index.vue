<template>
  <div class="companinfo">
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="line" :to="{ path: $route.path }">{{$route.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb> -->
     <el-input v-model="input" placeholder="请输入内容" style="width:10%"></el-input>
    <el-input v-model="input" placeholder="请输入内容" style="width:10%"></el-input>
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
    <!-- 表格 -->
    <el-table :data="tableData" height="83vh" border style="width: 100%">
      <el-table-column prop="date" label="序号" width="180"></el-table-column>
      <el-table-column prop="name" label="项目名称" width="180"></el-table-column>
      <el-table-column prop="address" label="总承包单位"></el-table-column>
      <el-table-column prop="address" label="总承包社会统一信用代码"></el-table-column>
      <el-table-column prop="address" label="项目简介"></el-table-column>
      <el-table-column prop="address" label="项目分类"></el-table-column>
      <el-table-column prop="address" label="建设单位"></el-table-column>
      <el-table-column prop="address" label="建设单位统一社会信用代码"></el-table-column>
      <el-table-column prop="address" label="操作"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>

     <!-- 修改和新增弹框 -->
 
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>