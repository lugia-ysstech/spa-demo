import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import singleSpaVue from "single-spa-vue";

Vue.config.productionTip = false

const vueOptions = {
    el: "#vue",
    router,
    store,
    render: h => h(App)
};

// singleSpaVue包装一个vue微前端服务对象
const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: vueOptions
});

export const bootstrap = (por) => {
    return new Promise((resolve, reject) => {
        console.log('bootstrap')
        resolve('data')
    });
}



export const mount = [
    ()=>{
        return new Promise((resolve, reject) => {
            //注册事件
            console.log('mount');
            resolve()
        });
    },
    vueLifecycles.mount
 ] // 挂载时
export const unmount = [
    ()=>{
        return new Promise((resolve, reject) => {
            //注册事件
            console.log('unmount');
            resolve()
        });
    },
    vueLifecycles.unmount
] // 卸载时
console.log(vueLifecycles.unload)
export const unload  = [
    ()=>{
        return new Promise((resolve, reject) => {
            //注册事件
            console.log('unload');
            resolve()
        });
    }
]

export default vueLifecycles;
