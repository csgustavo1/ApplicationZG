import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { CadastroUsuarioComponent } from './components/usuarios/cadastro-usuario/cadastro-usuario.component';
import { routing } from './initial-page/app-routes';





declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    CadastroUsuarioComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
  
  

  
    
  
  ],
  providers: [
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
