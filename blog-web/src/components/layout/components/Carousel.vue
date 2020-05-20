<template>
  <el-carousel class="carouselClass" height="270px" >
    <el-carousel-item v-for="item in images" :key="item">
      <el-image style="height: 270px ; width: 100%" fit="fill" :src="item" />
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Carousel extends Vue {
  @Prop() private images!: string []
  // data
  // methods
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .carouselClass{
    border-radius: 10px;
  }
</style>
