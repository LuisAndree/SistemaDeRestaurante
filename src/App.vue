<template>
  <div class="corpo">
    <menu-principal :rotas="routes"></menu-principal>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from "./routes.js";
import Menu from "./components/shared/menu/Menu.vue";
export default {
  components: {
    'menu-principal': Menu
  },

  data() {
    return {
      routes
    };
  }
};
</script>

<style>
body, html{
  height: 100%;
}

body{
  background-color: #EE8851;
}

.corpo {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0% auto;
  width: 100%;
  background-color: white;
}
.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.3s;
}
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}
</style>
