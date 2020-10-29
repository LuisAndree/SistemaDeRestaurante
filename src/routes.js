import Home from './components/home/Home.vue'
import CadastroDePratos from './components/cadastroDePratos/CadastroDePratos.vue'

export const routes = [
  {path: '', name: 'home', component: Home, titulo: 'Cardapio', menu: true},
  {path: '/cadastroDePratos/', name: 'cadastroDePratos', component: CadastroDePratos, titulo: 'Cadastro', menu: true},
  {path: '/cadastroDePratos/:id', name: 'cadastroDePratos', component: CadastroDePratos, titulo: 'Cadastro', menu: false},
  {path: '*', component: Home, menu: false},

];
