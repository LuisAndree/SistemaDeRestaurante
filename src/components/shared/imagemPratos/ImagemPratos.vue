<template>
  <img  :src="url" :alt="titulo" />
</template>

<script>
export default {
  props: ["url", "titulo"]
};
</script>

<style scoped>

</style>
