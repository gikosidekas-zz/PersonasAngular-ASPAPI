import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonasListaComponent } from './personas/personas-lista/personas-lista.component';
import { Persona } from './personas/servicio/persona.model';
import { RouterModule } from '@angular/router';
import {DatePipe} from "@angular/common";

const ROUTES = [
  { path: 'personas', component: PersonasComponent},
  { path: 'persona', component: PersonaComponent},
  { path: 'personaslista', component: PersonasListaComponent}
  
  
  /*{ path: 'personas', component: PersonasComponent,
    children: [
      { path: 'persona', component: Persona },
      { path: 'personaslista', component: PersonasListaComponent }
    ] }*/
]

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    PersonasListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES), 
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    DatePipe,
    Persona,
    PersonasListaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
