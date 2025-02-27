import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import ViteImages from 'vite-plugin-vue-images'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default ({ mode }): UserConfigExport => {
  // eslint-disable-next-line no-undef
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_BASE_URL } = env

  return defineConfig({
    base: VITE_BASE_URL,
    define: {
      'process.env': {},
    },
    plugins: [
      vue(),
      // setup name 增强
      VueSetupExtend(),
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
      // 自动导包
      AutoImport({
        // dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
        imports: [
          // 插件预设支持导入的api
          'vue',
          'vue-router',
          'pinia',
        ],
      }),
      // 自动导入图片
      ViteImages({
        dirs: ['src/assets'], // 指明图片存放目录
      }),
      UnoCSS(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/_variables.scss";@import "@/styles/_mixins.scss";`,
        },
      },
    },
    server: {
      hmr: { overlay: false }, // 为 false 可以禁用服务器错误遮罩层
      port: 5127,
      open: false,
      host: '0.0.0.0',
    },
    // proxy: {
    //   '/api': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
    build: {
      cssCodeSplit: false, // 整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
      rollupOptions: {
        // 指定生成静态资源的存放路径
        output: {
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
          assetFileNames: '[ext]/[name].[hash].[ext]',
        },
      },
    },
  })
}
