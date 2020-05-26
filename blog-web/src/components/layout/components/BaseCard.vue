<template>
  <el-card class="card" style="border-radius: 12px; height: 300px; min-width: 500px">
    <div class="header">
      <div slot="header">
        <a href="www.baidu.com">{{card.title}}</a>
      </div>
    </div>
    <div class="cardContent">
      <div class="cardLeft" :style="{width : card.images && card.images.length > 0 ?  '68%' : '100%'}">
        {{card.content}}
      </div>
      <div v-if="card.images && card.images.length > 0" class="cardRight">
        <el-image style="height: 160px;" fit="scale-down" :src="card.images[0]"/>
      </div>
    </div>
    <div class="cardFooter">
      <el-button type="text">{{card.userId}}</el-button>
      <el-button type="text" icon="el-icon-chat-line-round">{{card.messages}}</el-button>
      <el-button type="text" icon="el-icon-star-on" disabled>{{card.like}}</el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Card } from '@/components/layout/data'

@Component
export default class BaseCard extends Vue {
  // props
      @Prop() private card!: Card ;
  // data
  // methods
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .card {
  margin-top: 10px;
  .cardLeft{
    float: left;
    width: 68%;
  }
  .cardRight{
    float: left;
    width: 30%;
    height: 160px;
  }
  }
  .header {
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    height: 60px;
    line-height: 60px;
    a {
      color: black;
      text-decoration: none;
    }
  }
  .cardContent {
    margin-top: 5px;
    text-align: left;
    font-size: 14px;
    color: darkgrey;
    height: 160px;
    width: 100%;
    line-height: 60px;
  }
  .cardFooter{
    height: 10px;
    text-align: left;
    /*padding-left: 40px;*/
    color: darkgrey;
    width: 100%;
    line-height: 10px;
    margin-top: 5px;
    .el-button {
      color: darkgrey;
    }
  }
</style>
