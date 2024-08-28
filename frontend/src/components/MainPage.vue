<template>

<button 
type="button" 
class="btn btn-primary" 
data-bs-toggle="modal" 
data-bs-target="#exampleModal"
onclick="updateCount()"
>
  MainPage
</button>
<i class="bi bi-ban"></i>

</template>
  
  <script>
  //import { ref, onMounted, watch } from 'vue';

  export default {
    name: 'MainPage',
    props: {
      title: String
    },
    data() {
    return {
      count: 0
    };
  },
  watch: {
    count(newVal, oldVal) {
      // count が変わるたびに実行される処理
      console.log(`Count changed from ${oldVal} to ${newVal}`);
    }
  },
  mounted() {
    // コンポーネントがマウントされたときに実行される処理
    console.log('Component is mounted');
  },
  updated() {
    // データが変更されてコンポーネントが更新されたときに実行される処理
    console.log('Component is updated');
  },
  computed: {
    doubledCount() {
      // count が変わるたびに自動的に再計算される
      return this.count * 2;
    }
  }
  }
  function updateCount(count){
    count++
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  