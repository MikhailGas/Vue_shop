<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods:{
        ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'GET_CART_FROM_API',
        ]),
        
    },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
    this.GET_CART_FROM_API();
  },
}
</script>

<style lang="css">
  
  @import './assets/fonts/css/all.css';
  @import './assets/css/style.css';
</style>
