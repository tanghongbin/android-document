<template>
  <div style="width: 70%;">
    <h2>常用工具库介绍</h2>
    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>
    <p># 它能做什么?</p>
    <p>
      &emsp;&emsp;常用工具的集合
    </p>
    <div style="width: 100%;height: 1px;background-color: #cccccc;"></div>
    <p>

    <h4 id="activityUtil">Activity工具 -  ActivityUtils</h4>
    <code-part>
      1.isActivityExists - activity是否存在<br/>
      2.launchActivity - 启动activity<br/>
    </code-part>

    <h4 id="appUtil">app工具 -  AppUtils</h4>
    <code-part>
      1.getAppVersionName - 获取App版本号<br/>
      2.getAppVersionCode - 获取App版本码<br/>
    </code-part>

    <h4 id="cleanUtil">清除工具 -  CleanUtils</h4>
    <code-part>
      1.cleanInternalCache - 清除内部缓存<br/>
      2.cleanInternalFiles - 清除内部文件<br/>
      3.cleanInternalDbs - 清除内部数据库<br/>
      4.cleanInternalDbByName - 根据名称清除数据库<br/>
      5.cleanInternalSP - 清除内部SP<br/>
      6.cleanExternalCache - 清除外部缓存<br/>
      7.cleanCustomCache - 清除自定义目录下的文件<br/>
      8.cleanCustomCache - 清除自定义目录下的文件<br/>
    </code-part>

    <h4 id="clipBoardUtil">剪切板工具 -  ClipboardUtils</h4>
    <code-part>
      1.copyText - 复制文本到剪贴板<br/>
      2.getText - 获取剪贴板的文本<br/>
      3.copyUri - 复制uri到剪贴板<br/>
      4.getUri - 获取剪贴板的uri<br/>
      5.copyIntent - 复制意图到剪贴板<br/>
      6.getIntent - 获取剪贴板的意图<br/>
    </code-part>

    <h4 id="closeUtil">关闭流工具 -  CloseUtils</h4>
    <code-part>
      1.CloseUtils - CloseUtils
      2.closeIOQuietly - 安静关闭IO
    </code-part>

    <h4 id="constantUtil">常量工具 -  ConstUtils</h4>

    <h4 id="convertUtil">字母转换工具 -  ConvertUtils</h4>

    <h4 id="deviceUtil">设备工具 -  DeviceUtils</h4>
    <code-part>
      1.getSDKVersion - 获取设备系统版本号<br/>
      2.getAndroidID - 获取设备AndroidID<br/>
      3.getMacAddress - 获取设备MAC地址<br/>
      4.getMacAddressByWifiInfo - 获取设备MAC地址<br/>
      5.getMacAddressByNetworkInterface - 获取设备MAC地址<br/>
      6.getModel - 获取设备型号<br/>
    </code-part>

    <h4 id="emptyUtil">判空的工具 -  EmptyUtils</h4>
    <code-part>
      1.isEmpty - 判断对象是否为空<br/>
      2.isNotEmpty - 判断对象是否非空<br/>
    </code-part>


    <h4 id="encryptUtil">EncodeUtils -  编码解码相关工具类</h4>
    <code-part>
      1.urlEncode - URL编码<br/>
      2.urlDecode - URL解码<br/>
      3.base64Encode -  Base64编码<br/>
      4.base64Encode2String - Base64编码<br/>
      5.base64UrlSafeEncode - Base64URL安全编码<br/>
      6.htmlEncode - Html编码<br/>
      7.htmlDecode - Html解码<br/>
    </code-part>

    <h4 id="decodeUtil">EncryptUtils -  加密解密相关的工具类</h4>
    <code-part>
      1.encryptMD2ToString - MD2加密<br/>
      2.encryptMD2 - MD2加密<br/>
      3.encryptMD5ToString - MD5加密<br/>
      4.encryptMD5ToString - MD5加密<br/>
      5.encryptMD5File - MD5加密文件<br/>
      6.encryptSHA1ToString - SHA1加密<br/>
    </code-part>


    <h4 id="fileUtil">FileUtils -  文件相关工具类</h4>
    <code-part>
      1.getFileByPath - 根据文件路径获取文件<br/>
      2.isFileExists - 判断文件是否存在<br/>
      3.rename - 重命名文件<br/>
      4.isDir - 判断是否是目录<br/>
      5.isFile - 判断是否是文件<br/>
      6.createOrExistsDir - 判断目录是否存在，不存在则判断是否创建成功<br/>
      7.createOrExistsFile - 判断文件是否存在，不存在则判断是否创建成功<br/>
      8.createFileByDeleteOldFile - 判断文件是否存在，存在则在创建之前删除<br/>
      9.copyOrMoveDir - 复制或移动目录<br/>
      10.copyOrMoveFile - 复制或移动文件<br/>
      11.deleteDir - 删除目录<br/>
      12.deleteFile - 删除文件<br/>
      13.deleteFilesInDir - deleteFilesInDir<br/>
      14.getDirSize - 获取目录大小<br/>
      15.getFileSize - 获取文件大小<br/>
    </code-part>

    <h4 id="intentUtil">IntentUtils -  意图相关工具类</h4>

    <h4 id="keyBoardUtil">KeyboardUtils -  键盘相关工具类</h4>
    <code-part>
      1.hideSoftInput - 动态隐藏软键盘<br/>
      2.showSoftInput - 动态显示软键盘<br/>
      3.toggleSoftInput - 切换键盘显示与否状态<br/>
    </code-part>

    <h4 id="networkUtil">NetworkUtils -  网络相关工具类</h4>
    <code-part>
      1.openWirelessSettings - 打开网络设置界面<br/>
      2.getActiveNetworkInfo - 获取活动网络信息<br/>
      3.isConnected - 判断网络是否连接<br/>
      4.isAvailableByPing - 判断网络是否可用<br/>
      5.getDataEnabled - 判断移动数据是否打开<br/>
      6.setDataEnabled - 打开或关闭移动数据<br/>
      7.is4G - 判断网络是否是4G<br/>
      8.getWifiEnabled - 判断wifi是否打开<br/>
      9.setWifiEnabled - 打开或关闭wifi<br/>
      10.isWifiConnected - 判断wifi是否连接状态<br/>
      11.isWifiAvailable - 判断wifi数据是否可用<br/>
      12.getNetworkOperatorName - 获取网络运营商名称<br/>
      13.getNetworkType - 获取当前网络类型<br/>
      14.getIPAddress - 获取IP地址<br/>
      15.getDomainAddress - 获取域名ip地址<br/>
    </code-part>


    <h4 id="phoneUtil">PhoneUtils -  手机相关工具类</h4>
    <code-part>
      1.isSimCardReady - 判断sim卡是否准备好<br/>
      2.dial - 跳至拨号界面<br/>
      3.call - 拨打电话<br/>
      4.sendSms - 跳至发送短信界面<br/>
      5.sendSmsSilent - 发送短信<br/>
      6.getAllContactInfo - 获取手机联系人<br/>
    </code-part>


    <h4 id="pinyinUtil">PinyinUtils -  拼音相关工具类</h4>
    <code-part>
      1.getPinyinFirstLetter - 获取第一个汉字首字母<br/>
      2.ccs2Pinyin - 汉字转拼音<br/>
      3.ccs2Pinyin - 汉字转拼音<br/>
    </code-part>

    <h4 id="regexUtil">RegexUtils -  正则相关工具类</h4>

    <h4 id="screenUtil">ScreenUtils -  屏幕相关工具类</h4>
    <code-part>
      1.getScreenWidth - 获取屏幕的宽度<br/>
      2.getScreenHeight - 获取屏幕的高度<br/>
      3.captureWithStatusBar - 获取当前屏幕截图，包含状态栏<br/>
      4.isScreenLock - 判断是否锁屏<br/>
    </code-part>

    <h4 id="sdcardUtil">SDCardUtils -  SD卡相关工具类</h4>
    <code-part>
      1.isSDCardEnable - 判断SD卡是否可用<br/>
      2.getSDCardPath - 获取SD卡路径<br/>
      3.getDataPath - 获取SD卡data路径<br/>
      4.getFreeSpace - 获取SD卡剩余空间<br/>
      5.getSDCardInfo - 获取SD卡信息<br/>
    </code-part>


    <h4 id="serviceUtil">ServiceUtils -  服务相关工具类</h4>
    <code-part>
      1.startService - 启动服务<br/>
      2.stopService - stopService<br/>
      3.bindService - 绑定服务<br/>
      4.unbindService - 解绑服务<br/>
      5.isServiceRunning - 判断服务是否运行<br/>
    </code-part>


    <h4 id="sizeUtil">SizeUtils -  尺寸相关工具类</h4>
    <code-part>
      1.dp2px - dp转px<br/>
      2.px2dp - px转dp<br/>
      3.sp2px - sp转px<br/>
      4.px2sp - px转sp<br/>
    </code-part>


    <h4 id="strUtil">StringUtils -  字符串相关工具类</h4>
    <code-part>
      1.isEmpty - 判断字符串是否为null或长度为0<br/>
      2.isSpace - 判断字符串是否为null或全为空格<br/>
      3.equals - 判断两字符串是否相等<br/>
      4.equalsIgnoreCase - 判断两字符串忽略大小写是否相等<br/>
      5.lowerFirstLetter - 首字母小写<br/>
    </code-part>

    <h4 id="threadPoolUtil">ThreadPoolUtils -  线程池相关工具</h4>
    <code-part>
      1.execute - 在未来某个时间执行给定的命令<br/>
      2.shutDown - 待以前提交的任务执行完毕后关闭线程池<br/>
      3.isTerminated - 关闭线程池后判断所有任务是否都已完成<br/>
      4.awaitTermination - 请求关闭、发生超时或者当前线程中断<br/>
      5.submit - 提交一个Callable任务用于执行<br/>
      6.schedule - 延迟执行Runnable命令<br/>
    </code-part>

    <h4 id="imageUtil">图片处理工具 -  ImageUtils</h4>
    功能:<br/>
    <code-part>
      1.bitmap2Bytes() - bitmap转byteArray数组<br/>
      2.bytes2Bitmap() - byteArray转bitmap<br/>
      3.drawable2Bitmap() - drawable转bitmap<br/>
      4.bitmap转drawable() - bitmap转drawable<br/>
      5.drawable2Bytes() - drawable转byteArr<br/>
      6.view2Bitmap - view转Bitmap<br/>
      7.calculateInSampleSize - 计算采样大小<br/>
      8.getBitmap() - 从File,url,inputStream,data[]获取bitmap<br/>
      9.scale() - 缩放图片<br/>
      10.clip() - 裁剪图片<br/>
      11.skew() - 倾斜图片<br/>
      12.rotate() - 旋转图片<br/>
      13.getRotateDegree() - 获取图片旋转角度<br/>
      14.toRound() - 转为圆形图片<br/>
      15.toRoundCorner - 转为圆角图片<br/>
      16.fastBlur() - 快速模糊<br/>
      17.renderScriptBlur - renderScript模糊图片<br/>
      18.stackBlur - stack模糊图片<br/>
      19.addFrame - 添加颜色边框<br/>
      20.addReflection - 添加倒影<br/>
      21.addTextWatermark - 添加文字水印<br/>
      22.addImageWatermark - 添加图片水印<br/>
      23.toAlpha - 转为alpha位图<br/>
      24.toGray - 转为灰度图片<br/>
      25.save - 保存图片<br/>
      26.compressByScale - 按缩放压缩<br/>
      27.compressByQuality - 按质量压缩<br/>
      28.compressBySampleSize - 按采样大小压缩<br/>
    </code-part>


    <h4 id="zipUtil">ZipUtils -  压缩相关工具类</h4>
    <code-part>
      1.zipFiles - 批量压缩文件<br/>
      2.zipFile -压缩文件<br/>
      3.unzipFiles - 批量解压文件<br/>
      4.批量解压文件 - 解压文件<br/>
      5.unzipFileByKeyword - unzipFileByKeyword<br/>
    </code-part>


    <h4 id="uriUtil">ConvertUriToFile -  Uri转换文件地址工具</h4>
    <code-part>
      1.getRealPathFromURIKK - 从URI获取真实路径<br/>
    </code-part>


    <h4 id="luarUtil">luarAndSolarUtil -  农历-阳历转换工具</h4>
    <code-part>
      1.lunarToSolar - 将农历日期转换为公历日期<br/>
      2.solarToLunar - 将公历日期转换为农历日期，且标识是否是闰月<br/>
      3.daysInMonth - 传回农历year年month月的总天数<br/>
      4.daysInMonth - 传回农历year年month月的总天数<br/>
      5.daysInLunarYear - 传回农历 year年的总天数<br/>
      6.daysInLunarMonth - 传回农历 year年month月的总天数，总共有13个月包括闰月<br/>
    </code-part>


    <h4 id="shakeUtil">ShakeListenerUtils -  震动监听工具</h4>



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
