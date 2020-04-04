import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const HOST ='http://localhost:8080'
export default new Vuex.Store({
  state: {
    products:[],
    cart:[],
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_CART: (state, products) => {
      state.cart = products;
    },

  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      fetch(HOST + '/products')
      .then(response => {
        return response.json();
      })
      .then(data => {
        commit('SET_PRODUCTS', data)
      })
      .catch(err => {
        console.log(err);
        
      })
    },
    GET_CART_FROM_API({commit}) {
      fetch(HOST + '/cart')
      .then(response => {
        return response.json();
      })
      .then(data => {
        commit('SET_CART', data)
      })
      .catch(err => {
        console.log(err);
        
      })
    },
    
    ADD_TO_CART({dispatch, state}, product) {
      if(!state.cart.length){
      product.quantity = 1;
                    
        fetch(HOST + '/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        })
        .then(response => {
          
          return response.json();
        })
        .then(data => {
          dispatch('GET_CART_FROM_API')
          
        })
        .catch(err => {
          console.log(err);
          
        })
      }else{
        let isProduct = false;
        this.state.cart.forEach(el => {
          if(el.id == product.id){
            isProduct = true;
          }
        })
        
        if (isProduct){
          isProduct = false;
          product.quantity++;
          console.log(product)
          let change = {
            quantity: product.quantity,
          }
          fetch(HOST + '/cart/' + product.id, {
            method: 'PATCH',
            
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(change),
          })
          .then(response => {
            return response.json();
          })
          .then(data => {
            dispatch('GET_CART_FROM_API')
          })
          .catch(err => {
            console.log(err);
          })
          
        }else{
          product.quantity = 1;
          fetch(HOST + '/cart', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
          })
          .then(response => {
            return response.json();
          })
          .then(data => {
            dispatch('GET_CART_FROM_API')
            
          })
          .catch(err => {
            console.log(err);
            
          })
          
        } 
      
      }
    },
  },
  
  getters:{
    PRODUCTS(state){
      return state.products
    },
    CART(state){
      return state.cart
    }
  }
})
