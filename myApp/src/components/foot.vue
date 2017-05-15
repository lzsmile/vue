<template>
    <div class="foot">
        <footer>
            <div class="foot act">
                <img src="../assets/images/foot/ft_1_1.png">
                <!--<p>推荐</p>-->
                <router-link to="/home" tag="p" @click.native="showNav">推荐</router-link>
            </div>
            <div class="foot">
                <img src="../assets/images/foot/ft_2.png">
                <!--<p>目的地</p>-->
                <router-link to="/mudi" tag="p" @click.native="showNav">终点</router-link>
            </div>
            <div class="foot">
                <img src="../assets/images/foot/ft_3.png">
                <!--<p>帖子</p>-->
                <router-link to="/tiezi" tag="p" @click.native="showNav">
                    帖子
                </router-link>
            </div>
            <a href="javascript:;"><div class="foot">
                <img src="../assets/images/foot/ft_4.png">
               <router-link to="/user" tag="p" @click.native="hideNav">
                   我的
               </router-link>

            </div></a>
        </footer>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
    export default {
        methods:mapActions(['showNav','hideNav'])
    }
</script>