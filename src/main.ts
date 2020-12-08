import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import store from './store'
import methods from 'methods-remons'
import 'normalize.css/normalize.css'
import Vant from 'vant';
import 'vant/lib/index.css'
import api from './api'
import LeftBtn from '@/components/leftBtn.vue'
app.component('LeftBtn', LeftBtn)
app.config.globalProperties.$api = api
import { ImagePreview } from "vant";
app.config.globalProperties.ImagePreview = ImagePreview
app.config.globalProperties.$utils = methods
app.config.globalProperties.$store = useStore()
app.config.globalProperties.$route = useRoute()
app.config.globalProperties.NODE_ENV = process.env.NODE_ENV
app.use(store).use(router).use(Vant).mount('#app')
