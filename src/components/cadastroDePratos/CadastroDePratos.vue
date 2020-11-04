<template>
  <div>
    <h1 class="centralizado">Cadastro e Uptade</h1>
    <h2 class="centralizado">{{ prato.titulo }}</h2>
    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input
          v-model.lazy="prato.titulo"
          @input="prato.titulo = $event.target.value"
          id="titulo"
          autocomplete="off"
        />
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input
          v-model.lazy="prato.url"
          @input="prato.url = $event.target.value"
          id="url"
          autocomplete="off"
        />
        <imagem-pratos class="imagem-pratos"
          v-show="prato.url"
          :url="prato.url"
          :titulo="prato.titulo"
        />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea
          v-model="prato.descricao"
          @input="prato.descricao = $event.target.value"
          id="descricao"
          autocomplete="off"
        ></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" />
        <router-link :to="{name: 'administracao'}"
          ><meu-botao rotulo="VOLTAR" tipo="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImagemPratos from "../shared/imagemPratos/ImagemPratos.vue";
import Botao from "../shared/botao/Botao.vue";
import Prato from "../../domain/prato/Prato";
import PratoService from "../../domain/prato/PratoService";

export default {
  components: {
    "imagem-pratos": ImagemPratos,
    "meu-botao": Botao
  },

  data() {
    return {
      prato: new Prato(),
      id: this.$route.params.id
    };
  },

  methods: {
    grava() {
      this.service.cadastra(this.prato).then(
        () => (this.prato = new Prato()),
        err => console.log(err)
      );
    }
  },

  created() {
    this.service = new PratoService(this.$resource);

    if (this.id) {
      this.service.busca(this.id).then((prato) => (this.prato = prato));
    }
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
  color: #FA2B05;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 50%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}

.erro {
  color: red;
}

.imagem-pratos {
  padding: 5px;
  width: 500px;
  height: 350px;
 }
</style>
