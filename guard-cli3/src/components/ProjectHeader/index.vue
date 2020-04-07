<template>
  <div class="header">
    项目端
    <!-- 头部 -->
    <!-- <span>门卫识后台管理系统2.0</span> -->
    <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        用户名
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item command="c">退出系统</el-dropdown-item>
        <!-- <el-dropdown-item>螺蛳粉</el-dropdown-item> -->
        <!-- <el-dropdown-item disabled>双皮奶</el-dropdown-item> -->
        <!-- <el-dropdown-item divided>蚵仔煎</el-dropdown-item> -->
      </el-dropdown-menu>
    </el-dropdown>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    handleCommand(command){
      switch(command){
        case "c":
          this.exit()
          break;
          default:
          break;
      }
    },
    // 退出系统
    exit(){
            this.$router.replace({ path: '/login' });
          }
  },
};
</script>

<style scoped>
.el-dropdown {
  float: right;
  position: relative;
  right: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  /* color: #409EFF; */
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>