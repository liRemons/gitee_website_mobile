import vue from "@vitejs/plugin-vue";
const { resolve } = require("path");
/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  base: "/fe_mobile/",
  plugins: [vue()],
  alias: [
    { find: '@', replacement: resolve(__dirname, 'src') }
  ],
  build: {
    assetsDir: "./static",
    // 配置入口文件
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'mindex.html'),
    //   }
    // },
  },
  server:{
    proxy: {
      "/api": {
        target: "https://remons.gitee.io/feq",
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, '/'),
      },
    },
  }
};
