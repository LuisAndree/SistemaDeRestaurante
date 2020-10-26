<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <input
      type="search"
      class="filtro"
      @input = "filtro = $event.target.value"
      placeholder="Pesquise aqui o prato"
    />
    {{filtro}}
    <ul class="lista-pratos">
      <li class="lista-pratos-item" v-for="prato of pratosComFiltro">
        <meu-painel :titulo="prato.titulo">
          <img class="imagem-responciva" :src="prato.url" :alt="prato.titulo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import PainelPrato from "../src/components/shared/painelPrato/PainelPrato.vue";
export default {
  components: {
    "meu-painel": PainelPrato
  },

  data() {
    return {
      titulo: "Cardapio",
      pratos: [],
      filtro: '',
    };
  },

  computed: {
    pratosComFiltro() {
      if (this.filtro){
        let exp  = new RegExp(this.filtro.trim(), 'i');
        return this.pratos.filter(prato => exp.test(prato.titulo));
      } else {
        return this.pratos;
      }
    }
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/pratos")
      .then(res => res.json())
      .then(
        pratos => (this.pratos = pratos),
        err => console.log(err)
      );
  }
};
</script>

<style scoped>
.centralizado {
  text-align: center;
}

.corpo {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0% auto;
  width: 96%;
}

.lista-pratos {
  list-style: none;
}

.lista-pratos .lista-pratos-item {
  display: inline-block;
}

.imagem-responciva {
  width: 100%;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
