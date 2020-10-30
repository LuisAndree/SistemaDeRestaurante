<template>
  <div class="painel">
    <h2 class="painel-titulo">{{ titulo }}</h2>
    <div class="painel-conteudo" v-show="visivel">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: ['titulo'],

  data() {
    return{
      visivel: true
    }
  }
};
</script>

<style scoped>


.painel {
  padding: 10px;
  border: solid #000000;
  display: inline-block;
  margin: 30px;
  box-shadow: 5px 5px 10px rgb(226, 91, 29);
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
  background-color: #F0AC2B;
}

.painel .painel-titulo {
  font-size: 17px;
  text-align: center;
  border: solid 2px;
  background:#FA2B05;
  margin: 0 0 15px 0;
  padding: 0%;
  text-transform: uppercase;
}

.painel .painel-conteudo{
  background-color: #E07641;
}
</style>
