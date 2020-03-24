<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
            <div class="logo"/>
            <a-menu theme="dark" mode="inline">
                <a-menu-item key="1">
                    <router-link to="vue">
                        <a-icon type="user"/>
                        <span>Vue</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="2">
                    <router-link to="/react">
                        <a-icon type="video-camera"/>
                        <span>React</span>
                    </router-link>
                </a-menu-item>

                <a-menu-item key="21">
                    <router-link to="/lugia">
                        <a-icon type="video-camera"/>
                        <span>lugia</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="211">
                    <router-link to="/lugia/query">
                        <a-icon type="video-camera"/>
                        <span>lugiaQuery</span>
                    </router-link>
                </a-menu-item>

                <a-menu-item key="3">
                    <router-link to="/angular">
                        <a-icon type="video-camera"/>
                        <span>Angular</span>
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                        @click="()=> collapsed = !collapsed"
                />
            </a-layout-header>
            <a-layout-content
                    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
                <router-view/>
                <!-- <div id="react-app"></div>
                <div id="vue"></div> -->
            </a-layout-content>
        </a-layout>
        <button @click="zhuxiao">注销vue</button>
    </a-layout>
</template>
<script>
  import * as singleSpa from 'single-spa'

  export default {
    data () {
      return {
        collapsed: false,
      };
    },
    mounted () {
      const mountedAppNames = singleSpa.getAppNames();
      console.log('mounted', mountedAppNames);
    },
    methods: {
      zhuxiao () {
        const mountedAppNames = singleSpa.getMountedApps();
        console.log('zhuxiao', mountedAppNames);
        // console.log( singleSpa.getAppNames())
        // singleSpa.unloadApplication('singleDemo');  // unload 直接调用钩子
        // singleSpa.unloadApplication('singleDemo', {waitForUnmount: true}); // 切换其他路由才会调用unload钩子
      }
    }
  };
</script>
<style>
    .ant-layout.ant-layout-has-sider {
        height: 100%
    }

    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
</style>
