<template>
    <div id="flex-container">
        <LayoutBlocak v-for="item in data" :key="item.title" v-bind:title="item.title" v-bind:width="item.width" v-bind:height="item.height"/>
    </div>
    <router-link to="/login">去登陆</router-link>
    <router-link to="/jsonTranslate">到jsonTranslate路由</router-link>
</template>
    
<script>
  import LayoutBlocak from './components/LayoutBlock.vue'

export default {
  name: 'mIndex',
  data() {
    return {
      data: [
        { title: '天才专场', width: '100%', height: '10%'},
        { title: 'test1', width: '30%', height: '20%'},
        { title: 'test2', width: '30%', height: '20%'},
        { title: 'test3', width: '30%', height: '20%'},
        { title: 'test4', width: '30%', height: '20%'},
        { title: 'test5', width: '30%', height: '20%'},
        { title: 'test6', width: '30%', height: '20%'},
        { title: 'test7', width: '30%', height: '20%'},
        { title: 'test8', width: '30%', height: '20%'},
        { title: 'test9', width: '30%', height: '20%'}
      ]
    }
  },
  components: {
    LayoutBlocak
  }
}
</script>

<style>
    #flex-container{
      display: -webkit-flex;
      display: flex;
      /*-webkit-justify-content: space-between;
      justify-content: space-between;*/
      -webkit-justify-content: space-around;
      justify-content: space-around;
      flex-wrap:wrap;
      width: 100%;
      height: 100vh;
      background-color: lightgrey;
    }
    
    ::-webkit-scrollbar {
      width: 0px;
    }
     
    ::-webkit-scrollbar-track {
      background-color: none;
    }
     
    ::-webkit-scrollbar-thumb {
      background-color: none;
    }
     
    ::-webkit-scrollbar-thumb:hover {
      background-color: none;
    }
     
    ::-webkit-scrollbar-thumb:active {
      background-color: none;
    }
    </style>
    