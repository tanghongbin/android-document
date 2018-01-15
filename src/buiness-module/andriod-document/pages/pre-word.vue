<template>
  <div style="width: 70%;">
    <h1>介绍</h1>

    <p style="height:1px;background-color: #cccccc"/>
    <p >它能做什么?</p>
    <p>这是一个android开发常用工具类库集合，只有你用不到的，没有你想不到的！小到公共标题头，列表刷新 ，大到
    模块开发，分层架构,让我们一起来了解一下这些常用的工具，减少平时开发的冗余代码，提高生产量,
         <br/>Let's go,让我们开始吧，</p>
    <!--<p style="text-align: center">下一节</p>-->


    <p>基盘地址:  <a target="_blank" href="https://bintray.com/tanghongbin/maven/base_library"> compile 'com.yiqihudong:base_library:2.3.0'</a></p>

    <p>图片库地址:  <a target="_blank" href="https://bintray.com/tanghongbin/maven/image-util"> compile 'com.yiqihudong:image-util:2.4.0'</a></p>

    <p>工具库地址:  <a target="_blank" href="https://bintray.com/tanghongbin/maven/common-utils"> compile 'com.tang:common-utils:1.2.1' </a></p>

    <p style="text-align: center;margin-top: 50px;"><a href="javascript:;" @click="turn" style="text-decoration: none">下一节</a></p>
  </div>
</template>

<script>
  import * as Utils from '../../common/module/Utils'
  export default {
    components: {},
    methods: {
      getTestData () {
        return 'testData'
      },
      turn () {
        Utils.turnToPage(this, {path: 'common-module'})
      }
    }
  }
</script>
