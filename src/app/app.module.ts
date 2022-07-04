import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { PrimeiraTelaComponent } from './components/template/primeira-tela/primeira-tela.component';
import { SegundaTelaComponent } from './components/template/segunda-tela/segunda-tela.component';
import { TelaProjetosComponent } from './components/template/tela-projetos/tela-projetos.component';
import { TelaHabilidadesComponent } from './components/template/tela-habilidades/tela-habilidades.component';
import { FooterComponent } from './components/template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimeiraTelaComponent,
    SegundaTelaComponent,
    TelaProjetosComponent,
    TelaHabilidadesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
