<script setup lang="ts">

</script>

<template lang="pug">
.flex.justify-center.items-center
    input( type="text" placeholder="Buscar Aquí")
    button(class="buttonSearch") Buscar

    div( class="container-products") No hay Productos actualmente...
</template>

<style scoped>
.buttonSearch{
    @apply border rounded-[8px] w-10 fixed bg-red-400 ;
}
.container-products{
    @apply flex-col justify-around ;
}

</style>