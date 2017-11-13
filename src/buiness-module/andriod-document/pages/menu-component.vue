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
            subMenus: [
              {title: '基类活动', level: 2},
              {title: '公共适配器', level: 2},
              {title: 'JSON转换类', level: 2},
              {title: '网络请求加载框', level: 2},
              {title: '权限申请', level: 2},
              {title: '公用fragment碎片', level: 2},
              {
                level: 2,
                title: '常用view组件',
                subMenus: [
                  {title: '短信倒计时组件', level: 3},
                  {title: '搜索组件', level: 3},
                  {title: '圆形头像', level: 3},
                  {title: '标题view', level: 3}
                ]
              },
              {
                level: 2,
                title: '数据绑定view列表',
                subMenus: [
                  {title: 'BindListView', level: 3},
                  {title: 'BindGridView', level: 3},
                  {title: 'BindMenuListView', level: 3},
                  {title: 'BindRecycleView', level: 3}
                ]
              },
              {
                level: 2,
                title: '简单工具类',
                subMenus: [
                  {title: '广播工具', level: 3},
                  {title: '类工具', level: 3},
                  {title: 'JSON转换Map工具', level: 3},
                  {title: 'IP工具', level: 3},
                  {title: '通知工具', level: 3},

                  {title: 'URL工具', level: 3}
                ]
              }]
          },
          {
            level: 1,
            title: '图片库',
            subMenus: [
              {title: '图片轮播', level: 2},
              {title: '图片多张选择', level: 2},
              {title: '图片单张选择', level: 2},
              {title: '图片裁剪', level: 2},
              {title: '照相', level: 2}
            ]
          },
          {
            level: 1,
            title: '常用工具集合',
            subMenus: [
              {title: '图片处理工具', level: 2},
              {title: '字母转换工具', level: 2},
              {title: 'URI转文件工具', level: 2},
              {title: '日期选择工具', level: 2},
              {title: 'Dialog工具', level: 2},

              {title: '农历-公历转换工具', level: 2},
              {title: '手机加速感应工具', level: 2},
              {title: '时间,日期临近计算工具', level: 2},
              {title: '通用工具', level: 2},
              {title: 'Activity工具', level: 2},

              {title: 'App工具', level: 2},
              {title: '状态工具', level: 2},
              {title: '清除工具', level: 2},
              {title: '剪切板工具', level: 2},
              {title: '设备工具', level: 2},

              {title: '判空的工具', level: 2},
              {title: '编码-解码工具', level: 2},
              {title: '加密-解密工具', level: 2},
              {title: '文件工具', level: 2},
              {title: '图片工具', level: 2},

              {title: '网络相关工具', level: 2},
              {title: '电话工具', level: 2},
              {title: '拼音工具', level: 2},
              {title: '正则表达式工具', level: 2},
              {title: '屏幕相关工具', level: 2},

              {title: 'SD卡工具', level: 2},
              {title: '脚本编写工具', level: 2},
              {title: '尺寸工具', level: 2},
              {title: '线程池工具', level: 2},
              {title: '解压缩工具', level: 2}
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
        console.log('打印数组:' + JSON.stringify(subMenus))
        Vue.set(subMenus, subMenus.indexOf(item), item)
      },
      out (item, subMenus) {
        item.moused = false
        console.log('打印数组:' + JSON.stringify(subMenus))
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
