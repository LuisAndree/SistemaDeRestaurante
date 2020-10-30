import Home from './components/home/Home.vue'
import CadastroDePratos from './components/cadastroDePratos/CadastroDePratos.vue'
import InfoPratos from './components/shared/infoPrato/InfoPrato.vue'
import Administracao from './components/administracao/Adiministracao.vue'

export const routes = [
  {path: '', name: 'home', component: Home, titulo: 'Cardapio', menu: true},
  {path: '/infoPratos/', name: 'infoPratos', component: InfoPratos, titulo: 'Informação', menu: true},
  {path: '/infoPratos/:id', name: 'InfoPratos1', component: InfoPratos, titulo: 'Informação', menu: false},
  {path: '/cadastroDePratos/', name: 'cadastroDePratos', component: CadastroDePratos, titulo: 'Cadastro', menu: true},
  {path: '/cadastroDePratos/:id', name: 'cadastroDePratos1', component: CadastroDePratos, titulo: 'Cadastro', menu: false},
  {path: '/Administracao/', name: 'administracao', component: Administracao, titulo: 'Administração', menu: true},
  {path: '/Administracao/:id', name: 'administracao1', component: Administracao, titulo: 'Administração', menu: false},
  {path: '*', component: Home, menu: false},


];
