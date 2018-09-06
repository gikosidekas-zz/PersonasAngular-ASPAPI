import { Component, OnInit } from '@angular/core';
import { Persona } from '../servicio/persona.model';
import { PersonaService } from '../servicio/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas-lista',
  templateUrl: './personas-lista.component.html',
  styleUrls: ['./personas-lista.component.css']
})
export class PersonasListaComponent implements OnInit {
  
  private personas: Persona[] = [];
  constructor(public personaService: PersonaService, public router: Router) { }

  ngOnInit() {
    this.personaService.getPersonas()
  }

  

  click() {
    this.router.navigate(['persona']);
  }

}
