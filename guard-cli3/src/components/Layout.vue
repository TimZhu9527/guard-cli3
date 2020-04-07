<template>
  <div class="layout">
    <!-- 企业端布局 -->
    <!-- 头部区域 -->
    <app-header />
    <!-- 左侧导航区域 -->
    <app-navbar />
    <!-- 右侧主区域 -->
    <app-main />
  </div>
</template>

<script>
// 导入子组件
import AppHeader from './AppHeader'
import AppNavbar from './AppNavbar'
import AppMain from './AppMain'
export default {
  // 注册子组件
  components: {
    AppHeader, AppNavbar, AppMain
  },
  created () {
    // this.fetchData()
  },
  methods: {
    // fetchData () {
    //   this.$http.get('db.json').then(response => {
    //     const data = response.data
    //     console.log(data)
    //   })
    // }
  }
}
</script>

<style scoped>
.header,
.navbar,
.main {
  position: absolute;
}
/* 头部 */
.header {
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background: rgb(187, 187, 183);
}

/* 左侧导航栏 */
.navbar {
  top: 50px;
  left: 0px;
  width: 230px;
  bottom: 0px;
  /* background: aqua; */
  overflow-y: auto;
}

/* 右侧主区域 */
.main {
  top: 50px;
  right: 0;
  left: 230px;
  bottom: 0px;
  overflow-y: auto;
  /* padding: 10px; */
}
</style>
