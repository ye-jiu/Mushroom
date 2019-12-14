<template>
  <div class="lao">
    <van-search
      v-model="value"
      placeholder=" "
      show-action
      shape="round"
      @search="onSearch"
      @focus="onfocus"
      left-icon="bars"
    >
      <div slot="action" @click="onSearch">
        <img src="/static/image/xinxi2.png" />
      </div>
    </van-search>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="/static/image/lb1.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="/static/image/lb2.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="/static/image/lb3.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="/static/image/lb4.png" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :border="false" :column-num="5">
      <van-grid-item>
        <van-image src="/static/image/hongbao.webp" />
        <van-grid-item text="新人福利" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong2.webp" @click="wear" />
        <van-grid-item text="女装" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong3.webp" />
        <van-grid-item text="上衣" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong4.webp" />
        <van-grid-item text="裤子" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong5.webp" />
        <van-grid-item text="裙子" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong6.webp" />
        <van-grid-item text="套装" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong7.webp" />
        <van-grid-item text="女鞋" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong8.webp" />
        <van-grid-item text="美妆/个护" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong9.webp" />
        <van-grid-item text="包包" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong10.webp" />
        <van-grid-item text="配饰" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong11.webp" />
        <van-grid-item text="内衣" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong12.webp" />
        <van-grid-item text="男友" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong13.webp" />
        <van-grid-item text="家具" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong14.webp" />
        <van-grid-item text="母婴" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/image/gong15.webp" />
        <van-grid-item text="签到换券" />
      </van-grid-item>
    </van-grid>
    <van-sticky class="haha">
      <van-tabs v-model="active">
        <van-tab title="发现" :to="{name: 'homeTab', params: {index: 0}}"></van-tab>
        <van-tab title="街拍" :to="{name: 'homeTab', params: {index: 1}}"></van-tab>
        <van-tab title="品牌上新" :to="{name: 'homeTab', params: {index: 2}}"></van-tab>
        <van-tab title="小个子" :to="{name: 'homeTab', params: {index: 3}}"></van-tab>
        <van-tab title="肉肉girl" :to="{name: 'homeTab', params: {index: 4}}"></van-tab>
        <van-tab title="S性身材" :to="{name: 'homeTab', params: {index: 5}}"></van-tab>
        <van-tab title="韩系" :to="{name: 'homeTab', params: {index: 6}}"></van-tab>
        <van-tab title="日系" :to="{name: 'homeTab', params: {index: 7}}"></van-tab>
        <van-tab title="欧美" :to="{name: 'homeTab', params: {index: 8}}"></van-tab>
      </van-tabs>
      <div class="hehe">
        <van-cell is-link @click="showPopup"></van-cell>
      </div>
    </van-sticky>

    <router-view @postIndex="postIndex"></router-view>

    <van-popup v-model="show" position="top" :style="{ height: '60%' }" class="give">
      <ul>
        <p>推荐</p>
        <br />
        <router-link :to="{name: 'homeTab', params: {index: 0}}">
          <li>发现</li>
        </router-link>
        <br />
      </ul>
      <ul>
        <p>热门</p>
        <br />
        <router-link :to="{name: 'homeTab', params: {index: 1}}">
          <li>街拍</li>
        </router-link>
        <router-link :to="{name: 'homeTab', params: {index: 2}}">
          <li>品牌上新</li>
        </router-link>
        <br />
      </ul>
      <ul>
        <p>身材</p>
        <br />
        <router-link :to="{name: 'homeTab', params: {index: 3}}">
          <li>小个子</li>
        </router-link>
        <router-link :to="{name: 'homeTab', params: {index: 4}}">
          <li>肉肉girl</li>
        </router-link>
        <router-link :to="{name: 'homeTab', params: {index: 5}}">
          <li>S性身材</li>
        </router-link>
        <br />
      </ul>
      <ul>
        <p>风格</p>
        <br />
        <router-link :to="{name: 'homeTab', params: {index: 6}}">
          <li>韩系</li>
        </router-link>
        <router-link :to="{name: 'homeTab', params: {index: 7}}">
          <li>日系</li>
        </router-link>
        <router-link :to="{name: 'homeTab', params: {index: 8}}">
          <li>欧美</li>
        </router-link>
        <li>国风</li>
        <li>国风</li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      active: 0,
      value: "马丁靴"
    };
  },
  methods: {
    wear(){
      this.$router.push({ path: '/video', query: { docId:1}});
    },
    showPopup() {
      this.show = true;
    },
    onSearch() {},
    onfocus() {
      this.value = " ";
    },
    postIndex(index) {
      this.active = index;
      // console.log(index);
    }
  }
};
</script>

<style>
.advertisement {
  width: 100px;
  height: 100px;
  z-index: 111;
  position: fixed;
  top: 466px;
  background: #000;
  color: #f5f5f5;
}
.give ul {
  overflow: hidden;
}
.lao {
  margin-bottom: 50px;
}
.haha {
  position: relative;
  background: #fff;
}
.give li:hover {
  color: #ff4466;
}
.give li {
  list-style: none;
  float: left;
  width: 20%;
  background: #ffecef;
  font-size: 12px;
  margin: 0;
  padding: 0;
  margin-right: 8px;
  color: #333;
  font-size: 12px;
  line-height: 30px;
  margin-bottom: 8px;
  text-align: center;
}

.give p {
  margin: 0;
  padding: 0;
  float: left;
  color: #666;
  font-size: 10px;
}
span {
  margin: 0;
  padding: 0;
}
.tugao {
  height: 300px;
}
.van-popup {
  padding-left: 10px;
}
.van-swipe img {
  width: 100%;
}
.van-button {
  width: 100%;
}

.van-button--normal {
  padding: 0px;
}
.van-button--primary {
  border: none;
}
.van-icon-arrow {
  transform: rotate(90deg);
}
.van-tabs__nav {
  float: left;
}
.van-popup {
  color: #000;
}
.van-tabs__content {
  color: #000;
}

.van-tabs--line .van-tabs__wrap {
  width: 85%;
}
.van-tabs__wrap--scrollable .van-tabs__nav {
  width: 100%;
}

.van-sticky {
  /* float: left; */
  width: 100%;
  background: #fff;
}
.hehe {
  position: absolute;
  top: 0;
  right: 0;
}
.external {
  width: 100%;
  overflow: hidden;
  background: #f5f5f5;
}
.within {
  width: 50%;
  padding: 3px;
  float: left;
  /* border: 1px #333 solid; */
  box-sizing: border-box;
}
.within img {
  width: 100%;
  border-radius: 5px;
}
.within p {
  text-align: center;
  font-size: 13px;
  line-height: 16px;
  margin-top: -6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 3px 0px 3px 0px;
}
.small {
  width: 100%;
  padding-left: 5px;
}
.small1 {
  width: 30px;
  float: left;
  height: 30px;
  margin-right: 5px;
}
.small2 {
  width: 100%;
  height: 100%;
}
.small2 img {
  width: 100%;
  border-radius: 50%;
  float: left;
  margin-right: 6px;
}
.small span {
  float: left;
}
.upper {
  color: #333;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  display: block;
  width: 45%;
}
.lower {
  color: #999;
  font-size: 10px;
  display: block;
  width: 45%;
  line-height: 12px;
}
</style>

 