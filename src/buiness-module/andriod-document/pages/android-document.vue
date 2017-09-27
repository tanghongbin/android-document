<template>
  <div>
    <div style="width: 100%;height: 100%;">
      <div style="background-color: aqua">
        <ul>
          <li v-for="item in list">{{item}}</li>
        </ul>
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
