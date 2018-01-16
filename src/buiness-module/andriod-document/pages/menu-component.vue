<template>
  <div>
    <a href="javascript:;" @click="showPreward" style="margin-left: 15px;">前言</a>
    <helloTest :menus="moduleList"></helloTest>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {
    ProductModuleInterface, FirstLevelObj, SecondLevelObj, ThirdLevelObj
  }
    from '../../common/interfaces/productModuleInterface'
  import Constant from '../../common/Constant'
  import * as Utils from '../../common/module/Utils'

  export default {
    methods: {
      showPreward () {
        let paramObj = {path: 'preword'}
        Utils.turnToPage(this, paramObj)
      }
    },
    components: {
      ProductModuleInterface,
      FirstLevelObj,
      SecondLevelObj,
      ThirdLevelObj
    },
    data () {
      return {
        testMenus: [1, 3, 4, 5, 6],
        styleObjList: {},
        moduleList: [
          {
            level: 1,
            title: '常用组件模块',
            path: '/common-module',
            subMenus: [
              {title: '基类活动', level: 2, elId: 'baseActivity', path: '/common-module'},
              {title: '公共适配器', level: 2, elId: 'commonAdapter', path: '/common-module'},
              {title: 'JSON转换类', level: 2, elId: 'jsonConvert', path: '/common-module'},
              {title: '权限申请工具', level: 2, elId: 'permission', path: '/common-module'},
              {title: '常用fragment', level: 2, elId: 'fragment', path: '/common-module'},
              {
                level: 2,
                title: '常用view组件',
                elId: 'common-view',
                path: '/common-module',
                subMenus: [
                  {title: '短信倒计时组件', level: 3, elId: 'smsTime', path: '/common-module'},
                  {title: '搜索组件', level: 3, elId: 'search', path: '/common-module'},
                  {title: '圆形头像', level: 3, elId: 'circleImage', path: '/common-module'},
                  {title: '标题view', level: 3, elId: 'titleView', path: '/common-module'}
                ]
              },
              {
                level: 2,
                title: '数据绑定view列表',
                elId: 'bindView',
                path: '/common-module',
                subMenus: [
                  {title: 'BindListView', level: 3, elId: 'bindList', path: '/common-module'},
                  {title: 'BindGridView', level: 3, elId: 'bindList', path: '/common-module'},
                  {title: 'BindRecycleView', level: 3, elId: 'bindList', path: '/common-module'},
                  {title: 'BindMenuListView', level: 3, elId: 'menuList', path: '/common-module'}
                ]
              },
              {
                level: 2,
                title: '简单工具类',
                elId: 'simpleUtils',
                path: '/common-module',
                subMenus: [
                  {title: '广播', level: 3, elId: 'broadCast', path: '/common-module'},
                  {title: '类实例化', level: 3, elId: 'classUtil', path: '/common-module'},
                  {title: 'JSON转换Map', level: 3, elId: 'convertUtil', path: '/common-module'},
                  {title: '通知', level: 3, elId: 'notification', path: '/common-module'}
                ]
              }]
          },
          {
            level: 1,
            title: '图片库',
            path: '/image-module',
            subMenus: [
              {title: '图片单选', level: 2, elId: 'singleChoose', path: '/image-module'},
              {title: '图片多选', level: 2, elId: 'multipleChoose', path: '/image-module'},
              {title: '照相', level: 2, elId: 'camera', path: '/image-module'},
              {title: '照片墙', level: 2, elId: 'photoWall', path: '/image-module'}
            ]
          },
          {
            level: 1,
            title: '常用工具集合',
            path: '/common-utils',
            subMenus: [
              {title: 'Activity工具', level: 2, elId: 'activityUtil', path: '/common-utils'},
              {title: 'App工具', level: 2, elId: 'appUtil', path: '/common-utils'},
              {title: '状态栏工具', level: 2, elId: 'statusBarUtil', path: '/common-utils'},
              {title: '清除工具', level: 2, elId: 'cleanUtil', path: '/common-utils'},
              {title: '剪切板工具', level: 2, elId: 'clipBoardUtil', path: '/common-utils'},

              {title: '关闭流工具', level: 2, elId: 'closeUtil', path: '/common-utils'},
              {title: '常量工具', level: 2, elId: 'constantUtil', path: '/common-utils'},
              {title: '字母转换工具', level: 2, elId: 'convertUtil', path: '/common-utils'},
              {title: '设备工具', level: 2, elId: 'deviceUtil', path: '/common-utils'},
              {title: '判空的工具', level: 2, elId: 'emptyUtil', path: '/common-utils'},

              {title: '编码-解码工具', level: 2, elId: 'encryptUtil', path: '/common-utils'},
              {title: '加密-解密工具', level: 2, elId: 'decodeUtil', path: '/common-utils'},
              {title: '文件工具', level: 2, elId: 'fileUtil', path: '/common-utils'},
              {title: 'Intent工具', level: 2, elId: 'intentUtil', path: '/common-utils'},
              {title: '键盘工具', level: 2, elId: 'keyBoardUtil', path: '/common-utils'},

              {title: '网络相关工具', level: 2, elId: 'networkUtil', path: '/common-utils'},
              {title: '电话工具', level: 2, elId: 'phoneUtil', path: '/common-utils'},
              {title: '拼音工具', level: 2, elId: 'pinyinUtil', path: '/common-utils'},
              {title: '正则表达式工具', level: 2, elId: 'regexUtil', path: '/common-utils'},
              {title: '屏幕相关工具', level: 2, elId: 'screenUtil', path: '/common-utils'},

              {title: 'SD卡工具', level: 2, elId: 'sdcardUtil', path: '/common-utils'},
              {title: '服务工具', level: 2, elId: 'serviceUtil', path: '/common-utils'},
              {title: '尺寸工具', level: 2, elId: 'sizeUtil', path: '/common-utils'},
              {title: '字符串相关工具', level: 2, elId: 'strUtil', path: '/common-utils'},
              {title: '线程池相关工具', level: 2, elId: 'threadPoolUtil', path: '/common-utils'},

              {title: '图片工具', level: 2, elId: 'imageUtil', path: '/common-utils'},
              {title: '解压缩工具', level: 2, elId: 'zipUtil', path: '/common-utils'},
              {title: 'Uri转换文件地址工具', level: 2, elId: 'uriUtil', path: '/common-utils'},
              {title: '农历-阳历转换工具', level: 2, elId: 'luarUtil', path: '/common-utils'},
              {title: '震动监听工具', level: 2, elId: 'shakeUtil', path: '/common-utils'}
            ]
          }
        ]
      }
    }
  }

  Vue.component('helloTest', {
    props: {
      menus: Array
    },
    data () {
      return {}
    },
    methods: {
      overUp (item, subMenus) {
        item.moused = true
        Vue.set(subMenus, subMenus.indexOf(item), item)
      },
      out (item, subMenus) {
        item.moused = false
        Vue.set(subMenus, subMenus.indexOf(item), item)
      },
      getStyleClass (item) {
        let color = item.moused ? '#42b983' : '#ffffff'
        let fontSize = item.moused ? '19px' : this.getLevelSize(item)
        return {
          'list-style': 'none',
          'font-size': fontSize,
          'padding': '10px',
          'background-color': color,
          'color': this.getColorByLevel(item)
        }
      },
      getColorByLevel (item) {
        return this.getInstanceByLevel(item.level).getColorByLevel(item.level)
      },
      getLevelSize (item) {
        return this.getInstanceByLevel(item.level).getSizeByLevel(item.level)
      },
      getInstanceByLevel (level) {
        let instance = ''
        if (level === Constant.FIRST_LEVEL) {
          instance = new FirstLevelObj()
        } else if (level === Constant.SECOND_LEVEL) {
          instance = new SecondLevelObj()
        } else if (level === Constant.THIRD_LEVEL) {
          instance = new ThirdLevelObj()
        }
        return instance
      },
      changeShowStatus (item, menus) {
        if (item && menus) {
          (item.clicked || item.clicked === true) ? item.clicked = false : item.clicked = true
          Vue.set(menus, menus.indexOf(item), item)
          if (item.path) {
            let pathObj = {path: item.path, query: {elId: item.elId}}
            Utils.turnToPage(this, pathObj)
          }
        }
      }
    },
    template: '<ul v-if="menus && menus.length > 0">' +
    '              <div v-for="item in menus">' +
    '                <li :style="getStyleClass(item)"' +
    '                    @mouseover="overUp(item,menus)"' +
    '                    @mouseout="out(item,menus)">' +
    '                    <a style="text-decoration: none" @click="changeShowStatus(item, menus)" href="javascript:;" >{{item.title}}</a>' +
    '                </li>' +
    '              <helloTest v-if="!item.clicked" :menus="item.subMenus"></helloTest>' +
    '              </div>' +
    '            </ul>'
  })
</script>
<style lang="less">
  .first_item_style {
    list-style: none;
    font-size: 20px;
    padding: 10px;
  }

  .second_item_style {
    list-style: none;
    font-size: 18px;
    padding: 8px;
  }

  .third_item_style {
    list-style: none;
    font-size: 16px;
    padding: 6px;
  }

  .extra_select_style {
    font-size: 23px;
    background-color: #42b983;
  }
</style>
