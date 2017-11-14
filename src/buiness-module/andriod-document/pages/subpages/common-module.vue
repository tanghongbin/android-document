<template>
  <div style="width: 70%;">
    <h3>常用模块介绍</h3>
    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>
    <h3>BaseActivity : </h3><p ref="test">公共基类, 里面已提供一些功能，如下:<br/><br/>
      事件注册: BusHelper.registe(),取消事件注册:BusHelper.unRegiste()，发送事件:BusHelper.postEvent()
      <br/><br/>
      Dialog加载框，在BaseActivity的子类里面可以直接用showDialog(String text)方法显示弹框,
      dismissDialog()方法取消弹框,ps:如果activity有软键盘弹出，退出activity后会自动隐藏哦，
      如果dialog不满足样式,可以在子类中复写,dialogInterface = new 你自己的dialog(mContext);</p>

    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>

    <div>
      <h3>公共适配器:</h3>
      <p>CustomBaseAdapter: 所有适配器的基类</p>
    </div>


    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>

    <div>
      <h3>JSON转换类:</h3>
      <p>解析成数组:  JsonHelper.parseJSONArray(String jsonStr,Class javaClass)</p>
      <p>解析成对象:  JsonHelper.parseObject(String jsonStr,Class javaClass)</p>
      <p>对象转换成json字符串:  JsonHelper.toJSONString(Object object)</p>
    </div>

    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>

    <div>
      <h3>权限申请工具:</h3>
      <p>
        /**<br/>
        *  context 上下文环境<br/>
        *  deniedMessage 权限被拒绝时的提示消息<br/>
        *  listener 权限申请的回调监听<br/>
        *  permissons 申请的权限组，可一个或多个，<br/>
        *  PermissionHelper.CALL_PHONE,PermissionHelper.SEND_SMS...等等<br/>
        **/
      </p>
      <p>PermissionHelper: requestPermission(Context context, String deniedMessage, final PermissionListener listener, String... permissons</p>
    </div>


    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>

    <h3>常用fragment:</h3>
    <h4>XRCommonRefreshFragment      所有刷新fragment的基类</h4>
    <p style="padding-left:50px;margin: 0">
      <br/>
            |<br/>
                 |<br/>
                 |_________________________________   XRCommonListFragment<br/>
                 |<br/>
                 |<br/>
                 |_________________________________

    </p>




  </div>
</template>

<script>
//  import * as Utils from '../../common/module/Utils'
  import line from '../../../common/pages/line.vue'
  export default {
    components: {
      line
    },
    methods: {
      getTestData () {
        return 'testData'
      }
    }
  }
</script>
