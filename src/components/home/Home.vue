<template>
  <div>
    <h1 class="centralizado">Cardapio</h1>
    <input
      type="search"
      class="filtro"
      v-on:input="filtro = $event.target.value"
      placeholder="Pesquise aqui o prato"
    />
    <ul class="lista-pratos">
      <li class="lista-pratos-item" v-for="prato of pratosComFiltro">
        <meu-painel :titulo="prato.titulo">
          <imagem-pratos
            :url="prato.url"
            :titulo="prato.titulo"
          ></imagem-pratos>
          <meu-botao
            rotulo="Remover"
            tipo="button"
            :confirmacao="false"
            @botaoAtivado="remove(prato)"
            estilo="perigo"
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
import PratoService from "../../domain/prato/PratoService";

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
    remove(prato) {
      this.service.apaga(prato._id).then(
        () => {
          let indice = this.pratos.indexOf(prato);
          this.pratos.splice(indice, 1);
          this.mensagem = "Prato removido com sucesso";
        },
        err => {
          this.mensagem = "Não foi possível remover a foto";
          console.log(err);
        }
      );
    }
  },

  created() {
    this.service = new PratoService(this.$resource);
    this.servise.lista().then(
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
