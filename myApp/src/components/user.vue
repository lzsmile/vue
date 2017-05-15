<template>
<div class="user">
    <div class="head">
        <div class="head-img">
            <img src="../assets/images/person/head.png">
            <p>
                <!--<span class="line">登录</span>-->
                <router-link tag="span" class="line" to="/login">登录</router-link>
                <!--<span>注册</span>-->
                <router-link tag="span"to="/reg">注册</router-link>
            </p>
        </div>
        <div class="logo-dbs">
            <div class="dbs-img">
                <img src="../assets/images/icon/logo.png">
            </div>
            <p>全球低价游，满足你世界梦！</p>
        </div>
        <div class="bt"><p class="bt-lf">0关注</p><p>0粉丝</p></div>
    </div>

    <div class="whe">
        <div class="whe-lt whe-br">
            <p class="lf-tp"><img src="../assets/images/person/flag.png">足迹</p>
            <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
        </div>
        <div class="whe-lt">
            <p class="lf-tp"><img src="../assets/images/icon/heart.png">足迹</p>
            <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
        </div>
    </div>
    <div class="whe">
        <div class="whe-lt whe-br">
            <p class="lf-tp"><img src="../assets/images/person/in.png">足迹</p>
            <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
        </div>
        <div class="whe-lt">
            <p class="lf-tp"><img src="../assets/images/person/out.png">足迹</p>
            <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
        </div>
    </div>

    <div class="person">
        <div class="pn-lt">
            <p><img class="img-lf" src="../assets/images/person/lt_1.png">我的行程<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
        </div>
        <div class="pn-lt">
            <p><img class="img-lf" src="../assets/images/person/lt_2.png">我的帖子<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
        </div>
        <div class="pn-lt">
            <p><img class="img-lf" src="../assets/images/person/lt_3.png">我的收藏<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
        </div>
        <div class="pn-lt">
            <p><img class="img-lf" src="../assets/images/person/lt_4.png">我的问答<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
        </div>
        <div class="pn-lt">
            <p><img class="img-lf" src="../assets/images/person/lt_5.png">我的驴友<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
        </div>
        <div class="pn-lt">
            <p><img class="img-lf" src="../assets/images/person/lt_6.png">我的折扣<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
        </div>
        <div class="jg"></div>
    </div>
</div>
</template>
<style>
    @import "../assets/css/person.css";
</style>