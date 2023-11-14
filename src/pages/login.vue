
<template>
  <el-form
    :model="user"
    :rules="rules"
    label-width="120px"
    class="loginForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="user.userName" />
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input v-model="user.password" />
    </el-form-item>

  </el-form>
</template>

<script>
import http from './../utils/request.js'
let cheerio = require('cheerio');

http("https://yygy.top",{
  method: 'get',
  param: ''
}).then(res => {
  let dom = cheerio.load(res);
  console.log(dom('title').text());
});
export default {
    name:"mLogin",
    data(){
        return {
            user: {
                userName: '',
                password: ''
            }
        }
    },
    components:{

    }
}
</script>