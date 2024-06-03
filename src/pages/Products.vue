<script setup lang="ts">
import {onMounted, ref} from "vue";
import CardComponent from "../components/CardComponent.vue";
import axios from 'axios'

const products = ref([])
const isLoading = ref(true)
const handleGet = async() => {
  try {

  const response = await axios.get('https://api.escuelajs.co/api/v1/products');
   products.value = response.data;
   if(products.value){
     isLoading.value = false
   }
  console.log(products.value);
  } catch(err) {
    isLoading.value = false
    console.log(err)
  }
}
onMounted(()=> {
  handleGet();
})
</script>

<template lang="pug">
main(class="flex-col h-52  bg-[url('/tienda.jpg')] bg-center  align-middle justify-center gap-2")
    div(class="flex bg justify-center mx-10 items-center")
            input( type="text" class="rounded h-[2rem]" placeholder="Buscar Aquí")
            button(class="buttonSearch")
                img(src="/search.svg" width="28px")
    h1.text-6xl.left-10.relative.p-2.text-white.border.w-64.rounded.shadow-2xl Products
div( class="container-products")
    p(v-if="isLoading" class='text-red-400.text-xl') Cargando...
    div(v-else v-for="product in products" :key="product.id" class='flex flex-col')
      CardComponent(:product="product" class=' my-4')
</template>

<style scoped>
.buttonSearch{
    @apply  rounded-[50%] w-8 h-8 fixed bg-red-400 relative;
}
.container-products{
    @apply flex flex-col justify-center items-center my-5 ;
    
}

</style>