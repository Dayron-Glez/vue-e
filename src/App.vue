<script setup>


</script>

<template lang="pug">
header(class="flex flex-row items-center bg-red-500 h-10")
  RouterLink(to='/' class=" flex  text-white") Logo
  nav(class=" flex flex-row justify-end w-full text-white")
    RouterLink(to='/' class=" flex mx-5") Home
    RouterLink( to='/about' class=" flex mx-5") About
    RouterLink( to='/products' class=" flex mx-5") Products
    RouterLink( to='/blog' class=" flex mx-5") Blog
RouterView
</template>