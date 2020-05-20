<template>
  <div >
  <el-dropdown style="padding-left: 20px; text-align: center">
    <el-avatar  shape="circle" size="small" :src="user.avatar" />
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <el-button  type="primary" class="btClass">写文章</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { User } from '@/components/layout/data'

@Component
export default class RightHeader extends Vue {
  @Prop() private user?: User ;
  // props
  // data
  // methods
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .avatarClass {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .btClass {
    /*margin-bottom: 10px;*/
    margin-left: 20px;
  }
</style>
