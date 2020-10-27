<template>
  <div>
    <h1 class="centralizado">Cardapio</h1>
    <input
      type="search"
      class="filtro"
      v-on:input="filtro = $event.target.value"
      placeholder="Pesquise aqui o prato"
    />
    {{ filtro }}
    <ul class="lista-pratos">
      <li class="lista-pratos-item" v-for="prato of pratosComFiltro">
        <meu-painel :titulo="prato.titulo">
          <imagem-pratos
            :url="prato.url"
            :titulo="prato.titulo"
          ></imagem-pratos>
          <meu-botao
            rotulo="Informação"
            type="button"
            @click.native="remove()"
          ></meu-botao>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import PainelPrato from "../shared/painelPrato/PainelPrato.vue";
import ImagemPratos from "../shared/imagemPratos/ImagemPratos.vue";
import Botao from "../shared/botao/Botao.vue";
export default {
  components: {
    "meu-painel": PainelPrato,
    "imagem-pratos": ImagemPratos,
    "meu-botao": Botao
  },

  data() {
    return {
      titulo: "Cardapio",
      pratos: [],
      filtro: ""
    };
  },

  computed: {
    pratosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.pratos.filter(prato => exp.test(prato.titulo));
      } else {
        return this.pratos;
      }
    }
  },

  methods: {
    remove() {
      alert("Precisa saber qual foto remover!");
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
h1 {
  font-style: italic;
  color: #572d26;
}
.centralizado {
  text-align: center;
}

.lista-pratos {
  list-style: none;
}

.lista-pratos .lista-pratos-item {
  display: inline-block;
}

.filtro {
  display: flex;
  width: 50%;
  margin: 20px;
  padding: 5px;
}
</style>
