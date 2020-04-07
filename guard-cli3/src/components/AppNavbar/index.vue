<template>
  <div class="navbar">
    <!-- 左侧导航 -->
    <el-menu :router="true"
             :default-active="$route.path"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <!-- 企业信息 -->
      <el-submenu index='1'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>企业信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/CompanyInfo">企业信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 项目管理 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>项目管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/ItemInfo">项目信息</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/ItemSet">项目关联设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 人员管理 -->
      <el-submenu index="/TeamInfo">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/TeamInfo">人员管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 考勤管理 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>考勤管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">打卡记录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 工资录入 -->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>工资录入</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">工资录入</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 用户管理 -->
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">用户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen() {
      console.log('handleOpen')
    },
    handleClose() {
      console.log('handleClose')
    }
  }

}
</script>

<style scoped>
.navbar {
}
.el-menu-vertical-demo {
  height: 100%;
  /* background: rgb(199, 219, 209); */
}
</style>
