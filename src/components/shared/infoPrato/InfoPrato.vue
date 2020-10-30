<template>
  <div>
    <h1 class="centralizado">Informações</h1>
    <h2 class="centralizado">{{ prato.titulo }}</h2>
    <imagem-pratos :url="prato.url" :titulo="prato.titulo"></imagem-pratos>
    <form>
      <div class="controle">
        <label class="centralizado" for="descricao">DESCRIÇÃO</label>
        <textarea
          v-model="prato.descricao"
          @input="prato.descricao = $event.target.value"
          id="descricao"
          autocomplete="off"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import Botao from "../botao/Botao.vue";
import Prato from "../../../domain/prato/Prato";
import PratoService from "../../../domain/prato/PratoService";
import ImagemPratos from "../imagemPratos/ImagemPratos.vue";

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

  created() {
    this.service = new PratoService(this.$resource);

    if (this.id) {
      this.service.busca(this.id).then(prato => (this.prato = prato));
    }
  }
};
</script>
<style scoped>
h1 {
  font-style: italic;
}
.centralizado {
  text-align: center;
  color: #fa2b05;
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
  height: 400px;
  font-size: inherit;
  border-radius: 5px;
}

.erro {
  color: red;
}
</style>
