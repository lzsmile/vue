<template>
  <div class="articles">
      <div class="name">
          <p>旅游推荐</p>
      </div>
      <div class="favorable">
          <div class="fb" v-for="(item,index) in arr" :key="item.id">
              <!--<div class="fb-lt">-->
                  <router-link :to="{name:'detail',params:{aid:item.id}}" tag="div" class="fb-lt">
                      <img :src=item.img>
                      <p class="fb-name">{{item.title}}</p>
                      <p class="price">
                          <span class="discount">{{item.zhekou}}</span>
                          <span class="num"><big>{{item.price}}</big>元起</span>
                      </p>
                  </router-link>

              <!--</div>-->
          </div>

      </div>
      <div class="more">
          <p>查看更多<img src="../assets/images/icon/arr-right.png"></p>
      </div>
  </div>
</template>
<script>
    import '../assets/js/jquery-1.7.1.min'
        export default{
            data(){
              return {
                  arr:[]
              }
            },
            mounted(){
                this.$store.dispatch('showLoading');
                let url='src/date/xiangqing.json';
                this.$http.get(url).then((res)=>{
//                    console.log(res.data)
                    setTimeout(()=>{
                        this.$store.dispatch('hideLoading');
                        this.arr=res.data;
                    },1000)
                }).catch((res)=>{
                    console.log(res.state)
                });

                $(function(){
                    $(".more").click(function(){
                        for(var i=0;i<4;i++){
                            $(".favorable").append('<div class="fb">'
                                +'<div class="fb-lt">'
                                +'<img src="'+ 'src/assets/images/scenics/scenic_5.png'+'"/>'
                                +'<p class="fb-name">体验全球最长的过山车15天超爽旅游</p>'
                                +'<p class="price">'+'<span class="discount">2.8折</span>'
                                +'<span class="num"><big>2889</big>元起</span>'
                                +'</p></div></div>');
                        }
                    });
                })
            }
        }
</script>