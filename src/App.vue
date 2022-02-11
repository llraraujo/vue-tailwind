<template>
     <h1 class="md:text-5xl text-3xl mt-5 font-bold text-center text-purple-600 uppercase">General store</h1>
  <div id="nav"  class="text-center text-pink-600 block mx-auto mt-8 md:text-3xl text-xl uppercase border-2 border-blue-500 rounded-md mb-5">
    <router-link to="/" class="hover:underline">Home</router-link> |
    <router-link to="/cart" class="hover:underline">Cart</router-link> |
    <router-link to="/about" class="hover:underline">About</router-link> 
  </div>
  <router-view/>
</template>

<script>

export default {
  created() {
    if(!localStorage.getItem('products')) localStorage.setItem('products','[]')
    this.$store.dispatch('loadItens');  
    this.$store.dispatch('loadCart');      
  },
}
</script>

<style>

</style>
