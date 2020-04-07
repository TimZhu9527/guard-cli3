<template>
  <div>
    <p class="ComMsg">企业信息管理</p>
    <!-- <el-divider></el-divider> -->
    <hr>
    <el-button icon="el-icon-circle-plus-outline"
               class="addInfoBtn"
               @click="addCompany"> 添加企业信息</el-button>
    <!-- 查询后的表单 -->
    <template>
      <el-table :data="comInfo"
                style="width: 100%">
        <el-table-column type="index"
                         label="序号"
                         width="120">
        </el-table-column>
        <el-table-column prop="name"
                         label="企业名称"
                         width="220">
        </el-table-column>
        <el-table-column prop="corpType"
                         label="单位性质"
                         width="180">
        </el-table-column>
        <el-table-column prop="code"
                         label="统一社会信息代码"
                         width="180">
        </el-table-column>
        <el-table-column prop="legalMan"
                         label="法定代表人姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="linkMan"
                         label="联系人姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="registerDate"
                         label="注册日期"
                         width="180">
        </el-table-column>
        <el-table-column prop="regCapital"
                         label="注册资本（万）"
                         width="180">
        </el-table-column>
        <el-table-column label="操作"
                         width="180"
                         align="center">
          <template scope="scope">
            <el-button type="primary"
                       size='mini'
                       icon="el-icon-edit"></el-button>
            <el-button type="danger"
                       size='mini'
                       icon="el-icon-delete"
                       @click="removeById(scope.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comInfo: []
    }
  },
  created () {
    this.getComInfo()
  },
  methods: {
    // GET /company/list
    async getComInfo () {
      const { data } = await this.$http.get('company/list')
      this.comInfo = data.data
    },
    // 根据ID删除对应的公司
    async removeById (id) {
      const confirmResult = await this.$confirm(
        '此操作将永久删除该商品, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已经取消删除！')
      } else {
        // /company/delete/{id}
        var { data } = await this.$http.get('company/delete/' + id)
        console.log(data)
        if (data.code === 200) {
          this.$message.success('删除成功')
          this.getComInfo()
        } else {
          this.$message.warning('删除失败')
        }
      }
    },
    // 进入到添加页面
    addCompany () {
      this.$router.push('addComp')
    }
  }

}
</script>

<style lang="less" scoped>
.ComMsg {
  margin: 25px 0 20px 70px;
  font-size: 18px;
}
.addInfoBtn {
  float: right;
  margin: 20px 20px 0 0 !important;
}
</style>
