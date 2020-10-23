<template>
    <img class="imagem-cardapio" :src="url" :alt="titulo">
</template>

<script>
export default {

    props: ['url', 'titulo']
}
</script>

<style scoped>

  .imagem-cardapio {

    width: 100%;
  }

</style>
