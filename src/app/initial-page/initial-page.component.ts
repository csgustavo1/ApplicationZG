import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudServices } from './services/crud-services';
import { CommonModule } from '@angular/common/';
import { Observable } from 'rxjs';
import { dados_result } from '../../app/models/dados_result.model';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css'],
  preserveWhitespaces: true,
})
export class InitialPageComponent implements OnInit {
  //data: CrudServices[];

  dados = {
    data_inicio: null,
    data_fim: null,
  };
  data$: Observable<CrudServices[]>;

  result: Array<dados_result> = [];

  constructor(private services: CrudServices) {}

  ngOnInit() {}

  buttonPress() {
    this.result = [];
    this.services.list(this.dados).subscribe((data) => {
      data.forEach((x) => {
        let aux: dados_result = dados_result.fromJson(x);
        this.result.push(aux);
      });
    });
  }

  round(value) {
    let valueNumber = new Number(value);
    return valueNumber.toFixed(2);
  }

  calcula(obj: dados_result) {
    let dif = obj.porcentagem / 100;
    return this.round(obj.valor_total * dif).replace('.', ',');
  }
}
