
<template>
  <div class="logo-wrapper">
    <el-image fit="fill" style="width:100%;height:50px;" src="./src/assets/BLOG.png"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Logo extends Vue {
  @Prop() private logUrl!: string
  // props
  // data
  // methods
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
