<template>
  <div class="hello">
    <div class="return">
      <a href="#/home/0">
        <div class="fang">
          <van-icon name="exchange" />
        </div>
      </a>
      <a href="#javascript">
        <div class="fang2">
          <a href="#/shoppingmall">
            <van-icon name="cart-o" />
          </a>
        </div>
      </a>
    </div>
    <div class="gu" @click="show = !show">
      <p>快捷导航</p>
      <van-overlay :show="show">
        <div class="wrapper">
          <div class="block">
            <a href="#/home/0">
              <p>首页</p>
              <div class="block1">
                <van-icon name="cluster" />
              </div>
            </a>
            <a href="#/shoppingmall">
              <p>购物车</p>
              <div class="block2">
                <van-icon name="location" />
              </div>
            </a>
            <p>搜索</p>
            <div class="block3">
              <van-icon name="cart" />
            </div>
            <p>查订单</p>
            <div class="block4">
              <van-icon name="wap-home" />
            </div>
          </div>
        </div>
      </van-overlay>
    </div>

    <!-- <div v-for="(item , index) in sj" :key="index"> -->
    <!-- {{item}} -->
    <div class="lb">
      <van-swipe :loop="false" :width="280">
        <van-swipe-item v-for="(item,index) in sj.img" :key="index">
          <img ref="img" :src="item" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="price">
      <div class="priceleft">
        <span class="span1">¥</span>
        <span class="span2" v-html="sj.span" ref="price"></span>
      </div>
      <div class="priceright">
        <span class="span5" v-html="sj.spanp"></span>
        <span class="span6">优惠价</span>
      </div>
    </div>

    <div class="introduce">
      <span v-html="sj.p" ref="title"></span>
    </div>
    <!-- </div> -->

    <div class="introduce2">
      <span class="span7">免邮费</span>
      <span class="span8">广东广州</span>
    </div>

    <div class="ensure">
      <div class="ensure1">
        <img src="/static/image/bz.webp" />
        <span>72小时发货</span>
      </div>
      <div class="ensure2">
        <img src="/static/image/bz.webp" />
        7天无理由退货
      </div>
      <div class="ensure3">
        <img src="/static/image/bz.webp" />
        延误必赔
      </div>
      <span class="span9">
        <img src="/static/image/jt.png" />
      </span>
    </div>

    <div class="ensure">
      <div class="ensure4">
        <img src="/static/image/hy.png" />
        <span>开通白付美，0首付，可分期！</span>
      </div>
      <span class="span9 span10">
        <img src="/static/image/jt.png" />
      </span>
    </div>

    <div class="ensure ensuret">
      请选择：颜色 尺码
      <span class="span9">
        <img src="/static/image/jt.png" />
      </span>
    </div>

    <div class="ensurepl ensure">
      买家评价 630 | 销量 3882
      <span class="span9">
        <img src="/static/image/jt.png" />
      </span>

      <div class="tags" ref="aaa">
        <span class="tag">有图片(113)</span>
        <span class="tag">质量很好 (102)</span>
        <span class="tag">款式好 (22)</span>
        <span class="tag">物流快 (20)</span>
      </div>

      <div class="list">
        <div class="list-item">
          <div class="list1">
            <img src="/static/image/tou.webp" />
            <span>水瓶座Arlene</span>
          </div>
          <div>刚刚收到宝贝，很喜欢哦，试穿了一下挺好的，喜欢的可以下单哦</div>
          <div class="list3">
            <div class="lis">2019-03-29</div>
            <div class="lis2">身高: 152cm 体重: 47kg 是否合身: 合身</div>
          </div>
        </div>
      </div>
    </div>

    <div class="floor">
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="star-o" text="收藏" @click="x()" v-if="willShow" />
        <van-goods-action-icon icon="star" text="收藏" class="yin" @click="x()" v-else />
        <van-goods-action-button type="warning" text="加入购物车" @click="jrgwc()" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      // flag: false,
      willShow: true,
      sj: {},
      gg: JSON.parse(window.localStorage.getItem("wu")) || []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    onClickIcon() {
      this.$toast("还没写还没写");
    },
    x: function() {
      if (this.willShow == true) {
        this.willShow = false;
        this.$toast("已收藏");
      } else {
        this.willShow = true;
        this.$toast("已取消收藏");
      }
    },
    jrgwc() {
      // console.log(this.gg);
      this.gg.push({
        src: this.$refs.img[0].src,
        price: this.$refs.price.innerHTML,
        title: this.$refs.title.innerHTML,
        checked: false
      });
      // console.log(this.gg);
      window.localStorage.setItem("wu", JSON.stringify(this.gg));
      this.$toast("已加入购物车");

      // window.localStorage.setItem("you", this.$refs.price.innerHTML)
      // window.localStorage.setItem("hao", this.$refs.title.innerHTML)
      // window.console.log(this.$refs.img.src)
      // window.console.log(this.$refs.price.innerHTML)
      // window.console.log(this.$refs.title.innerHTML)
    },
    getData() {
      let url = `/static/data/home/home2.json`;
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(res => {
          // console.log(this.$route.params.id);
          this.sj = res[this.$route.params.id - 1];
          // console.log(this.sj);
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.yin {
  color: #f46;
}
.bgred {
  color: #f46;
}
.van-icon-star-o {
  color: #f46;
}
.details {
  height: 500px;
  margin-top: 10px;
  background: #fff;
}
.tag {
  color: #f46;
  background: #ffe8ee;
  font-size: 12px;
  padding: 3px;
  margin-bottom: 5px;
  margin-right: 5px;
}
.tags {
  margin-top: 10px;
}
.list3 {
  font-size: 10px;
  margin-top: 5px;
}
.list1 {
  margin-bottom: 10px;
}
.list1 img {
  border-radius: 50%;
  width: 30px;
}
.list1 span {
  color: #000;
  margin-left: 10px;
}

.list {
  margin-top: 10px;
}
.floor {
  width: 100%;
  height: 50px;
  z-index: 999;
  background: #f46;
  bottom: 0;
  position: fixed;
  overflow: hidden;
}
.floorleft {
  width: 50%;
  float: left;
  height: 100%;
}
.floorright {
  width: 50%;
  float: right;
  height: 100%;
}
.return {
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 10;
}
.fang,
.fang2 {
  background-color: rgba(0, 0, 0, 0.4);
  width: 50px;
  height: 50px;
  z-index: 9999;
  border-radius: 50px;
  color: #fff;
  text-align: center;
  font-size: 32px;
  line-height: 60px;
  display: inline-block;
  margin: 10px;
}
.van-icon-cart-o {
  color: #fff;
}
.fang2 {
  float: right;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  position: fixed;
  /* background-color: rgba(255, 255, 255, 0.7); */
  width: 125px;
  height: 220px;
  right: 36px;
  top: 450px;
  z-index: 9999;
  color: #fff;
  text-align: center;
}
.block a {
  color: #fff;
}
.block1,
.block2,
.block3,
.block4 {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.7);
  width: 50px;
  height: 50px;
  right: 37px;
  z-index: 9999;
  border-radius: 50px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  margin-top: -10px;
}
.block1 {
  top: 615px;
}
.block2 {
  top: 561px;
}
.block3 {
  top: 509px;
}
.block4 {
  top: 457px;
}
.wrapper .block p {
  line-height: 45px;
  font-size: 12px;
  width: 42px;
  /* margin-right: 10px; */
  margin-left: 15px;
  margin-top: -4px;
}
.block .van-icon {
  font-size: 25px;
  line-height: 50px;
}
.gu {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 50px;
  height: 50px;
  right: 36px;
  top: 668px;
  z-index: 9999;
  border-radius: 50px;
  color: #fff;
  text-align: center;
}
.gu p {
  width: 35px;
  font-size: 12px;
  padding-top: 9px;
  padding-left: 7px;
}
.ensure {
  background: #fff;
  overflow: hidden;
  padding: 5px 16px 5px 16px;
  margin-top: 10px;
}
.ensurepl {
  color: #999;
  /* height: 1000px; */
  /* z-index: 999; */
  font-size: 14px;
  padding: 10px 19px 10px 26px;
}
.ensuret {
  font-size: 14px;
  color: #333;
  padding: 10px 19px 10px 26px;
}
.ensure4 {
  font-size: 12px;
  float: left;
  padding: 8px 0 8px 7px;
}
.ensure4 img {
  width: 20px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  float: left;
}
.span10 img {
  margin-top: 12px;
}
.ensure1,
.ensure2,
.ensure3 {
  float: left;
  font-size: 10px;
  margin: 0 10px 0 10px;
}
.ensure1 img,
.ensure2 img,
.ensure3 img {
  width: 15px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  float: left;
  margin-right: 5px;
}
.span9 {
  float: right;
  font-size: 14px;
  width: 7px;
}
.span9 img {
  width: 100%;
}
.introduce2 {
  color: #999;
  font-size: 10px;
  padding: 10px 5px 10px 5px;
  background: #fff;
}
.span8 {
  float: right;
}
.introduce {
  padding: 10px;
  background: #fff;
}
.introduce span {
  font-size: 14px;
  color: #333;
}
.priceleft {
  float: left;
  margin-right: 5px;
}
.price,
.priceright {
  overflow: hidden;
  background: #fff;
}
.price {
  padding-top: 10px;
  padding-left: 10px;
}
.priceright {
  float: none;
  width: 52px;
  padding: 0;
}
.span1 {
  font-size: 10px;
}
.span2 {
  font-size: 32px;
}
.span5 {
  font-size: 12px;
  color: #666;
  text-decoration: line-through;
}
.span6 {
  background-color: rgb(255, 232, 238);
  color: rgb(255, 34, 85);
  font-size: 12px;
  padding: 3px 5px 3px 5px;
}
.van-swipe {
  height: 390px;
  /* margin: 0px 10px 10px 10px;   */
}
.van-swipe-item {
  padding: 8px;
  box-sizing: border-box;
}
.van-swipe img {
  width: 100%;
}
.lb {
  background: #fff;
}
.whole {
  padding: 8px 0 8px 0;
}
.hello {
  background: #eee;
  position: relative;
  margin-bottom: 50px;
  margin-top: 53px;
}
</style>
