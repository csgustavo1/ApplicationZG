import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class DadosService{

dadosUrl = "http://localhost:3000/users";


constructor(private Http: HttpClient) { }

  ngOnInit() {
    
  }

  listar(){
      return this.Http.get<any[]>(`${this.dadosUrl}`);
  }

}