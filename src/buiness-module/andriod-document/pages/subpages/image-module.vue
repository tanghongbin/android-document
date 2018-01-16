<template>
  <div style="width: 70%;">
    <h2>图片库工具介绍</h2>
    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>
    <p># 它能做什么?</p>
    <p>
      &emsp;&emsp;图片单选，多选，拍照，裁剪,照片墙,轮播显示等
    </p>

    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>
    <p style="font-weight: bold">注意事项 - 必填项</p>
    <p> &emsp;android 7.0系统加入了Uri跨应用使用授权,所以在这里必须要进行一些声明<br/>
      &emsp;&emsp;1.上下文环境的初始化 - 在application的onCreate方法中调用 <br/>
      <code-part>
        ContextManager.init(this)
      </code-part>
      &emsp;&emsp;2.可使用的文件地址授权，在application的onCreate方法中调用<br/>
      <code-part>
        String customAuth = ImageSingleChooseActivity.SPECIAL_CUSTOM_URL_HEADER + "custom.auth"
        ImageSelectedHelper.initProviderAuth(this,customAuth)
      </code-part>
      授权的authroies必须以ImageSingleChooseActivity.SPECIAL_CUSTOM_URL_HEADER为前缀<br/>
      再加上自定义的字符串<br/><br/>

      &emsp;&emsp;3.同时还必须要在app主工程的AndroidManifest.xml文件下进行如下声明,<br/>
      这里的authorities必须和initProviderAuth()方法的authroies保持一致,<br/>
      name为自定义的FileProvider的子类,meta-data标签内的不用更改<br/>
      &emsp;&emsp;4. 在调用所有方法的时候不用额外进行权限请求，框架已经做了这部分操作<br/>
      <layout-part>
        < provider
        android:name=".module.CustomFileProvider"
        android:authorities="com.publishgallery.custom.auth.mgbapp.image"
        android:exported="false"
        android:grantUriPermissions="true">
        < meta-data
        android:name="android.support.FILE_PROVIDER_PATHS"
        android:resource="@xml/file_paths">< /meta-data>
        < /provider>
      </layout-part>

    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>

    <h4>使用方法:</h4>

    <h5 id="singleChoose">单选</h5>
    &emsp;&emsp; <br/>
    <code-part>
      /**<br/>
      * 选择单张照片，包括照相和图库 ，默认不裁剪<br/>
      *<br/>
      * @param context<br/>
      * @param callback<br/>
      */<br/>
      public static void selectSinglePic(Context context, ImageCropCallback callback) {<br/>
      &emsp;&emsp;selectSinglePic(context, false, callback);<br/>
      }<br/><br/>

      /**<br/>
      * 选择单张照片，包括照相和图库，但不做裁剪<br/>
      *<br/>
      * @param context<br/>
      * @param isNeedCrop 是否需要裁剪<br/>
      * @param callback<br/>
      */<br/>
      public static void selectSinglePic(final Context context, final boolean isNeedCrop, <br/>
      final ImageCropCallback callback) {<br/>
      &emsp;&emsp;selectSinglePic(context,isNeedCrop,null,callback);<br/>
      }<br/><br/>

      /**<br/>
      * 选择单张照片，包括照相和图库，可以设置裁剪比例<br/>
      *<br/>
      * @param context<br/>
      * @param isNeedCrop 是否需要裁剪<br/>
      * @param callback<br/>
      * @param options 裁剪比例<br/>
      */<br/>
      <br/>public static void selectSinglePic(final Context context, final boolean isNeedCrop,
      final CropOptions options, final ImageCropCallback callback) {<br/>
      requestPermission(context, new Callback() {<br/>
      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void onSuccess(Object o) {<br/>
      &emsp;&emsp; &emsp;&emsp;if (isNeedCrop) {<br/>
      &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;ImageChooseAndCropUtil.getInstance(context).chooseCropPic(context,callback,options);<br/>
      &emsp;&emsp; &emsp;&emsp;} else {<br/>
      &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;ImageChooseAndCropUtil.getInstance(context).choosePic(context,callback);<br/>
      &emsp;&emsp;}<br/>
      }<br/><br/>

      &emsp;&emsp;@Override<br/>
      &emsp;&emsp;public void onFailed(String message) {<br/>
      &emsp;&emsp; &emsp;&emsp;// if (callback != null) {<br/>
      &emsp;&emsp; &emsp;&emsp;//  callback.call(null);<br/>
      &emsp;&emsp;//                }<br/>
      &emsp;&emsp;}<br/>
      });<br/>
      }<br/><br/>

      /**<br/>
      * 从图库单选,默认不进行裁剪<br/>
      *<br/>
      * @param context<br/>
      * @param callback<br/>
      */<br/>
      public static void selectedSingleImageFromGallery(Context context, ImageCropCallback callback) {<br/>
      &emsp;&emsp;selectedSingleImageFromGallery(context, false, callback);<br/>
      }<br/>
    </code-part>


    <h5 id="multipleChoose">多选</h5>

    <code-part>
      /**<br/>
      * 选择多张图片<br/>
      *<br/>
      * @param context           上下文环境对象<br/>
      * @param selectPicCallback 照片选择后的回调<br/>
      */<br/>
      public static void selectMutiplePic(Context context, SelectPicCallback selectPicCallback) {<br/>
      &emsp;&emsp;selectMutiplePic(context, 0, selectPicCallback);<br/>
      }<br/><br/>


      /**<br/>
      * 选择多张图片<br/>
      *<br/>
      * @param context           上下文环境对象<br/>
      * @param maxCount          选择照片的最大数量<br/>
      * @param selectPicCallback 照片选择后的回调<br/>
      */<br/>
      public static void selectMutiplePic(Context context, int maxCount, SelectPicCallback selectPicCallback) {<br/>
      &emsp;&emsp;selectMutiplePic(context, maxCount, null, selectPicCallback);<br/>
      }<br/><br/>

      /**<br/>
      * 选择多张图片<br/>
      *<br/>
      * @param context           上下文环境对象<br/>
      * @param maxCount          选择照片的最大数量<br/>
      * @param selectPicCallback 照片选择后的回调<br/>
      * @param alreadySelectList 已经选择的照片集合<br/>
      */<br/>
      public static void selectMutiplePic(final Context context, final int maxCount,<br/>
      &emsp;&emsp;final ArrayList alreadySelectList,final SelectPicCallback selectPicCallback) {<br/>
      &emsp;&emsp;selectMutiplePic(context,maxCount,alreadySelectList,null,selectPicCallback);<br/>
      }<br/><br/>
    </code-part>


    <h5 id="camera">拍照</h5>


    <code-part>
      /**<br/>
      * 照相并且可判断是否可裁剪<br/>
      *<br/>
      * @param context<br/>
      * @param isNeedCrop 是否需要裁剪<br/>
      * @param callback   回调<br/>
      */<br/>
      public static void camera(final Context context, final boolean isNeedCrop, final ImageCropCallback callback) {<br/>
      &emsp;&emsp;camera(context,isNeedCrop,null,callback);<br/>
      }<br/><br/>
    </code-part>

    <h5 id="photoWall">照片墙</h5>


    <code-part>
      /**<br/>
      * 图片轮播<br/>
      *<br/>
      * @param context 上下文环境对象<br/>
      * @param images  显示的图片集合<br/>
      */<br/>
      public static void photoWall(Context context, ArrayList images) {<br/>
      &emsp;&emsp;photoWall(context, images, 0);<br/>
      }<br/>

      /**<br/>
      * 图片轮播<br/>
      *<br/>
      * @param context 上下文环境对象<br/>
      * @param images  显示的图片集合<br/>
      * @param position 开始显示的位置
      */<br/>
      public static void photoWall(Context context, ArrayList images,int position) {
      &emsp;&emsp;photoWall(context, images, position,null,null);
      }
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
