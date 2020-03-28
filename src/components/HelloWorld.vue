<template>
  <div class="todos">
    <h3>Список дел</h3>
    <ul>
      <todos-item 
        v-for="(item, index) in PRODUCTS"
        :key="index"
        :item="item"
      />
    </ul>
  </div>
    
</template>

<script>
import todosItem from '@/components/TodosItem.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    todosItem,
  },
  computed:{
    ...mapGetters([
      'PRODUCTS',
    ])
  },
  modules:{
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }

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
