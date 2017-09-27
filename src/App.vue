<template>
  <div id="app">
    <div class="app_header_div">
      <span style="position: absolute;font-size: 15px;margin-top: 20px;right: 20px;">{{currentTime}}</span>
      <h3 style="text-align: center">
        android 基盘文档说明
      </h3>
    </div>
    <div class="app_left_menu">
      <MenuComponent>

      </MenuComponent>
    </div>
    <div class="app_main_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import MenuComponent from './buiness-module/andriod-document/pages/menu-component.vue'

  export default {
    name: 'app',
    components: {
      MenuComponent
    },
    data () {
      return {
        moment: moment,
        currentTime: '',
        timeInterval: ''
      }
    },
    mounted () {
      let that = this
      that.timeInterval = setInterval(function () {
        that.currentTime = moment().format('YYYY-MM-DD HH:mm:ss')
      }, 1000)
    },
    destroyed () {
      if (this.timeInterval) {
        clearInterval(this.timeInterval)
      }
    }
  }
</script>

<style lang="less">
  @import "./buiness-module/andriod-document/css/app";

</style>
