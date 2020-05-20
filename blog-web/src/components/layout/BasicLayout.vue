<template>
  <el-container>
    <el-header style="border-bottom: 1px solid #e6e6e6">
        <logo :log-url="logoUrl" class="logoClass" />
        <!-- 菜单-->
        <dynamic-menu class="menuClass" :menu="menu"  />
        <el-input class="searchClass" placeholder="请输入内容">
        <i slot="suffix" class="el-input__icon el-icon-search" />
      </el-input>
        <right-header :user="user" class="rightHeaderClass"/>
    </el-header>
    <el-main>
        <div class="leftContent">
            <Carousel class="carouselClass" :images="images" />
        </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Route, User } from '@/components/layout/data'
import DynamicMenu from '@/components/layout/components/DynamicMenu.vue'
import Logo from '@/components/layout/components/Logo.vue'
import RightHeader from '@/components/layout/components/RightHeader.vue'
import Carousel from '@/components/layout/components/Carousel.vue'
@Component({
  components: { Carousel, RightHeader, Logo, DynamicMenu }
})
export default class BasicLayout extends Vue {
  // props
  @Prop() private menu!: Route
  @Prop() private logoUrl!: string
  @Prop() private user!: User
  @Prop() private images!: string []
  // data
  // methods
  // computed
  // 生命周期
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @height : 60px;
  @border : 1px solid #e6e6e6;
  .logoClass {
    float: left;
    width: 10%;
    line-height: @height;
    height: @height;
  }
  .menuClass {
    float: left;
    width: 25%;
    line-height: @height;
    height: @height;
  }
  .searchClass{
    float: left;
    width: 20%;
    line-height: @height;
    height: @height;
  }
  .rightHeaderClass {
    float: right;
    line-height: @height;
    height: @height;
  }
  .leftContent {
    width: 50%;
    float: left;
    margin-left: 200px;
  }
  .carouselClass {
    width: 100%;
    height: 270px;
  }
</style>
