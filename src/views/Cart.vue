<template>
    <div class="cart h-full grid lg:grid-cols-4 grid-cols-1 mt-5">
             <div class="col-span-3"> 
                <template v-if="this.cart.length">
                <div v-for="item of this.cart" :key="item.id" class="p-2 h-18 grid grid-cols-5 items-center border-b-2 border-black">
                    <img :src="item.image" :alt="item.description" class="lg:w-auto lg:h-24 w-18 h-28  bg-black mx-auto col-span-1">
                    <p class="col-span-3 text-center"> {{item.title + ' |   U$' + item.price.toFixed(2)}}</p>
                    <div class="col-span-1 mx-auto">
                        <button class="mx-2 mt-auto bg-gray-300 md:h-6 md:w-6 sm:p-1 rounded items-center" @click="subItem(item)" :disabled="item.quantity==1"> - </button>
                        {{item.quantity}}
                        <button class="mx-2 mt-auto  bg-gray-300 md:h-6 md:w-6 sm:p-1 rounded items-center" @click="addItem(item)"> + </button>
                        <p class="mt-3 text-center"><button class="underline mt-auto  mx-auto text-red-600 md:font-bold text-0.5xl" @click="this.$store.dispatch('removeFromCart', item)">remove from cart</button></p>
                    </div>
                </div>
                </template> 
                <template v-else >
                    <div class="h-full flex justify-center mx-auto mt-5">
                        <h1 class="text-5xl text-center">your cart is empty :'(</h1>
                    </div>
                </template>
             </div>
            <div class="total text-2xl text-green-500 font-bold md:col-span-1 lg:border-black lg:border-l-2 flex items-center sm:mt-2" v-if="this.cart.length">
                <p class="mx-auto p-2 border-2 border-blue-500 shadow rounded-md mt-5">{{'Total: U$ ' + total()}}</p>
            </div>
            
    </div>
</template>

<script>
import '../store/index.js'
import { mapState } from "vuex";
export default {
    name: 'Cart',
    computed: mapState(['cart']),
    methods:{
        total(){
            let sum = 0;
            this.cart.forEach(el => sum += el.price*el.quantity)
            return sum.toFixed(2);

        },
        addItem(item){
            item.quantity++;
        },
        subItem(item){
            item.quantity--;
        }
    }
}
</script>

<style>

</style>