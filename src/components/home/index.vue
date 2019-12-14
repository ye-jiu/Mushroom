<template>
  <div id="app">
    <div class="Advertisement">
      <div class="bao">
        <div class="Advertisementleft">
          <a href="#/home/0">
            <img src="/static/image/logo.svg" />
          </a>
          <div class="zi">上万达人为你试穿全网品牌</div>
          <div class="zixia">
            <img src="/static/image/xing.png" />
            <img src="/static/image/xing.png" />
            <img src="/static/image/xing.png" />
            <img src="/static/image/xing.png" />
            <img src="/static/image/xing.png" />
            <span>超过2亿用户已下载</span>
          </div>
        </div>
        <van-button type="primary" text="前往查看" @click="show = true" />

        <van-overlay :show="show" @click="show = false">这是一个漂亮精美的广告</van-overlay>
      </div>
    </div>

    <!-- <div class="abc">
      
    </div>-->

    <router-view></router-view>

    <van-tabbar v-model="active" active-color="#ff4466" inactive-color="#000">
      <router-link to="/home/0">
        <van-tabbar-item icon="home-o" class="home">首页</van-tabbar-item>
      </router-link>
      <router-link to="/video">
        <van-tabbar-item icon="video" class="video">直播</van-tabbar-item>
      </router-link>
      <router-link to="/shoppingmall">
        <van-tabbar-item icon="shop" class="shoppingmall">商城</van-tabbar-item>
      </router-link>
      <router-link to="/my">
        <van-tabbar-item icon="friends" class="my">我</van-tabbar-item>
      </router-link>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      show: true
    };
  },
  methods: {},
  computed: {},
  updated() {
    // this.active = window.location.hash("/")[1];
    // console.log(this);
  }
};
</script>

<style>
.van-overlay {
  color: #fff;
  text-align: center;
  position: fixed;
  padding-top: 300px;
}
.bao {
  margin: 10px 10px 5px 10px;
}
.Advertisement {
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #c5c5c5;
  width: 100%;
  padding-bottom: 5px;
  z-index: 1;
  top: 0;
  position: fixed;
}
.Advertisement button {
  border: none;
  background: #f46;
  font-size: 14px;
  color: #fff;
  text-align: center;
  padding: 5px 8px 5px 8px;
  border-radius: 5px;
  float: left;
  width: 78px;
  height: 36px;
  line-height: 26px;
  margin-left: 30px;
}
.Advertisementleft,
.Advertisementleft img {
  float: left;
}
.zi {
  font-size: 14px;
  width: 200px;
  margin-left: 40px;
}
.zixia {
  overflow: hidden;
  margin-left: 40px;
}
.zixia img {
  width: 10px;
  margin: 3px 2px 5px 2px;
}
.zixia span {
  font-size: 10px;
  color: #999;
  margin-top: 1px;
  margin-left: 75px;
  display: block;
}
.van-hairline--top-bottom a {
  width: 25%;
}
.van-grid-item__content {
  padding: 5px;
}
</style>
