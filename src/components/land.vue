<template>
  <div class="big">
    <div class="theme">
      <div class="theme-2-1-1">
        <div class="theme3">
          <div class="theme3-1">
            <div class="theme3-1-2">
              <div class="theme3-1-2-1">
                <a href="javascript:;">账号登录</a>
              </div>
            </div>
            <form action="#" onsubmit="return false">
              <div class="theme30">
                <div class="theme3-2">
                  <input
                    type="text"
                    maxlength="32"
                    placeholder="手机号"
                    name="inname"
                    class="theme3-2-1"
                  />
                  <dd></dd>
                  <input
                    type="password"
                    maxlength="32"
                    placeholder="密码"
                    data-type="loginpassword"
                    name="pass"
                    class="theme3-2-2"
                  />
                  <dd></dd>
                </div>
              </div>
              <div class="theme3-3">
                <input type="submit" @click="login" value="登录" class="theme3-3-1" />
              </div>
            </form>
            <div class="theme3-5">
              <router-link to="/register">
                <a href="./register.html" class="theme3-5-2">注册账号</a>
              </router-link>

              <a href="#" class="theme3-5-1">忘记密码</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  methods: {
    login() {
      if (window.localStorage.mgjreg) {
        var array = JSON.parse(window.localStorage.mgjreg);
      } else {
        array = [];
      }

      if (window.localStorage.mgjlogin) {
        // var arr = JSON.parse(window.localStorage.mgjlogin);
        var arr = [];
      } else {
        arr = [];
      }

      let inname = document.getElementsByName("inname")[0];
      let password = document.getElementsByName("pass")[0];
      let islogin = false;
      let index = 0;

      for (let i = 0; i < array.length; i++) {
        if (inname.value === array[i].phone) {
          islogin = true;
          index = i;
        }
      }

      if (islogin) {
        if (password.value === array[index].password) {
          let obj = array[index];
          arr.push(obj);
          window.localStorage.mgjlogin = JSON.stringify(arr);
          alert("登录成功");
            this.$router.push({path:"/my"});

          // setTimeout(() => {
              
          // }, 1000);
        } else {
          alert("密码错误");
        }
      } else {
        alert("账号未注册");
      }
    }
  },
  mounted() {}
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  background: #fff;
}

a {
  text-decoration: none;
  color: #000;
}

.big{
  margin-top: 50px;
}

.theme {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}

.theme-2-1-1 {
  width: 400px;
  height: 400px;
  margin-right: 150px;
  margin-top: 100px;
  margin-bottom: 100px;
  position: relative;
  margin: 0 auto;
}

.theme3 {
  width: 400px;
  height: 348px;
  display: block;
  background: rgb(255, 236, 235, 0.6);
}

.theme3-1 {
  overflow: hidden;
}

.theme3-1-2 {
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}

.theme3-1-2-1 {
  width: 50%;
  float: left;
}

.theme3-2-1 {
  line-height: 40px;
  width: 300px;
  margin: 20px 0 12px 0;
  padding-left: 5px;
  border: 1px solid #ccc;
  background: rgb(255, 236, 235, 0.3);
}

.theme3-2-2 {
  line-height: 40px;
  width: 300px;
  margin: 12px 0 12px 0;
  padding-left: 5px;
  border: 1px solid #ccc;
  background: rgb(255, 236, 235, 0.3);
}

.theme3-3-1 {
  width: 305px;
  line-height: 40px;
  color: #fff;
  background: #ff4466;
  text-align: center;
  border: none;
  border-radius: 2px;
  margin: 15px 0 15px 0;
  cursor: pointer;
  border-radius: 20px;
}

.theme3-5 {
  width: 600px;
}

.theme3-5-1 {
  font-size: 12px;
  color: #666;
  text-align: right;
  text-decoration: underline;
}

.theme3-5-2 {
  font-size: 12px;
  color: #666;
  padding-right: 10px;
}
</style>

