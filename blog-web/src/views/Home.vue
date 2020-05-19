<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="onclick">sss</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import request from '@/util/request'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    onclick () {
      request.get('/user').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      console.log(1)
    }
  }
}
</script>
