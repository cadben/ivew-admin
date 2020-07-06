<template>
  <div class="Login">
    <h2 class="login_title">欢迎登录</h2>
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <FormItem prop="username">
        <Input type="text" placeholder="输入账号" v-model="formCustom.username"></Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" placeholder="输入密码" v-model="formCustom.password"></Input>
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          class="loginbt"
          :loading="isBtnLoading"
          @click="handleSubmit('formCustom')"
        >登录</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isBtnLoading: false,
      formCustom: {
        username: "",
        password: ""
      },
      ruleCustom: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          console.log(1111);
          var _this = this;
          this.isBtnLoading = true;
          this.axios({
            method: "POST",
            url:
              "https://www.fastmock.site/mock/dc40487b929bef3c8a88ba701cc507af/vuedemo/api/login",
            data: {
              name: this.formCustom.username,
              password: this.formCustom.password
            }
          }).then(res => {
            console.log(res);
            if (
              (res.data.name == this.formCustom.username) &
              (res.data.password == this.formCustom.password)
            ) {
              this.$Message.success("登录成功");
              sessionStorage.setItem("loginUser", this.formCustom.username);
              sessionStorage.setItem("loginStats", res.data.stats);
              setTimeout(function() {
                _this.isBtnLoading = false;
                _this.$router.push("/home");
              }, 1000);
            } else {
              this.isBtnLoading = false;
              this.$Message.error("账号密码错误");
            }
          });
        } else {
          this.$Message.error("不能为空");
        }
      });
    }
  }
};
</script>
<style>
.loginbt {
  width: 100%;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.ivu-form-item-content {
  margin-left: 0px !important;
}
.Login {
  width: 442px;
  height: 350px;
  border: 1px solid #dcdfe6;
  padding: 20px 30px;
  margin: 150px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}
.ivu-input {
  height: 40px;
  line-height: 40px;
}
.login_title {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>