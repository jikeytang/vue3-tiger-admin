<script setup lang="ts">
import { routerArray } from '@/router'
import { useRouter } from 'vue-router'
import AppIcon from '@/components/AppIcon/index.vue'
import { routes } from '@/router'
import { useAppStore } from '@/store'

const appStore = useAppStore()
const router = useRouter()
const collapsed = ref(false)
const openedMenu = computed(() => router.currentRoute.value.matched[0].path)

const handleMenu = (path: string) => {
  setPath(path)
  router.push(path)
}

const setPath = (path: string) => {
  const current = getCurrentMenu(routes, path)
  current && appStore.setRoutes(current)
}

const getCurrentMenu = (routers: any, path: string) => {
  return routers.find((item: any) => item.path === path)
}

setPath(router.currentRoute.value.matched[0].path)
</script>
<template>
  <a-layout-sider style="width: 100px" class="app-root-sider">
    <a-menu theme="dark" :collapsed="collapsed" :default-selected-keys="[openedMenu]" @menu-item-click="handleMenu">
      <a-menu-item v-for="item in routerArray" :key="item.path">
        <AppIcon :type="item?.meta?.icon" />
        <span class="name">{{ item?.meta?.title }} </span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
