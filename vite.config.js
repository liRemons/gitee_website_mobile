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
  },
  server:{
    proxy: {
      "/api": {
        target: "https://remons.gitee.io/feq",
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, '/'),
      },
    },
  }
};
