import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
      fetch('http://localhost:3000/products')
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
      fetch('http://localhost:3000/cart')
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
                       
            fetch('http://localhost:3000/cart', {
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
        }else{
          state.cart.forEach(element => {
            if (element.id == product.id){

              product.quantity++;
              fetch('http://localhost:3000/cart/' + product.id, {
                method: 'patch',
                headers: {
                  
                'Content-Type': 'application/json',
                
                  
                },
                
                
                body: JSON.stringify({quantity: 1}),
                mode: 'cors'
              })
              .then(response => {
                console.log(response.status);
                return response.json();
              })
              .then(data => {
                dispatch('GET_CART_FROM_API')
                
              })
              .catch(err => {
                console.log(err);
                
              })
              
            }else{
              /* product.quantity = 1;
              
              
              fetch('http://localhost:3000/cart', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
              })
              .then(response => {
                console.log(response.status);
                return response.json();
              })
              .then(data => {
                dispatch('GET_CART_FROM_API')
                
              })
              .catch(err => {
                console.log(err);
                
              })
              */
            }
          }); 
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
