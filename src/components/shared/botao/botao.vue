<template>
  <button
    @click="disparaAcao()"
    class="botao"
    :class="estiloDoBotao"
    :type="tipo"
  >
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: [ ],

  methods: {

        disparaAcao() {

            if(this.) {
                if(confirm('Confirma operação?')) {
                    this.$emit('botaoAtivado');
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
    },


};
</script>

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-pedido {
  background: firebrick;
  color: white;
}

.botao-informacao {
  background: darkcyan;
  color: white;
}
</style>
