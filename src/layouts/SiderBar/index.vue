<script setup lang="ts">
import { useAppStore, useTagStore } from '@/store'
import { computed, ref, watch } from 'vue'
import { RouteLocationNormalized, useRoute, useRouter } from 'vue-router'
import AppIcon from '@/components/AppIcon/index.vue'
import { set } from '@vueuse/core'
import SubMenu from './sub-menu.vue'

const appStore = useAppStore()
const tagStore = useTagStore()
const router = useRouter()
const route = useRoute()
const menu: any = computed(() => appStore.routes)
const openKeys = ref<string>('')
const selectedKeys = ref<string>('')

const selectBreadcrumb = (routes: any) => routes.map(({ path, meta: { title } }: any) => ({ title, path }))
const setMenuKeys = (r: RouteLocationNormalized) => {
  set(openKeys, r.matched.length >= 2 ? r.matched.slice(-2, -1)[0].path : '')
  set(selectedKeys, r.path)

  const currentMenu = selectBreadcrumb(r.matched)
  const tag = r.matched.slice(-1)[0]

  appStore.setBreadcrumbList(currentMenu)
  tagStore.addTag({ title: tag.meta.title, path: tag.path })
}

const onMenuClick = (key: string) => {
  router.push(key)
}

watch(() => route, setMenuKeys, {
  immediate: true,
  deep: true,
})
</script>
<template>
  <a-layout-sider class="app-sider" :collapsed="appStore.collapsed">
    <a-menu :style="{ height: '100%' }" :default-open-keys="[openKeys]" :auto-open-selected="true" :selected-keys="[selectedKeys]" breakpoint="xl" @menu-item-click="onMenuClick">
      <template v-for="nav in menu.children" :key="nav.path">
        <template v-if="nav?.children?.length === 1">
          <a-menu-item :key="nav.path" :title="nav.children[0].meta.title">
            <AppIcon :type="nav.children[0].meta.icon" />
            <span>{{ nav.children[0].meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <a-menu-item v-if="!nav.children" :key="nav.path" :path="nav.path" :title="nav.meta.title">
            <AppIcon :type="nav.meta.icon" />
            <span class="name">{{ nav.meta.title }} </span>
          </a-menu-item>
          <SubMenu v-else :nav="nav" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
