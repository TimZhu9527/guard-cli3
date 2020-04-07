<template>
  <div class="companinfo">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="line"
                          :to="{ path: $route.path }">{{$route.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             label-width="130px"
             class="ruleForm">
      <el-form-item label="企业名称:"
                    prop="CompanyName">
        <el-input v-model="ruleForm.CompanyName"
                  style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="法定代表人姓名:"
                    prop="deputyName">
        <el-input v-model="ruleForm.deputyName"
                  style="width:200px"></el-input>
      </el-form-item>
      <el-form-item label="社会信用代码:"
                    prop="creditCode">
        <el-input v-model="ruleForm.creditCode"
                  style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="企业注册地区:"
                    prop="registeredArea">
        <el-select v-model="ruleForm.registeredArea"
                   placeholder="请选择"
                   style="width:300px">
          <el-option label="区域一"
                     value="shanghai"></el-option>
          <el-option label="区域二"
                     value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单位性质:"
                    prop="unitProperty">
        <el-select v-model="ruleForm.unitProperty"
                   placeholder="请选择"
                   style="width:300px">
          <el-option label="区域一"
                     value="shanghai"></el-option>
          <el-option label="区域二"
                     value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit"
                   style="width:200px;">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      ruleForm: {
        CompanyName: '', // 企业名
        deputyName: '', // 法定代表人姓名
        creditCode: '', // 社会信用代码
        registeredArea: '', // 企业注册地区
        unitProperty: '' // 单位性质
      },
      rules: {
        CompanyName: [
          { required: true, message: '企业名称不能为空', trigger: 'blur' }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        deputyName: [
          { required: true, message: '法定代表人不能为空', trigger: 'blur' }
        ],
        creditCode: [
          { required: true, message: '社会信用代码不能为空', trigger: 'blur' }
        ],
        registeredArea: [
          { required: true, message: '企业注册地区不能为空', trigger: 'blur' }
        ],
        unitProperty: [
          { required: true, message: '单位性质不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      alert('确定')
    }
  }
}
</script>

<style scoped>
.ruleForm {
  margin-left: 300px;
  margin-top: 100px;
}
</style>
