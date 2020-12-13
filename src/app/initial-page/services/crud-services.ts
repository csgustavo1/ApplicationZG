import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class CrudServices{

    private readonly API = '/api';
    constructor(private http: HttpClient){}

    list(){
        return this.http.get<CrudServices[]>(this.API);
    }
    
   

    }
