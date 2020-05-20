<template>
  <el-menu  class="el-menu-demo" mode="horizontal" >
    <template v-for="item in menu">
      <template v-if="item.children&&item.children.length > 0">
        <el-submenu :index="item.id" :key="item.id">
          <template slot="title">
            <i :class="item.icon" />
            <span slot="title">{{item.name}}</span>
          </template>
          <dynamic-menu-tree v-for="node in item.children" :key="node.id" :menu="node" />
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.id" :key="item.id">
          <i :class="item.icon" />
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { Route } from '@/components/layout/data'
import DynamicMenuTree from '@/components/layout/components/DynamicMenuTree.vue'
@Component({
  components: { DynamicMenuTree }
})
export default class DynamicMenu extends Vue {
  // props
  @Prop() private menu!: Route []
  // data
  // methods
  // computed
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
