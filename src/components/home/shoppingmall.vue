<template>
  <div class="gou">
    <div class="head">
      <div class="zhong">
        <a href="#/home/0">
          <img src="/static/image/jtz.png" />
        </a>
      </div>购物车
    </div>
    <div class="in">
      <div class="in-content" v-if="hehe">
        <div class="bei" v-for="(item , index) in hehe" :key="index">
          <input type="checkbox" class="goux" v-model="item.lock" @click="select(hehe)" />
          <div class="shangp">
            <div class="xiaotu">
              <img :src="item.src" />
            </div>
            <div class="c">
              <p v-html="item.title"></p>
            </div>
            <div class="shoujia">
              <span class="span1">￥</span>
              <span class="span2" v-html="item.price"></span>
            </div>
          </div>
          <div class="jishu">
            <van-button size="mini" @click.prevent.stop="jian">-</van-button>
            <input type="text" value="0" v-model="count" class="number" />
            <van-button size="mini" @click.prevent.stop="jia">+</van-button>
          </div>
        </div>
      </div>

      <div class="in-kong" v-else>
        <img src="/static/image/kong.png" />
        <p>你的购物车空空如也</p>
        <a href="#/home/0">
          <button>去逛逛</button>
        </a>
      </div>

      <div class="bottom">
        <input type="checkbox" v-model="isfalse" @click="cheall(hehe)" />
        <input type="button" value="反选" @click="cheallbox(hehe)"/>
        <span class="q">0.00</span>
        <input type="button" value="结算" class="settlement" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: [],
      opp: "",
      count: 1,
      hehe: [],
      isfalse: false,
      checked: []
    };
  },
  created() {
    this.hehe = JSON.parse(JSON.stringify(eval(window.localStorage.wu)));
    // console.log(this.abc);
  },
  methods: {
    // 单选
    select(val) {
      // console.log(val);
      let arr = Array.from(val);//把本地数据的伪数组数据转换为真数组
      if (arr.filter(v => v.lock).length === arr.length - 1) {
        //↑遍历之后判断购物车勾选数量是否等于存储数量
        this.isfalse = true;
      } else {
        this.isfalse = false;
      }
    },
    // 全选↓
    cheall(val) {
      let arr = Array.from(val);//把本地数据的伪数组数据转换为真数组
      arr.map(item => {//遍历里面的内容
        item.lock = !this.isfalse;//获取到lock（false或true），使它=false或true

      });
    },
    // 反选↓
    // cheallbox(val) {
    //   let arr = Array.from(val);//把本地数据的伪数组数据转换为真数组
    //   arr.map(item => {//遍历里面的内容
    //     item.lock = !item.lock;//获取到lock（false或true），使它=false或true
    //   });
    // },
    jia: function(ev) {
      this.count++;
    },
    //数字减少，如果少于0则弹出不能再少
    jian: function(count) {
      if (this.count <= 1) {
        alert("不能少了");
      } else {
        this.count -= 1;
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.jishu {
  width: 50px;
  position: relative;
  right: -300px;
}
.shoujia {
  color: #f46;
  float: left;
  padding: 0px 0px 0px 15px;
}
.span1 {
  font-size: 12px;
}
.span2 {
  font-size: 16px;
}
.shangp {
  float: right;
  width: 285px;
  padding: 10px;
}
.c {
  float: left;
  padding: 20px 10px 0px 15px;
}
.c p {
  display: inline-block;
  width: 140px;
  font-size: 12px;
  color: #666;
  line-height: 15px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}
.xiaotu {
  width: 70px;
  height: 105px;
  float: left;
}
.xiaotu img {
  width: 100%;
}
.goux {
  background: #fff;
  width: 20px;
  height: 20px;
  border: 1px #666 solid;
  border-radius: 50%;
  margin-left: 20px;
  margin-right: 10px;
  position: absolute;
  left: 0px;
  top: 55px;
}
.bei {
  background: #fff;
  /* height: 150px; */
  width: 100%;
  position: relative;
  border-radius: 10px;
}
.in-kong {
  width: 100%;
}
.in-kong img {
  width: 100%;
  border-radius: 10px;
}
.in-kong p {
  margin: 0;
  padding: 0;
  font-size: 12px;
}
.in-kong button {
  background: #f46;
  padding: 5px 20px 5px 20px;
  color: #fff;
  border: none;
  border-radius: 10px;
}
.bottom {
  background: #fff;
  width: 95%;
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 11;
  border-radius: 10px;
}
.gou .in {
  background: #ccc;
  height: 666px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.in-content {
  width: 100%;
}
.number {
  width: 30px;
  border: 0;
  text-align: center;
}
.app .Advertisement {
  display: none;
}
.gou {
  height: 888px;
  border-bottom: 1px solid #c9c7c8;
  position: fixed;
  line-height: 44px;
  text-align: center;
  width: 100%;
  background-color: rgb(255, 255, 255);
  margin-top: 53px;
  z-index: 5;
}
.zhong {
  display: inline-block;
  overflow: hidden;
  float: left;
  margin-left: 10px;
}
.bottom .settlement {
  background: #f46;
  color: #fff;
  width: 60px;
  border-radius: 20px;
  border: none;
  text-align: center;
  margin-left: 8px;
  float: right;
}
.q {
  font-weight: 600;
  color: #f46;
  float: right;
  margin-right: 10px;
}
</style>

<style>
.van-button--mini {
  width: 48px;
}
.bottom .van-button--normal {
  border-radius: 50%;
  float: left;
  width: 80px;
}
.van-checkbox .van-checkbox__label {
  width: 328px;
}
.van-card__num {
  float: right;
}
.van-card__price {
  float: left;
}
.van-card__desc {
  max-height: none;
}
.van-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}
.van-checkbox {
  margin-bottom: 10px;
  background: #fff;
  border-radius: 10px;
}
.van-card {
  background: #fff;
}
.van-checkbox__label {
  margin-left: 0;
}
.van-checkbox__icon {
  margin-left: 10px;
}
.van-checkbox__icon .van-icon {
  border: 1px solid #424242;
}
.van-card__footer .van-button--mini {
  font-size: 14px;
  width: 50px;
}
</style>

 