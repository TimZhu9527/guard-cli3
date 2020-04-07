<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Eim' }">企业信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加企业信息</el-breadcrumb-item>
    </el-breadcrumb>
    <hr>
    <el-form label-width="170px"
             :rules="rules"
             ref="ruleForm"
             :model="saveCompanyDto">
      <el-form-item label="企业名称"
                    prop="name">
        <el-input v-model="saveCompanyDto.name"></el-input>
      </el-form-item>
      <el-form-item label="单位性质">
        <el-select placeholder="请选择单位的性质"
                   v-model="saveCompanyDto.region">
          <el-option label="区域一"
                     value="shanghai"></el-option>
          <el-option label="区域二"
                     value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="统一社会信用代码"
                    prop="code">
        <el-input v-model="saveCompanyDto.code"></el-input>
      </el-form-item>
      <el-form-item label="法定代表人姓名"
                    prop="legalMan">
        <el-input v-model="saveCompanyDto.legalMan"></el-input>
      </el-form-item>
      <el-form-item label="联系人姓名"
                    prop="linkMan">
        <el-input v-model="saveCompanyDto.linkMan"></el-input>
      </el-form-item>
      <el-form-item label="注册日期">
        <el-date-picker type="date"
                        placeholder="选择日期"
                        v-model="saveCompanyDto.registerDate "></el-date-picker>
      </el-form-item>
      <el-form-item label="注册基本（万）"
                    prop="regCapital">
        <el-input v-model="saveCompanyDto.regCapital"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="back()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    // 校验名字
    var checkName = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('企业名称不能为空'))
      }
      callback()
    }
    // 校验统一信用编码
    var checkCode = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('统一社会信用代码不能为空'))
      }
      callback()
    }
    // 检查法人姓名
    var checklegalMan = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('法人信息不能为空'))
      }
      callback()
    }
    // 联系人姓名
    var checklinkMan = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('联系人姓名不能为空'))
      }
      callback()
    }
    // 检查注册资本
    var checkregCapital = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('注册资本不能为空'))
      }
      callback()
    }
    return {
      // 表单数据
      saveCompanyDto: {
        name: '',
        code: '',
        legalMan: '',
        linkMan: '',
        regCapital: '',
        region: '',
        registerDate: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        code: [
          { validator: checkCode, trigger: 'blur' }
        ],
        legalMan: [
          { validator: checklegalMan, trigger: 'blur' }
        ],
        linkMan: [
          { validator: checklinkMan, trigger: 'blur' }
        ],
        regCapital: [
          { validator: checkregCapital, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (value) {
      this.$refs[value].validate(async (valid) => {
        if (valid) {
          var { data } = await this.$http.post('company/create', this.saveCompanyDto)
          if (data.code === 200) {
            this.$router.push('Eim')
          }
        } else {
          this.$message({
            message: '提交失败',
            type: 'error'
          })
          return false
        }
      })
    },
    back () {
      this.$router.push('Eim')
    }
  }

}
</script>

<style scoped>
.el-form {
  margin: 50px 0 0 400px;
}
.el-input,
.el-select {
  width: 480px;
}
</style>
