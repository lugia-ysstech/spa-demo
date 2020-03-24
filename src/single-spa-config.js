import * as singleSpa from 'single-spa'; //导入single-spa

/*
* runScript：一个promise同步方法。可以代替创建一个script标签，然后加载服务
* */
const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
};

singleSpa.registerApplication( //注册微前端服务
    'singleDemo', // 应用名称
    async () => { // 应用加载函数
        await runScript('http://localhost:3000/app.js');
        return window.singleVue
    },
    location => { // 应用是否激活
        return location.pathname.startsWith('/vue')
    }
    ,{data:1} // 传入应用钩子函数的参数
);

singleSpa.registerApplication(
    'reactApp',
    async () => {
        await runScript('http://localhost:3001/static/js/main.js');
        console.log('window.reactApp', window.reactApp)
        return window.reactApp;
    },
    location => 
    {
        return location.pathname.startsWith('/react')
    }
);


singleSpa.registerApplication(
    'helloReactApp',
    async () => {
        await runScript('http://localhost:3015/static/js/main.js');
        console.log('window.reactApp', window.reactApp)
        return window.reactApp;
    },
    location =>
    {
        return location.pathname.startsWith('/helloReact')
    }
);

singleSpa.registerApplication(
    'angular-app',
    async () => {
        await runScript('http://localhost:3002/inline.bundle.js');
        await runScript('http://localhost:3002/polyfills.bundle.js');
        await runScript('http://localhost:3002/styles.bundle.js');
        await runScript('http://localhost:3002/vendor.bundle.js');
        await runScript('http://localhost:3002/main.bundle.js');
        return window.angularApp;
    },
    location =>  {
        return location.pathname.startsWith('/angular')
    }
);

singleSpa.addErrorHandler(err => {
    console.log(err);
});

// 切换两个应用
// singleSpa.navigateToUrl("/react");

singleSpa.start() // 启用



