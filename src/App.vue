<template>
  <div class="corpo">
    <h1 class="estiloTitulo">{{ titulo }}</h1>
    <h2 class="estiloTitulo2">{{ menu }}</h2>
    <form>
      <labe>
        <input placeholder="nome do prato">
      </labe>
    </form>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      titulo: "Cardapio",
      menu: "Menu de opções"
    };
  }
};
</script>

<style>
.corpo {
  background-color: white;
}

.estiloTitulo {
  color: #755423;
  text-align: center;
  background-color: coral;
  width: 100%;
  height: 50px;
  font-family: "Times New Roman", Times, serif;
  font-size: 45px;
}
.estiloTitulo2 {
  color: #755423;
  text-align: center;
  background-color: white;
  width: center;
  height: 40px;
  font-family: "Times New Roman", Times, serif;
  font-size: 30px;
}
</style>
