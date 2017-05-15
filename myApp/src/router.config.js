
import home from './components/home.vue';
import mudi from './components/mudi.vue';
import tiezi from './components/tiezi.vue';
import user from './components/user.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
import articles from './components/articles.vue';
import detail from './components/detail.vue'
const routes=[
    {path:'/home',component:home},
    {path:'/mudi',component:mudi},
    {path:'/user',component:user},
    {path:'/reg',component:reg},
    {path:'/login',component:login},
    {path:'/tiezi',component:tiezi},
    {path:'/articles',component:articles},
    {name:'detail',path:'/detail/:aid',component:detail},
    {path:'/',redirect:'/home'}
];
export default {
    routes
}