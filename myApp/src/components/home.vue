<template>
<div class="home">
    <div id="_contain">

        <baner></baner>




        <articles></articles>



    </div>
</div>
</template>
<script>
    import articles from './articles.vue'
    import baner from './baner.vue'
    export default{
        components:{
            articles,baner
        }
    }
</script>