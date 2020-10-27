import Home from './components/home/Home.vue'
import CadastroDePratos from './components/cadastroDePratos/CadastroDePratos.vue'

export const routes = [
  {path: '', component: Home, titulo: 'Cardapio'},
  {path: '/cadastroDePratos', component: CadastroDePratos, titulo: 'Cadastro'},
];
