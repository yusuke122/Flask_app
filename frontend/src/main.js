import { createApp/*,Vue*/ } from 'vue'
//import /*Vue,*/ { createApp } from '@vue/compat';
import App from './App.vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//import Sidebar from './components/SideBar.vue;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';


//Vue.use(BootstrapVue);
//Vue.use(IconsPlugin);
//const app = createApp(App);
//app.mount('#app');
createApp(App).mount('#app')
