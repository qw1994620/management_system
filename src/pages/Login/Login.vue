<template>
    <div>
       <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.psd"></el-input>
  </el-form-item>
  <el-form-item >
    <el-checkbox v-model="checked">记住密码</el-checkbox>
    <el-button type="primary" @click="submitForm('ruleForm')">立即登陆</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
export default {
    props: [

    ],
    data() {
        return {
              labelPosition: 'top',
              checked:false,
formLabelAlign: {
          name: '',
          psd: '',
          type: ''
        }
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
    
    },
    watch: {

    },
    methods: {
        submitForm(){

        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.a{
    color: red;
    .b{
        color:green
    }
}
</style>
