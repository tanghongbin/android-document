<template>
  <div>
    <h1 style="text-align: center">
      android 基盘文档说明
    </h1>
    <div style="width: 100%;height: 100%;">
      <div style="display: inline-block;width: 30%;background-color: chartreuse;height: inherit">
        <ul>
          <li v-for="item in list">{{item}}</li>
        </ul>
      </div>
      <div style="float: right;width: 69%;background-color: firebrick;height: inherit;">
        <ol>
          <li v-for="item in list">{{item}}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'androidDocument',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        list: [1, 23, 4, 5, 5, 6, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 23, 4, 5, 5, 6, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 23, 4, 5, 5, 6, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
