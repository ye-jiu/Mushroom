<template>
  <div class="external">

    <!-- <router-link to="/HelloWorld"> -->

    <template v-for="(i) in ul">
      <template v-for="(item,index) in i">
        <div :key="index" class="within" @click="Take(item.id)" :data-id="item.id">
          <img :src="item.url" class="tugao" />
          <p v-html="item.p"></p>
          <div class="small">
            <div class="small1">
              <div class="small2">
                <img :src="item.urll" />
              </div>
            </div>
            <span class="upper" v-html="item.span"></span>
            <span class="lower" v-html="item.spann"></span>
          </div>
        </div>
      </template>
    </template>
<!-- 
    </router-link> -->
  
  </div>
</template>



<script>
export default {
  data() {
    return {
      ul: [],
      sj:[]
    };
  },
  computed: {
    hehe() {
      return this.$route.params.index;
    }
  },

  beforeRouteUpdate(to, from, next) {
    this.$emit("postIndex", to.params.index);
    this.getData(to.params.index);
    next();
  },

  mounted() {
    // this.postIndex()
    this.getData(this.hehe);
  },
  methods: {
    Take(id){
      console.log(id);
      this.$router.push({path:`/HelloWorld/${id}`});
      // this.$router.push({path:"/HelloWorld"});
    },
    getData(index) {
      let url = `/static/data/home/home1.json`;
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(res => {
          // console.log(res);
          this.ul = res[index];
        });
    }
  }
};
</script>