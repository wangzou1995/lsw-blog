<template>
  <el-container ref="homePage" style="background-color: #ffffff">
    <el-header  style="border-bottom: 1px solid #e6e6e6" >
        <logo :log-url="logoUrl" class="logoClass" />
        <!-- 菜单-->
        <dynamic-menu class="menuClass" :menu="menu" style="height: 50px; border: none" />
        <el-input class="searchClass" placeholder="请输入内容">
        <i slot="suffix" class="el-input__icon el-icon-search" />
      </el-input>
        <right-header :user="user" class="rightHeaderClass"/>
    </el-header>
    <el-main>
      <div class="leftContent">
        <slot />
      </div>
      <el-backtop target=".el-main" :bottom="100">
        <div
          style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
        >
          UP
        </div>
      </el-backtop>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>

</template>

<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Ref, Emit } from 'vue-property-decorator'
import { Route, User } from '@/components/layout/data'
import DynamicMenu from '@/components/layout/components/DynamicMenu.vue'
import Logo from '@/components/layout/components/Logo.vue'
import RightHeader from '@/components/layout/components/RightHeader.vue'
import Carousel from '@/components/layout/components/Carousel.vue'

@Component({
  components: { Carousel, RightHeader, Logo, DynamicMenu }
})
export default class BasicLayout extends Vue {
  @Provide() clientHeight = 1
  // props
  @Prop() menu!: Route
  @Prop() logoUrl!: string
  @Prop() user!: User
  @Ref() homePage!: any
  // data
  // methods
  changeFixed (clientHeight: number) { // 动态修改样式
    // console.log(clientHeight);
    // console.log(this.$refs.homePage.$el.style.height);
    this.homePage.$el.style.height = clientHeight - 20 + 'px';
  }

  // computed
  // 生命周期
  mounted () {
    // 获取浏览器可视区域高度
    this.clientHeight = document.documentElement.clientHeight
    // document.body.clientWidth;
    // console.log(self.clientHeight);
    window.onresize = () => {
      this.clientHeight = document.documentElement.clientHeight
    }
  }

  @Watch('clientHeight')
  onChangeValue (newVal: number, oldVal: number) {
    // todo...
    console.log(oldVal)
    this.changeFixed(newVal)
  }
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
