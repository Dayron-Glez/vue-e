<script setup lang="ts">
import { defineProps } from 'vue';
import router from "../router";

interface ProductsInterface {
  title: string;
  price: number;
  description: string;
}

const props = defineProps({
  product: Object as () => ProductsInterface
})

const handleRouter = () => {
  router.push("/");
}
</script>

<template lang="pug">
  div(class=" flex flex-col max-w-3xl border-[1px] border-red-300 rounded-md p-4")
    h3 {{ props.product.title }}
    p {{ props.product.price }}
    div(class=" flex flex-col")
      p {{ props.product.description }}
      button(@click='handleRouter' class=' bg-red-300 border-[1px] rounded-md p-2 my-1 hover:bg-red-400 transition-colors duration-200 w-24') Click me!
</template>
