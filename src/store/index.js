import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    items:[],
    cart:[],
    
    
  },
  mutations: {
    loadItens(state, items){   
      state.items = items;
      console.log('state.items: ',state.items)
      
        
    },
    addToCart(state, item){
      item.quantity = 1;
      item.inCart = true;
      state.cart.push(item)
      localStorage.setItem('products', (JSON.stringify(state.cart)))

     },
     removeFromCart(state, item){
       item.inCart = false;
       state.cart = state.cart.filter(el => el.id != item.id)
       localStorage.setItem('products', (JSON.stringify(state.cart)))
     },
     loadCart(state){
             state.cart = JSON.parse(localStorage.getItem('products'));
             console.log('state.cart: ',state.cart)
             
     }


  },
  actions: {
    loadItens({ commit } ){
      axios.get('https://fakestoreapi.com/products').then((response) =>  commit('loadItens',response.data))
      
   },
   addToCart({commit}, item){
    commit('addToCart', item)
   },
   removeFromCart({commit}, item){
    commit('removeFromCart', item)
  },
  loadCart({commit}){
    commit('loadCart')
  }

},
  modules: {
  }
})
