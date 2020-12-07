import {  ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router'


import { CadastroUsuarioComponent } from '../components/usuarios/cadastro-usuario/cadastro-usuario.component';
import { InitialPageComponent } from './initial-page.component';

const APP_ROUTES: Routes = [ 
  { path: '', component: CadastroUsuarioComponent},
  { path: 'users', component: InitialPageComponent}
];

 export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);