<template>
  <div style="width: 70%;">
    <p>
      在导入后需要在application的onCreate方法中加入NetManager.init(this);
    </p>
    <h3>常用模块介绍</h3>
    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>
    <h3 id="baseActivity">BaseActivity : </h3>
    <p ref="test">公共基类, 里面已提供一些功能，如下:<br/><br/>
      事件注册: BusHelper.registe(),取消事件注册:BusHelper.unRegiste()，发送事件:BusHelper.postEvent()
      <br/><br/>
      Dialog加载框，在BaseActivity的子类里面可以直接用showDialog(String text)方法显示弹框,
      dismissDialog()方法取消弹框,ps:如果activity有软键盘弹出，退出activity后会自动隐藏哦，
      如果dialog不满足样式,可以在子类中复写,dialogInterface = new 你自己的dialog(mContext);</p>

    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>

    <div>
      <h3 id="commonAdapter">公共适配器:</h3>
      <p>CustomBaseAdapter: 所有适配器的基类</p>
    </div>


    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>

    <div>
      <h3 id="jsonConvert">JSON转换类:</h3>
      <p>解析成数组:  JsonHelper.parseJSONArray(String jsonStr,Class javaClass)</p>
      <p>解析成对象:  JsonHelper.parseObject(String jsonStr,Class javaClass)</p>
      <p>对象转换成json字符串:  JsonHelper.toJSONString(Object object)</p>
    </div>

    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>

    <div>
      <h3 id="permission">权限申请工具:</h3>
      <p>
        /**<br/>
        *  context 上下文环境<br/>
        *  deniedMessage 权限被拒绝时的提示消息<br/>
        *  listener 权限申请的回调监听<br/>
        *  permissons 申请的权限组，可一个或多个，<br/>
        *  PermissionHelper.CALL_PHONE,PermissionHelper.SEND_SMS...等等<br/>
        **/
      </p>
      <p>
        PermissionHelper: requestPermission(Context context, String deniedMessage, final PermissionListener listener, String... permissons</p>
    </div>


    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>

    <h3 id="fragment">常用fragment:</h3>
    <h4>XRCommonRefreshFragment      所有刷新fragment的基类</h4>
    <p style="padding-left:50px;margin: 0">
      <br/>
      |<br/>
      |<br/>
      |_________________________________   XRCommonListFragment<br/>
      |<br/>
      |<br/>
      |_________________________________   XRBaseWebviewFragment<br/>

    <h4>XRCommonListFragment  -  显示列表的fragment，以ListView为基础<br/><br/>用法:</h4>
    <code-part>
      XRCommonListFragment commonListFragment = new XRCommonListFragment();<br/>
      XRCommonRefreshFragment.Configration configration = new XRCommonRefreshFragment.Configration();<br/>
      configration.setAdapterClassName(CustomAdapter.class.getName());<br/>
      configration.setModuleClassName(CustomModule.class.getName());<br/>
      configration.setPageSize(10);<br/>
      commonListFragment.setmConfigration(configration);<br/>
      commonListFragment.setOnItemClickListener(new XRCommonListFragment.OnListViewItemClickListener() {<br/>
      @Override<br/>
      &emsp;&emsp;public void onItemClick(int position, List list) {<br/>
      &emsp;&emsp;&emsp;// listview的item点击事件<br/>
      &emsp;&emsp;}<br/>
      });<br/>
    </code-part>

    <br/>
    CustomAdapter 必须继承自XRBaseAdapter<br/>
    CustomModule 必须实现BaseListDataModule


    <h4>XRBaseWebviewFragment  -  显示webview的fragment，以Bridgewebview为基础，提供了和h5的交互方案<br/><br/>用法:</h4>
    <br/>
    <code-part>
      String url = "http://www.baidu.com";
      XRBaseWebviewFragment xrBaseWebviewFragment =
      XRBaseWebviewFragment.createFragment(CustomHandler,url);<br/>

      CustomHandler必须继承自BaseWebviewHandler在里面实现和h5的交互<br/>
      url 是请求的地址<br/>


      button = findViewById(R.id.button) as CountDownButton
      button.setmStartListener {
      ToastUtils.showMessage(this@MainActivity, "计时开始")
      }
    </code-part>


    <h3 id="common-view">常用view组件:</h3>

    <h4 id="smsTime">CountDownButton  -  发送验证码的倒计时控件<br/><br/>用法:</h4>
    <code-part>
      button = findViewById(R.id.button) as CountDownButton
      button.setmStartListener {
      &emsp;&emsp;&emsp;&emsp;ToastUtils.showMessage(this@MainActivity, "计时开始")<br/>
      }<br/>
      <br/>
    </code-part>
    在布局中使用:<br/>
    <layout-part>
      < com.android_base.core.views.CountDownButton
      android:layout_width="wrap_content"
      android:id="@+id/button"
      app:unSelectBackgroundDrawable="@drawable/unselect"
      app:selectBackgroundDrawable="@drawable/select"
      android:layout_height="wrap_content"/>
    </layout-part>
    <br/>
    <br/>
    unSelectBackgroundDrawable - 未倒计时的背景<br/>
    selectBackgroundDrawable - 倒计时的背景

    <h4 id="search">CustomSearchEdit  -  自定义搜索组件<br/><br/>用法:</h4>
    <code-part>
      CustomSearchEdit customSearchEdit = new CustomSearchEdit(mContext);<br/>
      customSearchEdit.setChangeListener(new CustomSearchEdit.TextChangeListener() {<br/>
      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void onTextChange(String text) {<br/>
      &emsp;&emsp;&emsp;&emsp;// 文本改变触发<br/>
      &emsp;&emsp;}<br/>
      <br/>
      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void onSearch(String text) {<br/>
      &emsp;&emsp;&emsp;&emsp;// 点击搜索按钮触发，同时清空文本也会触发<br/>
      &emsp;&emsp;}<br/>
      });<br/>
    </code-part>


    <h4 id="circleImage">CustomCircleImageView  -  圆形头像<br/><br/>用法:</h4>

    在布局中使用:<br/>
    <layout-part>
      < com.android_base.core.views.CustomCircleImageView<br/>
      android:layout_width="@dimen/height_50"<br/>
      app:cus_roundAsCircle="true"<br/>
      app:cus_border_width="1dp"<br/>
      app:cus_roundedCornerRadius="5dp" <br/>
      app:cus_border_color="@color/color_cccccc"<br/>
      android:layout_height="@dimen/height_50" /><br/>
    </layout-part>

    <h5>参数说明:</h5>

    cus_roundAsCircle - 以圆形显示 true - 是, false - 矩形<br/>
    cus_border_width -  边框宽度 -  10dp
    cus_border_color -  边框颜色 - #cccccc
    cus_roundedCornerRadius - 四个角的圆形弧度 - cus_roundAsCircle = false 是生效


    <h4 id="titleView">HeadView  -  公用标题头<br/><br/>常用用法:</h4>
    在布局中使用:<br/>
    <layout-part>
      < com.android_base.core.views.HeadView
      android:layout_width="match_parent"
      android:layout_height="50dp"/><br/>
    </layout-part>


    <code-part>
      HeadView headView = new HeadView(this);<br/>
      // 设置左侧的点击事件和图标<br/>
      headView.setLeftImage(R.drawable.all_arrow, new View.OnClickListener() {<br/>
      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void onClick(View v) {<br/>
      &emsp;&emsp; &emsp;&emsp;// 左侧点击事件<br/>
      &emsp;&emsp;}<br/>
      });<br/>
      // 设置中间的标题<br/>
      headView.setCenterTitle("标题头");<br/>
      // 设置右边的图标和点击事件<br/>
      headView.setRightImage(R.drawable.all_arrow, new View.OnClickListener() {<br/>
      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void onClick(View v) {<br/>
      &emsp;&emsp;&emsp;&emsp;// 右边的点击事件<br/>
      &emsp;&emsp;}<br/>
      });<br/>
      // 设置右边的文字和点击事件<br/>
      headView.setRightText("添加", new View.OnClickListener() {<br/>
      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void onClick(View v) {<br/>
      &emsp;&emsp; &emsp;&emsp;// 右边的点击事件<br/>
      }<br/>
      });<br/>
    </code-part>
    <br/>

    <h3 id="bindView">数据绑定view:</h3>
    <p>
      介绍:<br/>
      根据请求的数据对以下状态自动处理:<br/>
      1. 无数据时默认显示的view<br/>
      2. 数据分页以及能否请求下页<br/>
      3. 无数据到有数据时的内容切换<br/>
      能够去除大量冗余代码,不需要判断分页显示<br/>
      <br/>
      BindListView,BindGridView,BindReycleView的用法一致，只介绍BindListView的用法<br/>
      <layout-part>
        < com.android_base.core.views.bindingViews.BindingListView
        android:layout_width="match_parent"
        android:layout_height="match_parent"/>
      </layout-part>

    <h4 id="bindList"> BindListView - 基于listView显示的绑定view</h4>

    <code-part>
      BindingListView bindingListView = new BindingListView(this);<br/>
      // 设置每页的数量，默认为10条<br/>
      bindingListView.setPageSize(10);<br/>
      // 设置适配器,这里的list必须使用bindingListView.getmList()否则判断设置不会生效<br/>
      bindingListView.setAdapter(new Adapter(mContext,bindingListView.getmList()));<br/>
      // 刷新，加载的接口<br/>
      bindingListView.setBindRefreshListener(new BindRefreshListener() {<br/>
      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void pullDownRefresh() {<br/>
      &emsp;&emsp;&emsp;&emsp;// 下拉刷新<br/>
      &emsp;&emsp;}<br/>

      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void pullUpToLoadMore() {<br/>
      &emsp;&emsp;&emsp;&emsp;// 上拉加载更多<br/>
      &emsp;&emsp;}<br/>
      });<br/>
      bindingListView.setNoContentClick(new View.OnClickListener() {<br/>
      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void onClick(View v) {<br/>
      &emsp;&emsp;&emsp;&emsp; // 无内容时的点击事件<br/>
      &emsp;&emsp;}<br/>
      });<br/>
      // 数据加载完成后进行绑定,list可以为null<br/>
      bindingListView.bindList(list);<br/>
      // 通知列表进行刷新<br/>
      bindingListView.notifyObserverDataChanged();<br/>
      // bindList和notifyObserverDataChanged()方法配套使用,<br/>
      // 如果只是局部刷新，请调用adapter.notifyDataSetChange()<br/>
    </code-part>

    <h4 id="menuList"> BindMenuListView - 基于SwipeMenuListView显示的绑定view</h4>

    <code-part>
      BindingMenuListView bindingMenuListView = new BindingMenuListView(mContext);<br/>
      bindingMenuListView.setAdapter(CustomBaseAdapter<br/>
      < String>(mContext,bindingMenuListView.getmList()));<br/><br/>
      // 创建菜单<br/>
      SwipeMenuCreator menuCreator = new SwipeMenuCreator() {<br/>
      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void create(SwipeMenu menu) {<br/>
      &emsp;&emsp;&emsp;&emsp;SwipeMenuItem item = SwipeMenuItem(mContext)<br/>
      &emsp;&emsp;&emsp;&emsp;item.setTitle("左移");<br/>
      &emsp;&emsp;&emsp;&emsp;item.setBackground(mContext.getResources().getDrawable(R.drawable.back_red));<br/>
      &emsp;&emsp;&emsp;&emsp;item.setWidth(200);<br/>
      &emsp;&emsp;&emsp;&emsp;item.setTitleColor(mContext.getResources().getColor(R.color.black));<br/>
      &emsp;&emsp;&emsp;&emsp;menu.addMenuItem(item);<br/>
      &emsp;&emsp;}<br/>
      };<br/>
      bindingMenuListView.getRefreshView().getRefreshableView().
      setMenuCreator(menuCreator);<br/><br/>
      // 设置菜单显示的方向<br/>
      bindingMenuListView.getRefreshView().getRefreshableView().
      setSwipeDirection(SwipeMenuListView.DIRECTION_LEFT);<br/><br/>
      // 设置item点击事件<br/>
      bindingMenuListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {<br/>
      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void onItemClick(AdapterView parent, View view, int position, long id) {<br/>
      <br/>
      &emsp;&emsp;}<br/>
      });<br/><br/>
      // 绑定显示数据<br/>
      bindingMenuListView.bindList(null);<br/>
      bindingMenuListView.notifyObserverDataChanged();<br/>
    </code-part>


    <h3 id="simpleUtils">简单工具类:</h3>



    <h4 id="broadCast"> BroadCastUtil - 注册和取消注册的广播</h4>
    <code-part>
      // 注册广播<br/>
      BroadCastUtil.registReceiver(this,receiver,"action");<br/>
      // 取消注册广播<br/>
      BroadCastUtil.unRegistReceiver(this,receiver);<br/>
    </code-part>

    <h4 id="classUtil"> ClassUtil - 类工具，根据Class对象生成类的实例</h4>

    <code-part>
      ClassUtil.getInstance(CustomClass.class);<br/>
    </code-part>

    <h4 id="convertUtil"> ConvertJSONFromMap - JSON,Map相互转换</h4>
    <code-part>
      // map转换成json<br/>
      JSONObject jsonObject = ConvertJSONFromMap.convertToJSON(hashMap);<br/>
      // json转换成map<br/>
      Map map = ConvertJSONFromMap.convertToMap(json);<br/>
    </code-part>

    <h4 id="notification"> NotificationUtils - 通知，发送通知</h4>
    <p> * 注意：在部分手机上，手机可能默认关闭了通知权限，需要手动打开 </p>

    <code-part>
      String title = "提示";
      NotificationUtils.Builder builder = new  NotificationUtils.Builder();
      builder.setTitle(title);
      builder.setContent("内容");
      builder.setSmallIcon(R.drawable.all_arrow);
      NotificationUtils.sendNofication(mContext,builder);
    </code-part>


    </p>


  </div>
</template>

<script>
  //  import * as Utils from '../../common/module/Utils'
  import line from '../../../common/pages/line.vue'
  import CodePart from '../../../common/pages/code_part.vue'
  import LayoutPart from '../../../common/pages/layout_part.vue'
  import $ from 'jquery'

  export default {
    components: {
      line,
      CodePart,
      LayoutPart
    },
    methods: {
      getTestData () {
        return 'testData'
      }
    },
    watch: {
      '$route': function (to, fromRoute) {
        console.log(to.query.elId + '  from:' + fromRoute.elId)
        if (to.query.elId) {
          let position = $('#' + to.query.elId).position().top
          position -= 100
          scrollTo(0, position)
        }
      }
    },
    mounted: function () {
    }
  }
</script>
