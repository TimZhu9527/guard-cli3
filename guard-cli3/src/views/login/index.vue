<template>
  <div class="login-container">
    <el-form :model="form"
             status-icon
             :rules="rules"
             ref="form"
             class="login-form">
      <el-form-item>
        <div class="login-wrapper">
          <img src="./logo.jpg"
               height="100"
               alt />
        </div>
      </el-form-item>
      <!-- 账号 -->
      <el-form-item prop="username"
                    style="margin-bottom:10px">
        <el-input v-model="form.username"
                  autocomplete="off"
                  placeholder="请输入账号">
          <i slot="prefix"
             class="el-icon-user-solid"></i>
        </el-input>
      </el-form-item>
      <el-form-item style="margin-bottom:5px">
        <el-checkbox-group v-model="auths"
                           :min="0"
                           :max="1">
          <el-checkbox v-for="city in auth_list"
                       :label="city"
                       :key="city"
                       @change="cityChange(city)">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password"
                    style="margin-bottem:5px">
        <el-input type="password"
                  placeholder="请输入密码"
                  v-model="form.password"
                  show-password>
          <i slot="prefix"
             class="el-icon-user-solid"></i>
        </el-input>
      </el-form-item>
      <!-- 邀请码 -->
      <el-form-item v-if="!islogin"
                    style="margin-bottom:5px"
                    prop="invite_code">
        <el-input type="text"
                  placeholder="请输入邀请码"
                  v-model="form.invite_code">
          <i slot="prefix"
             class="el-icon-user-solid"></i>
        </el-input>
      </el-form-item>
      <el-form-item style="margin-bottom:5px">
        <p style="font-size: 12px;margin:0">邀请码可通过哦联系平台负责人直接获取。电话:15112260000</p>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="yanzhengma"
                    style="margin-bottom:20px">
        <el-input v-model="form.yanzhengma"
                  placeholder="验证码"
                  prefix-icon="lj-icon-yanzhengma"
                  autocomplete="off"
                  autocapitalize="off"
                  spellcheck="false"
                  maxlength="4"
                  @keyup.enter.native="handleLogin"
                  style="float: left; width: 122px;">
          <i slot="prefix"
             class="el-input__icon el-icon-adm-vertification"
             style="font-size: 18px;"></i>
        </el-input>
        <div class="captcha_code">
          <img src="data:image/jpg;base64,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" />
        </div>
      </el-form-item>
      <!-- 登录 -->
      <el-form-item style="margin-bottom: 0">
        <el-col :span="10"
                :offset="14"
                style="width:100%;margin-left:0">
          <el-button id="login_but"
                     type="primary"
                     size="medium"
                     class="login-btn"
                     style="width: 100%;"
                     @click="loginHandle('form')">{{islogin?'登录':'注册'}}</el-button>
          <a href="javascript:;"
             @click="islogin=!islogin">{{islogin?'没有账号?立即注册':'去登陆'}}</a>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login-container',
  data () {
    return {
      islogin: false, // 是否登录 注册
      auths: [], // 已选择的角色
      auth_list: ['企业管理员', '北京项目管理员'], // 角色列表
      cityval: '',
      form: {
        username: '', // 用户名
        password: '', // 密码
        yanzhengma: '', // 验证码
        invite_code: '' // 邀请码
      },
      rules: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        invite_code: [
          { required: true, message: '邀请码不能为空', trigger: 'blur' }
        ],
        yanzhengma: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录 注册
    cityChange (val) {
      this.cityval = val
    },
    loginHandle (formName) {
      for (var i = 0; i < this.auth_list.length; i++) {
      }
      // console.log(this.auth_list)

      this.$refs[formName].validate(valid => {
        if (valid) {
          // 判断是否选择角色
          if (this.auths.length === 0) {
            return this.$message({
              message: '请选择您的角色',
              center: true,
              type: 'warning'
            })
          }
          // 选择的角色
          // this.form = {
          //   ...this.form,
          //   auths: this.auths
          // };
          // 判断是注册还是登录
          if (!this.islogin) {
            this.$message({
              message: '注册成功,正在登录中',
              center: true,
              type: 'success'
            })
          } else {
            this.$message({
              message: '登录成功',
              center: true,
              type: 'success'
            })
          }
          // alert(JSON.stringify(this.form));

          if (this.cityval === '企业管理员') {
            setTimeout(() => {
              // this.$router.replace({ path: "/" });
              this.$router.replace({ path: '/Layout' })
            }, 1000)
          } else {
            setTimeout(() => {
              this.$router.replace({ path: '/projectLayout' })
            }, 1000)
          }
        } else {
          console.log('error')
          return false
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login-form {
  width: 420px;
  margin: 160px auto;
}
.login-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login-wrapper {
  display: flex;
  justify-content: center;
}
.radio1 {
  margin-left: 90px;
}
.img-box {
  display: flex;
}
.captcha_code img {
  display: block;
  height: 45px;
  margin-left: 20px;
}
</style>
