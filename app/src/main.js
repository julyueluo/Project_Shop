import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router';


new Vue({
    render: h => h(App),
    //注册路由: 底下的写法是KV一致省略V，router全小写；
    router
}).$mount('#app')
