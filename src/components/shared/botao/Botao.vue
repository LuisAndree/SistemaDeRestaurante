<template>
  <button class="botao" :typo="tipo" :class="estiloDoBotao" @click="disparAcao()">{{ rotulo }}</button>
</template>
<script>
export default {
  props: {
    tipo:{
      required: true,
      type:String
    },
    rotulo:{
      required: true,
      type:String
    },
    confirmacao:{
      type: Boolean
    },
    estilo:{
      type:String
    }
  },

  methods: {
    disparAcao() {
      (typeof(this.confirmacao));
      if(this.confirmacao){
       if (confirm('Confirmar?')){
          this.$emit('botaoAtivado');
        }
        return;
      }
      this.$emit('botaoAtivado');
    }
 },

 computed:{

   estiloDoBotao(){
    if(this.estilo == 'padrao') return 'botao botao-padrao';
    if(this.estilo == 'perigo') return 'botao botao-perigo';
   }
 }
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

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
