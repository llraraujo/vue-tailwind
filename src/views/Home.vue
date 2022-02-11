<template>
  <div class="home">
    <div class="items grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  mx-auto mt-15 gap-2 flex-wrap">
        <default-box v-for="item of this.items" :key="item.id" :class="{selected: checkCart(item.id)}"> 
            <img :src="item.image" :alt="item.description" class="md:w-auto md:h-24 w-auto h-28  mx-auto mb-5">
            <div class="h-20 mt-2">
              <p class="text-sm text-center font-bold h-16 overflow-y-auto">{{item.title}}</p>
              <p class="text-sm text-center mt-4 font-bold text-red-900">{{'U$ ' + item.price.toFixed(2)}}</p>
            </div>
            <div class="mt-16 flex justify-center">
              <button v-if="!checkCart(item.id)" class="border-2 p-1 border-black rounded-md  hover:opacity-50 mt-1 text-white bg-green-400 font-bold" @click="this.$store.dispatch('addToCart', item)">add to cart </button>
              <button v-else class="p-2 underline text-red-700 font-bold" @click="this.$store.dispatch('removeFromCart',item)">Remove from cart</button>
            </div>
        </default-box>      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src



import DefaultBox  from '../assets/shared/DefaultBox.vue'
import { mapState } from 'vuex'
import '../store/index.js'

export default {
  name: 'Home',
  computed: mapState(['items','cart']),
  components: { DefaultBox },
  methods:{
    checkCart(id){
      if(this.cart.find(el => el.id == id)) return true;
      return false; 
    }
  }

}
</script>

<style>
.selected{
  border-color: cyan;
  opacity: 0.75;
}
</style>