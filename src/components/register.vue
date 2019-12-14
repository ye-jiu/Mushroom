<template>
  <div class="theme">
    <div class="home">
      <div class="head">
        <form action method="post">
          <dl class="dl1">
            <dt>用户名 :</dt>
            <dd class="dd1">
              <input type="text" placeholder="请输入用户名" name="uname" class="dj" />
            </dd>
            <dd></dd>
          </dl>

          <dl class="dl1">
            <dt>手机号码 :</dt>
            <dd class="dd1">
              <input type="text" value name="phone" class="dj" />
            </dd>
            <dd></dd>
          </dl>

          <dl class="dl1">
            <dt>设置密码 :</dt>
            <dd class="dd1">
              <input type="password" name="pwd" class="dj" />
            </dd>
            <dd></dd>
          </dl>

          <dl class="dl1">
            <dt>确认密码 :</dt>
            <dd class="dd1">
              <input type="password" name="pwd2" class="dj" />
            </dd>
            <dd></dd>
          </dl>
        </form>
      </div>
      <div class="foot">
        <input type="submit" name="Asubmit" value="注册" class="btn_sub" />
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      oa1: false,
      oa2: false,
      oa3: false,
      ofive: false
    };
  },
  methods: {
    reg() {
      let _this = this
      $(function() {
        var a1 = false,
          a2 = false,
          a3 = false;
        $("input[name='uname']").blur(function() {
          //失去焦点
          var namestr = $(this).val();
          var regstr = /^[\u4e00-\u9fa5]{2,4}$/;
          if (!regstr.test(namestr)) {
            $(this)
              .parent()
              .next()
              .html("用户名必须是2-4个汉字")
              .css({
                color: "red",
                width: "100%"
              });
            return false;
          }
          a1 = true;
          return true;
        });
        $("input[name = 'uname']").focus(function() {
          //获取焦点
          $(this).val("");
          $(this)
            .parent()
            .next()
            .html("");
        });

        $("input[name='phone']").blur(function() {
          var phonestr = $(this).val();
          var regstr = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
          if (!regstr.test(phonestr)) {
            $(this)
              .parent()
              .next()
              .html("请输入正确的手机号码")
              .css({
                color: "red",
                width: "100%"
              });
            return false;
          }
          a2 = true;

          return true;
        });
        $("input[name = 'phone']").focus(function() {
          $(this).val("");
          $(this)
            .parent()
            .next()
            .html("");
        });

        $("input[name='pwd']").blur(function() {
          var pwdstr = $(this).val();
          var regstr = /^\d{6}$/;
          if (!regstr.test(pwdstr)) {
            $(this)
              .parent()
              .next()
              .html("密码必须是6位数字")
              .css({
                color: "red",
                width: "100%"
              });
            return false;
          }
          a3 = true;

          return true;
        });
        $("input[name='pwd']").focus(function() {
          $(this)
            .parent()
            .next()
            .html("");
        });

        $("input[name='pwd2']").blur(function() {
          var pwd2str = $(this).val();
          var regstr = /^\d{6}$/;
          if (regstr.test(pwd2str)) {
            //判断两框的值是否相等

            if ($("input[name='pwd']").val() == $("input[name='pwd2']").val()) {
              // $(this).parent().next().html("输入正确").css({
              $(this)
                .parent()
                .next()
                .css({
                  color: "green",
                  width: "100%"
                });
            } else {
              $(this)
                .parent()
                .next()
                .html("两次密码输入不一致")
                .css({
                  color: "red",
                  width: "100%"
                });
            }
          } else {
            $(this)
              .parent()
              .next()
              .html("输入错误")
              .css({
                color: "red",
                width: "100%"
              });
          }
          return true;
        });
        $("input[name='pwd2']").focus(function() {
          $(this)
            .parent()
            .next()
            .html("");
        });
        // console.log($("pwd").val());

        if (localStorage.tt) {
          var arr = JSON.stringify(localStorage.tt);
        } else {
          arr = [];
        }
        for (var i = 0; i < arr.length; i++) {
          if (uname) {
          }
        }
        var Asubmit = document.querySelector(".btn_sub");
        var phone = document.getElementsByName("phone")[0];
        var password = document.getElementsByName("pwd")[0];
        var username = document.getElementsByName("uname")[0];
        Asubmit.onclick = function() {
          var array = [];
          if (window.localStorage.mgjreg) {
            array = JSON.parse(window.localStorage.mgjreg);
          }

          //   console.log(username.value);

          if (a1 && a2 && a3) {
            var objj = {
              user: username.value,
              phone: phone.value,
              password: password.value
            };
            array.push(objj);
            // console.log(array)

            window.localStorage.mgjreg = JSON.stringify(array);
            alert("注册成功");
            console.log(_this.$router)
            _this.$router.push({ path: "/land" });
            // location.href = "./Signin.html";
          }
        };
      });
    }
  },
  mounted() {
    this.reg();
  }
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
  font-size: 12px;
}

a {
  text-decoration: none;
  color: #000;
}

.theme {
  width: 100%;
  text-align: center;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 50px;
}

.home {
  background: rgb(255, 236, 235, 0.8);
  /* width: 350px; */
  margin: 60px 80px 60px 0;
  margin: 0 auto;
}

.head {
  margin-top: 20px;
  margin-bottom: 20px;
}

.foot {
  text-align: center;
  margin-bottom: 20px;
}

.dl1 {
  clear: both;
  padding-left: 10px;
  overflow: hidden;
}

.dl1 dt {
  float: left;
  height: 30px;
  width: 80px;
  line-height: 30px;
  margin: 10px 0 10px 0;
}

.dl1 dd {
  float: left;
  line-height: 30px;
}

.dj {
  line-height: 30px;
  margin: 10px 0 10px 0;
  border: 1px solid #ccc;
  background: rgb(255, 236, 235, 0.3);
}

.btn_sub {
  width: 80px;
  height: 34px;
}
</style>

