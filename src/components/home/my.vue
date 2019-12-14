<template>
  <div style="background:#eee;padding: 10px 10px 0px 10px;margin-top: 53px;margin-bottom: 50px;">
    <div class="top">
      <router-link to="/land">
        <p v-if="islogin">请登录</p>
        <p v-else>{{user}}</p>
      </router-link>

      <img src="static/image/huiyuan.png" />
    </div>
    <div class="mytop">
      <div class="lowerxia">
        <a href="#">
          <div class="tu">
            <img src="/static/image/my1.png" />
          </div>
          <div class="size">我的主页</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/xx.png" />
          </div>
          <div class="size">消息</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/sc.png" />
          </div>
          <div class="size">收藏</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/gz.png" />
          </div>
          <div class="size">关注</div>
        </a>
      </div>
    </div>
    <div class="so-so">
      <a href="#/shoppingmall">
        <div class="so-so-left">
          <p>购物车</p>
        </div>
      </a>
      <div class="so-so-right">
        <div class="so-s">
          <a>
            <div class="s-name">卡券红包</div>
            <div class="s-desc">
              <img src="/static/image/jt.png" />
            </div>
          </a>

          <a class="in">
            <div class="s-name">补贴保障</div>
            <div class="s-desc">
              退货补运费
              <img src="/static/image/jt.png" />
            </div>
          </a>

          <a>
            <div class="s-name">我的钱包</div>
            <div class="s-desc">
              白付美在这
              <img src="/static/image/jt.png" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="lower-middle">
      <div class="lowerbig">
        <div class="lowertop">我的订单</div>
        <a href="#">
          全部
          <img src="/static/image/jt.png" />
        </a>
      </div>
      <div class="lowerxia">
        <a href="#">
          <div class="tu">
            <img src="/static/image/fk.png" />
          </div>
          <div class="size">待付款</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/fh.png" />
          </div>
          <div class="size">待发货</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/sh.png" />
          </div>
          <div class="size">待收货</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/pj.png" />
          </div>
          <div class="size">评价</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/tk.png" />
          </div>
          <div class="size">退款售后</div>
        </a>
      </div>
    </div>

    <div class="lower-middle">
      <div class="lowerbig">
        <div class="lowertop">我的订单</div>
      </div>
      <div class="lowerxia">
        <a href="#">
          <div class="tu">
            <img src="/static/image/qd.png" />
          </div>
          <div class="size">签到</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/dym.png" />
          </div>
          <div class="size">大姨妈</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/kf.png" />
          </div>
          <div class="size">客服</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/dr.png" />
          </div>
          <div class="size">达人中心</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/ys.png" />
          </div>
          <div class="size" @click="fortune">运势</div>
        </a>
        <a href="#">
          <div class="tu">
            <img src="/static/image/cz.png" />
          </div>
          <div class="size">充值中心</div>
        </a>
      </div>
    </div>
    <div class="weatherbox">
      <div v-if="isshow==0" class="bigsunny snowybox">
        <div class="weather sunny"></div>
      </div>
      <div v-if="isshow==1" class="bigrainy snowybox">
        <div class="weather rainy rainy1"></div>
        <div class="weather rainy rainy2"></div>
        <div class="weather rainy rainy3"></div>
        <div class="weather rainy rainy4"></div>
        <div class="weather rainy rainy5"></div>
        <div class="weather rainy rainy6"></div>
      </div>
      <div v-if="isshow==2" class="bigsnowy snowybox">
        <div class="weather snowy snowy1"></div>
        <div class="weather snowy snowy2"></div>
        <div class="weather snowy snowy3"></div>
        <div class="weather snowy snowy4"></div>
        <div class="weather snowy snowy5"></div>
        <div class="weather snowy snowy6"></div>
      </div>
    </div>
    <div class="an">
      <button @click="exlogin">退出登录</button>
    </div>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      user: "",
      islogin: true,
      mgjlogin: false,
      isshow: 4
    };
  },
  methods: {
    fortune() {
      var aa = Math.floor(Math.random() * 3);
      this.$toast(aa);
      if (aa == 0) {
        this.isshow = 0;
      } else if (aa == 1) {
        this.isshow = 1;
      } else if (aa == 2) {
        this.isshow = 2;
      }

      console.log(aa);
    },
    exlogin() {
      localStorage.removeItem("mgjlogin"); // 点击退出登录时清楚登录数据（注册数据不会被清楚）
      this.islogin = true;
    }
  },
  created() {
    if (window.localStorage.mgjlogin) {
      let use = JSON.parse(window.localStorage.mgjlogin); // 如果有就将这个字符串转换成对象，然后将use 等于他
      this.islogin = false;
      this.user = use[0].user;
    } else {
      this.islogin = true;
    }
  }
};
</script>
 <style>
* {
  margin: 0;
  padding: 0;
}

.weather {
  position: relative;
  display: inline-block;
  width: 180px;
  height: 150px;
  /* background: #23b7e5; */
  border-radius: 8px;
}

.sunny:before {
  content: "";
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: #f6d963;
  border-radius: 50%;
  box-shadow: 0 0 20px #ff0;
  z-index: 2;
}

.sunny:after {
  content: "";
  position: absolute;
  top: 40%;
  left: 50%;
  margin: -45px 0 0 -45px;
  width: 90px;
  height: 90px;
  background: #ffeb3b;
  clip-path: polygon(
    50% 0%,
    65.43% 25%,
    93.3% 25%,
    78.87% 50%,
    93.3% 75%,
    64.43% 75%,
    50% 100%,
    35.57% 75%,
    6.7% 75%,
    21.13% 50%,
    6.7% 25%,
    35.57% 25%
  );
  z-index: 1;
  animation: sunScale 2s linear infinite;
}

@keyframes sunScale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.weatherbox .bigsunny {
  left: -17%;
  top: -37px;
}
.weatherbox .bigrainy {
  left: -10%;
  top: -20px;
  position: relative;
}
.snowybox .rainy1,
.rainy2,
.rainy3,
.rainy4,
.rainy5,
.rainy6,
.snowy1 ,
.snowy2 ,
.snowy3 ,
.snowy4 ,
.snowy5 ,
.snowy6  {
  margin: 0;
  display: inline-block;
  padding: 0;
  position: fixed;
  top: -23px;
}
.snowybox .rainy1, .snowybox .snowy1 {
  left: -37px;
}
.snowybox .rainy2, .snowybox .snowy2 {
  left: 27px;
}
.snowybox .rainy3, .snowybox .snowy3 {
  left: 90px;
}
.snowybox .rainy4, .snowybox .snowy4 {
  left: 153px;
}
.snowybox .rainy5, .snowybox .snowy5 {
  left: 217px;
}
.snowybox .rainy6, .snowybox .snowy6 {
  left: 283px;
}
.weatherbox .bigsnowy {
  left: -10%;
  top: -20px;
}
.snowybox {
  position: fixed;
  left: 25%;
  top: 0;
  z-index: 5;
}
.cloudy:before,
.rainy:before,
.snowy:before {
  content: "";
  position: absolute;
  top: 40%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  background: #ddd;
  border-radius: 50%;
  box-shadow: #ddd 22px -15px 0 6px, #ddd 57px -6px 0 2px, #ddd 87px 4px 0 -4px,
    #ddd 33px 6px 0 6px, #ddd 61px 6px 0 2px, #ccc 29px -23px 0 6px,
    #ccc 64px -14px 0 2px, #ccc 94px -4px 0 -4px;
  z-index: 2;
}

.cloudy:before {
  animation: cloudMove 2s linear infinite;
}

@keyframes cloudMove {
  0% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -60%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}

.rainy:after {
  content: "";
  position: absolute;
  top: 40%;
  left: 25%;
  width: 4px;
  height: 14px;
  background: #f46;
  border-radius: 2px;
  box-shadow: #f46 25px -10px 0, #f46 50px 0 0, #f46 75px -10px 0, #f46 0 25px 0,
    #f46 25px 15px 0, #f46 50px 25px 0, #f46 75px 15px 0, #f46 0 50px 0,
    #f46 25px 40px 0, #f46 50px 50px 0, #f46 75px 40px 0;
  animation: rainDrop 2s linear infinite;
}

@keyframes rainDrop {
  0% {
    transform: translate(0, 0) rotate(10deg);
  }
  100% {
    transform: translate(-4px, 24px) rotate(10deg);
    box-shadow: #f46 25px -10px 0, #f46 50px 0 0, #f46 75px -10px 0,
      #f46 0 25px 0, #f46 25px 15px 0, #f46 50px 25px 0, #f46 75px 15px 0,
      rgba(255, 255, 255, 0) 0 50px 0, rgba(255, 255, 255, 0) 25px 40px 0,
      rgba(255, 255, 255, 0) 50px 50px 0, rgba(255, 255, 255, 0) 75px 40px 0;
  }
}

.snowy:after {
  content: "";
  position: absolute;
  top: 40%;
  left: 25%;
  width: 8px;
  height: 8px;
  background: #f46;
  border-radius: 50%;
  box-shadow: #f46 25px -10px 0, #f46 50px 0 0, #f46 75px -10px 0, #f46 0 25px 0,
    #f46 25px 15px 0, #f46 50px 25px 0, #f46 75px 15px 0, #f46 0 50px 0,
    #f46 25px 40px 0, #f46 50px 50px 0, #f46 75px 40px 0;
  animation: snowDrop 2s linear infinite;
}

@keyframes snowDrop {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(25px);
    box-shadow: #f46 25px -10px 0, #f46 50px 0 0, #f46 75px -10px 0,
      #f46 0 25px 0, #f46 25px 15px 0, #f46 50px 25px 0, #f46 75px 15px 0,
      rgba(255, 255, 255, 0) 0 50px 0, rgba(255, 255, 255, 0) 25px 40px 0,
      rgba(255, 255, 255, 0) 50px 50px 0, rgba(255, 255, 255, 0) 75px 40px 0;
  }
}

.so-so p {
  margin: 0;
  padding: 0;
}
a {
  color: black;
}
li {
  list-style: none;
}
.top {
  width: 100%;
  background: #fff;
}
.top p {
  color: #000;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}
.top img {
  width: 100%;
}
.an {
  background: #f46;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.an button {
  background: #f46;
  border: none;
  color: #fff;
}
.lowerxia {
  width: 100%;
  line-height: 60px;
  overflow: hidden;
}
.lowerxia a {
  width: 20%;
  float: left;
}
.tu {
  width: 25px;
  height: 25px;
  margin: 0 auto;
}
.tu img {
  width: 100%;
}
.size {
  font-size: 12px;
  color: #333;
  text-align: center;
  line-height: 40px;
}
.lowertop {
  float: left;
  font-size: 14px;
}
.lowerbig {
  overflow: hidden;
  padding: 7px 10px 7px 10px;
  border-bottom: 1px #999 solid;
}
.lower-middle {
  width: 100%;
  background: #fff;
  margin-bottom: 10px;
  border-radius: 10px;
}
.lowerbig a {
  font-size: 12px;
  color: #999;
  float: right;
}
.lowerbig a img {
  width: 6px;
  margin-left: 5px;
}
.s-name {
  display: inline-block;
  background: #fff;
  font-size: 14px;
  padding-left: 15px;
  line-height: 42px;
  float: left;
}
.in {
  border-top: 1px #666 solid;
  border-bottom: 1px #666 solid;
}
.so-s a {
  display: block;
  overflow: hidden;
}
.so-s {
  overflow: hidden;
}
.s-desc {
  line-height: 42px;
  float: right;
  padding-right: 15px;
  font-size: 12px;
  color: #999;
}
.s-desc img {
  margin-left: 5px;
  width: 5px;
}
.so-so-right {
  width: 50%;
  height: 125px;
  background: #fff;
  float: right;
  margin: 10px 0px 10px 0px;
  border-radius: 10px;
  overflow: hidden;
}
.so-so-left {
  width: 50%;
  height: 125px;
  float: left;
  background-image: url("/static/image/che.png");
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 10px 10px 10px 0px;
  box-sizing: border-box;
  background-position: -10px -0px;
  border-radius: 10px;
  margin: 10px 0px 10px 0px;
}
.so-so-left p {
  font-size: 14px;
  color: #333;
  padding-left: 10px;
  padding-top: 5px;
}
.so-so {
  overflow: hidden;
}
.mytop .news {
  overflow: hidden;
}

.mytop {
  /* margin: 10px;   */
  background: #fff;
  border-radius: 5px;
}
/* .news {
  width: 80%;
  overflow: hidden;
  padding: 10px 0px 10px 0px;
}
.news2 {
  width: 25%;
  float: left;
  text-align: center;
}
.news2 p {
  font-size: 12px;
  color: #333;
  text-align: center;
}
.news img {
  width: 25px;
  height: 25px;
} */
</style>
 