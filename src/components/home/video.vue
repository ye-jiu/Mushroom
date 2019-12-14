<template>
  <div class="dalao">
    <van-tree-select
      height="100%"
      :items="items"
      :main-active-index.sync="activeIndex"
      @click-nav="getData"
    >
      <template slot="content">
        <ul>
          <template v-for="(item,index) in lolo">
            <li :key="index">
              <van-row>
                <van-col span="24">
                  <p v-html="item.title">123</p>
                </van-col>
                <template v-for="(it,index) in item.within">
                  <van-col :key="index" span="8">
                    <img :src="it.url" />
                    <span v-html="it.span"></span>
                  </van-col>
                </template>
              </van-row>
            </li>
          </template>
        </ul>
      </template>
    </van-tree-select>
  </div>
</template>

<style scoped>
.dalao {
  margin-bottom: 50px;
  margin-top: 53px;
}
.van-tree-select__content ul {
  float: right;
  width: 290px;
}
.van-tree-select__nav {
  position: fixed;
}
.van-col--8 img {
  width: 100%;
}
.van-col--8 {
  font-size: 12px;
  text-align: center;
}
.van-col--24 {
  font-weight: 900;
  font-size: 14px;
}
</style>


<script>
import axios from "axios";

export default {
  data() {
    return {
      activeIndex: 0,
      items: [{ text: "分组 1" }, { text: "分组 2" }],
      lolo: [],
      xixi: []
    };
  },
  computed: {
    hehe() {
      return this.$route.params.index;
    }
  },
  methods: {
    getData() {
      this.$nextTick(function() {
        this.lolo = this.xixi[this.activeIndex].hehe;
        // console.log(this.activeIndex)
      });
    }
  },
  created() {
    // console.log(main-active-index);
    // console.log(this.$route.query.docId);
    //  this.lolo = this.xixi[this.activeIndex].hehe;
    // this.getData()
    let url = "/static/data/home/home0.json";
    const routerParams = this.$route.query.docId;
    this.activeIndex = routerParams;

    axios.get(url).then(res => {
      this.xixi = res.data;
      this.lolo = this.xixi[this.activeIndex].hehe || this.xixi[0].hehe;
    });
  }
};
</script>

 