<template>
  <div class="default-box">
      <slot />
      
  </div>
</template>


<style>
.default-box{
    @apply mt-5  mx-auto inline-block p-2 text-purple-600 items-center md:h-80 md:w-48 w-full h-full rounded border-2 border-black hover:bg-blue-200 font-sans;
}
</style>