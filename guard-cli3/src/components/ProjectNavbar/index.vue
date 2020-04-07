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
      <!-- 项目概况 -->
      <el-submenu index='1'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>项目概况</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/ProjectInfo">项目信息</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/DataRepo">数据上报</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/AffiliatedEnter">关联企业</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/ProjectMembers">项目成员</el-menu-item>
        </el-menu-item-group>

      </el-submenu>

      <!-- 企业信息管理 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>企业信息管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Eim">企业信息管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 参建单位管理 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>参建单位管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Mopu">参建单位管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 班组管理 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>班组管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="Mwfm">班组管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 人员管理 -->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="PerManag">劳工列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 考勤管理 -->
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>考勤管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="Attendance">考勤信息</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="Attendance">打卡记录</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="Attendance">考勤异常记录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 工资录入 -->
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>工资录入</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="WageEntry">工资录入列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen () {
      console.log('handleOpen')
    },
    handleClose () {
      console.log('handleClose')
    }
  }

}
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100%;
  /* background: rgb(199, 219, 209); */
}
</style>
