<template>
  <!--HelloWorld msg="Welcome!! to Your Vue.js App"/-->
  <SideBar title="だぞ💛"/>
  <MainPage title=""/>
  <FooterArea />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import SideBar from './components/SideBar.vue'
import MainPage from './components/MainPage.vue'
import FooterArea from './components/FooterArea.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    SideBar,
    MainPage,
    FooterArea
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
