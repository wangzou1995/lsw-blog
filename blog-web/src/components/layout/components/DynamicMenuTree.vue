<template>
  <el-submenu v-if="menu.children && menu.children.length >= 1" :index="menu.id">
    <template slot="title">
      <i :class="menu.icon" />
      <span slot="title">{{menu.name}}</span>
    </template>
    <dynamic-menu-tree v-for="node in menu.children" :key="node.id" :menu="node" />
  </el-submenu>
  <el-menu-item v-else :index="menu.id">
    <i :class="menu.icon" />
    <span slot="title">{{menu.name}}</span>
  </el-menu-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Route } from 'vue-router'
@Component
export default class DynamicMenuTree extends Vue {
    // props
    @Prop() private menu!: Route
    // data
    // methods
    // computed
    created () {
      console.log('DynamicMenuTree: {}', this.menu)
    }
}
</script>

<style scoped>

</style>
