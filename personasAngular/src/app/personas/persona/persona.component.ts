import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import {DatePipe} from "@angular/common";
import { Persona } from '../servicio/persona.model';
import { PersonaService } from '../servicio/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  private userForm: FormGroup;
  private errorString: String;
  private errorPlace:String;

  constructor(
    public personaService: PersonaService,
    public formBuilder: FormBuilder,
    public router: Router,
    public date:DatePipe,
    public persona:Persona,

  ) { }

  ngOnInit() {
  
    this.userForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      cedula: '',
      direccion: '',
      telefono: '',
      fechanacimiento: ''
    });
  
  }


  onSubmit() {

        this.persona.Nombre = this.userForm.get('nombre').value;
        this.persona.Apellido = this.userForm.get('apellido').value;
        this.persona.IdPersoona = this.userForm.get('cedula').value;
        this.persona.Direccion = this.userForm.get('direccion').value;
        this.persona.Telefono = this.userForm.get('telefono').value;
        this.persona.FechaNacimiento = new Date(this.userForm.get('fechanacimiento').value);

        this.personaService.postPersona(this.persona).subscribe(serverResponse=>{
            this.router.navigate(['personaslista']);
        }, error=>{
            this.errorString = "Error Registrando: "+error.message;
            this.router.navigate(['personaslista']);
        });

  }

}
