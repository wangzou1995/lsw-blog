<template>
  <basic-layout :menu="menu" :logo-url="louUrl" :user="user" :images="images"/>
</template>

<script lang="ts">
import { Component, Emit, Provide, Vue } from 'vue-property-decorator'
import BasicLayout from '@/components/layout/BasicLayout.vue'
import { Route, User } from '@/components/layout/data'
import { getMenu } from '@/services/menu'
import { getUserInfo } from '@/services/user'
import { getContentImage } from '@/services/content'
@Component({
  components: { BasicLayout }
})
export default class BlogLayout extends Vue {
  @Provide() menu: Route [] = []
  @Provide() user: User = {}
  @Provide() louUrl = '../../../assets/BLOG.png'
  @Provide() images: string [] = []
  // props
  // data
  // methods
  @Emit()
  getMenuData () {
    getMenu().then(res => {
      this.menu = res.data.data
      console.log('BlogLayout', this.menu)
    }).catch(
      err => {
        console.log(err)
      }
    )
  }

  getUser () {
    getUserInfo().then(res => {
      this.user = res.data.data
      console.log('BlogLayout', this.menu)
    }).catch(
      err => {
        console.log(err)
      }
    )
  }

  getImages () {
    getContentImage().then(res => {
      this.images = res.data.data
      console.log('BlogLayout', this.menu)
    }).catch(
      err => {
        console.log(err)
      }
    )
  }

  // computed
  created () {
    this.getMenuData()
    this.getUser()
    this.getImages()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
