<template>
  <img class="imagem-pratos" :src="url" :alt="titulo" />
</template>

<script>
export default {
  props: ["url", "titulo"]
};
</script>

<style scoped>
.imagem-pratos {
  padding: 5px;
  width: 95%;
  height: 120px;
}
</style>
