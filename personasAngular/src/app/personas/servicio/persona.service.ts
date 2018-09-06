import { Persona } from './persona.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { headersToString } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
   personaLista : Persona [];
  constructor(private http: Http) { }

  postPersona(persona : Persona){
    var body = JSON.stringify(persona);
    console.log(JSON.stringify(persona));
    var headeroptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers: headeroptions})
    return this.http.post('http://localhost:63374/api/Personas', body, requestOptions).map(x => x.json())
  }

  getPersonas() {
    this.http.get('http://localhost:63374/api/Personas')
    .map((data : Response) => {
      return data.json() as Persona[];

    }).toPromise().then(x => {
      this.personaLista = x;
    })
  }
  
}
