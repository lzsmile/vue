<template>
  <div id="app">
    <navbar v-show="navState"></navbar>
    <loading v-show="loadingState"></loading>
    <keep-alive>
      <transition
      enter-active-class="animated fadeInLeft"
      >
        <router-view></router-view>
      </transition>
    </keep-alive>
    <foot v-show="footState"></foot>

  </div>
</template>

<script>
    import {mapGetters} from 'vuex';
import navbar from './components/navbar.vue'
import foot from './components/foot.vue'
  export default{
      components:{
          navbar,foot
      },
      computed:mapGetters(
          ['navState','footState','loadingState']
      ),
      watch:{
      $route(to){
//          console.log('路由变化了',to.path);
        this.routeChange(to.path)


      }
      },
    mounted(){
          this.routeChange(this.$route.path)

    },
      methods:{
          routeChange(path){
              let paths=path.substring(1);
              if(paths.indexOf('detail')!='-1'||
                  paths=='login'||
                  paths=='reg'

              )
              {
                  this.$store.dispatch('hideNav');
                  this.$store.dispatch('hideFoot')
              }else{
                  this.$store.dispatch('showNav');
                  this.$store.dispatch('showFoot')
              };
              if(paths=='user'){
                  this.$store.dispatch('hideNav');
                  this.$store.dispatch('showFoot');
              }
          }
      }

  }
</script>
<style>
  @import "./assets/css/index.css";
</style>


