# 轱辘 - 一个 Vue UI 组件
[![Build Status](https://travis-ci.com/CuiLei-document/vue-gulu-ui.svg?branch=main)](https://travis-ci.com/CuiLei-document/vue-gulu-ui)
[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

#### 介绍
在学习vue的过程中，开发的一个UI框架


#### 开始使用
1. CSS样式设置
        
    使用本框架前，请先将css中开启
    
    ```
     *,*::before,*::after{box-sizing:border-box}
    ```
    还需要将默认颜色和变量进行设置（后续会改为 scss 变量)
    ```
       :root{
        --font-size: 14px;
        --button-height: 32px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color--hover: #666;
       }
    ```
    
    IE8及以上浏览器都支持

2. 安装
    ```
    npm i -S c-gulu-ui
    或
    yarn add c-gulu-ui
    ```
3. 引入
    ```
    import {Button,ButtonGroud,Icon} from 'c-gulu-ui'
    import 'c-gulu-ui/dist/index.css'
    
    export default{
        name: 'App',
        components:{'g-button':Button}  
    }
   
    ```        
#### 文档

#### 问答

#### 变更记录

#### 联系方式

#### 贡献代码