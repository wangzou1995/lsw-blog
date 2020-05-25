<template>
  <basic-layout
    :menu="menu"
    :logo-url="louUrl"
    :user="user"
  >
<!--    轮播图-->
    <Carousel :images="images"/>
<!--    列表卡片-->
    <template v-for="card in cards">
      <BaseCard :card="card" :key="card.id"/>
    </template>
  </basic-layout>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import BasicLayout from '@/components/layout/BasicLayout.vue'
import { Card, Route, User } from '@/components/layout/data'
import { getMenu } from '@/services/menu'
import { getUserInfo } from '@/services/user'
import { getContentCards, getContentImage } from '@/services/content'
import Carousel from '@/components/layout/components/Carousel.vue'
import BaseCard from '@/components/layout/components/BaseCard.vue'
@Component({
  components: { BaseCard, Carousel, BasicLayout }
})
export default class BlogLayout extends Vue {
  @Provide() menu: Route [] = []
  @Provide() user: User = {}
  @Provide() louUrl = '../../../assets/BLOG.png'
  @Provide() images: string [] = []
  @Provide() cards: Card [] = []
  // props
  // data
  // methods
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

  getCards () {
    getContentCards().then(res => {
      this.cards = res.data.data
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
    this.getCards()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
