<template>
    <div class="favorable">
        <router-link to=""  class="cb">
            <img src="../assets/img/history1.png" alt="" @click='goback'>
        </router-link>
        <div class="fb">
            <div class="fb-lt">
                <img :src=item.img>
                <p class="fb-name">{{item.title}}</p>
                <p class="price">
                    <span class="discount">{{item.zhekou}}</span>
                    <span class="num"><big class="big">{{item.price}}</big>元起</span>
                </p>

            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                item:{}
            }
        },
        mounted(){
            let url='src/date/detail.json';
            this.$http.get(url).then((res)=>{
//                    console.log(this.$route.params.aid);
                this.item=res.data[this.$route.params.aid-1];
//                console.log(this.item)
            }).catch((res)=>{
                console.log(res.state)
            })
        },
        methods:{
            goback(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>
    .cb {
        position: absolute;
        left:0.5rem;
        top: .7rem;
    }
    .cb>img{
        display: block;
    }
    .fb {
        position: absolute;
        left: 3rem;
        top:5rem;

    }

</style>
