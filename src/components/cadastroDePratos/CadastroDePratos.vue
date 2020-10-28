<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
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
        <imagem-pratos
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
        <router-link to="/"
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
import PratoService from "../../domain/prato/PratoService"

export default {
  components: {
    "imagem-pratos": ImagemPratos,
    "meu-botao": Botao
  },

  data() {
    return {
      prato: new Prato(),
      resource: {}
    };
  },

  methods: {
    remove(prato) {

      this.service
        .apaga(prato._id)
        .then(
          () => {
            let indice = this.pratos.indexOf(prato);
            this.pratos.splice(indice, 1);
            this.mensagem = 'Prato removido com sucesso'
          },
          err => {
            this.mensagem = 'Não foi possível remover  prato';
            console.log(err);
          }
        )
    }
  },

  created() {
    this.service = new PratoService(this.$resource);

    this.service
      .lista()
      .then(pratos => this.pratos = pratos, err => console.log(err));
  }
};
</script>
<style scoped>
.centralizado {
  text-align: center;
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
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}

.erro {
  color: red;
}
</style>
