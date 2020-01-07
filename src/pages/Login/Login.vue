<template>
  <div class="login_container">
    <el-form ref="ruleForm" :label-position="labelPosition" label-width="80px" :model="form" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">记住密码</el-checkbox>
        <el-button type="primary" @click="submitForm()">立即登录</el-button>
        <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      labelPosition: "top",
      checked: false,
      form: {
        username: "admin",
        password: "123456"
      },
       rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 1, max: 12, message: '长度在 1 到 12 个字符', trigger: 'blur' }
          ],
       }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    async submitForm() {
      let { data: res } = await this.$axios.post("login", this.form);
      console.log(res);
      if (res.meta.status !== 200) return this.$message.error("登录失败");
      this.$message.success("登录成功");
      window.sessionStorage.setItem("token", res.data.token);
      this.$router.push("/");
    },
     resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    
  },
  components: {}
};
</script>

<style scoped lang="less">
.login_container {
  color: red;
  .el-form {
    // background-color: green;
    margin: 0 auto;
    color: red;
    width: 500px;
    // height: 500px;
    .el-button {
      width: 100%;
      margin-left: 0;
      margin: 5px 0;
    }
  }
  
}
</style>
