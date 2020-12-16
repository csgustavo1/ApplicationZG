import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class CrudServices{

    private readonly API = '/api';
    constructor(private http: HttpClient){}
   


    list(dados){
        dados.data_fim =(dados.data_fim == "" || !dados.data_fim)?( new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+(new Date().getDate()+1)):dados.data_fim;
        return this.http.get<CrudServices[]>(this.API  + "?data_inicio=" + dados.data_inicio + "&data_fim=" + dados.data_fim ) ;
    }
    
   

    }
