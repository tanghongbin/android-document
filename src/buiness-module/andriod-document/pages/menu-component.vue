<template>
  <div>
    <p style="margin-left: 15px;">前言</p>
    <ul>
      <div v-for="item in moduleList">
        <li style="list-style: none;font-size: 20px;padding: 10px;">{{item.title}}</li>
        <ul v-if="item.subMenus && item.subMenus.length > 0">
          <div v-for="secondItem in item.subMenus">
            <li style="list-style: none;font-size: 18px;padding: 8px;">{{secondItem.title}}</li>
            <ul v-if="secondItem.subMenus && secondItem.subMenus.length > 0">
              <div v-for="thirdItem in secondItem.subMenus">
                <li style="list-style: none;font-size: 16px;padding: 6px;">{{thirdItem.title}}</li>
              </div>
            </ul>
          </div>
        </ul>
      </div>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        moduleList: [
          {
            title: '常用组件模块',
            subMenus: [
              {title: '基类活动'},
              {title: '公共适配器'},
              {title: 'JSON转换类'},
              {title: '网络请求加载框'},
              {title: '权限申请'},
              {title: '公用fragment碎片'},
              {
                title: '常用view组件',
                subMenus: [
                  {title: '短信倒计时组件'},
                  {title: '搜索组件'},
                  {title: '圆形头像'},
                  {title: '标题view'}
                ]
              },
              {
                title: '数据绑定view列表',
                subMenus: [
                  {title: 'BindListView'},
                  {title: 'BindGridView'},
                  {title: 'BindMenuListView'},
                  {title: 'BindRecycleView'}
                ]
              },
              {
                title: '简单工具类',
                subMenus: [
                  {title: '广播工具'},
                  {title: '类工具'},
                  {title: 'JSON转换Map工具'},
                  {title: 'IP工具'},
                  {title: '通知工具'},
                  {title: 'URL工具'}
                ]
              }]
          },
          {
            title: '图片库',
            subMenus: [
              {title: '图片轮播'},
              {title: '图片多张选择'},
              {title: '图片单张选择'},
              {title: '图片裁剪'},
              {title: '照相'}
            ]
          },
          {
            title: '常用工具集合',
            subMenus: [
              {title: '图片处理工具'},
              {title: '字母转换工具'},
              {title: 'URI转文件工具'},
              {title: '日期选择工具'},
              {title: 'Dialog工具'},

              {title: '农历-公历转换工具'},
              {title: '手机加速感应工具'},
              {title: '时间,日期临近计算工具'},
              {title: '通用工具'},
              {title: 'Activity工具'},

              {title: 'App工具'},
              {title: '状态工具'},
              {title: '清除工具'},
              {title: '剪切板工具'},
              {title: '设备工具'},

              {title: '判空的工具'},
              {title: '编码-解码工具'},
              {title: '加密-解密工具'},
              {title: '文件工具'},
              {title: '图片工具'},

              {title: '网络相关工具'},
              {title: '电话工具'},
              {title: '拼音工具'},
              {title: '正则表达式工具'},
              {title: '屏幕相关工具'},

              {title: 'SD卡工具'},
              {title: '脚本编写工具'},
              {title: '尺寸工具'},
              {title: '线程池工具'},
              {title: '解压缩工具'}
            ]
          }
        ]
      }
    }
  }
</script>
