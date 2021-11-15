import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    
    private _personajes: Personaje[] = [
        {
          nombre:  'Goku SSJ',
          poder: 25000
        },
        {
          nombre: 'Piccoro',
          poder: 12000
        }
    ]

    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}