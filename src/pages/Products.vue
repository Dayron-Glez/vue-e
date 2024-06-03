<script setup lang="ts">

</script>

<template lang="pug">
main(class="flex-col h-52  bg-[url('/tienda.jpg')] bg-center  align-middle justify-center gap-2")
    div(class="flex bg justify-center mx-10 items-center")
            input( type="text" class="rounded h-[2rem]" placeholder="Buscar Aquí")
            button(class="buttonSearch")
                img(src="/search.svg" width="28px")
    h1.text-6xl.left-10.relative.p-2.text-white.border.w-64.rounded.shadow-2xl Products
div( class="container-products") 
    p.text-red-400.text-xl No hay Productos actualmente...
</template>

<style scoped>
.buttonSearch{
    @apply  rounded-[50%] w-8 h-8 fixed bg-red-400 relative;
}
.container-products{
    @apply flex justify-center items-center my-5 ;
    
}

</style>