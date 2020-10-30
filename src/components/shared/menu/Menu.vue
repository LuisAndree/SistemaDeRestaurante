<template>
  <div class="menu">
    <nav>
      <ul class="estiloLista">
        <a>
          <router-link :to="{ name: 'home'}">
            Cardapio |
          </router-link>
        </a>
        <a>
          <router-link :to="{ name: 'administracao'}">
            Adiminstrão
          </router-link>
        </a>

      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    rotas: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.menu {
  padding: 5px;
}

li {
  padding: 5px;
}

.estiloLista {
  background-color: white;
  width: 20%;
  padding: 5px;
  border: 1px groove black;
  text-align: center;
}

</style>
