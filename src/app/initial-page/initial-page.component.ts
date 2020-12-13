import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudServices } from './services/crud-services';
import {CommonModule} from '@angular/common/';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css'],
  preserveWhitespaces: true

})
export class InitialPageComponent implements OnInit {


  //data: CrudServices[];

  data$: Observable<CrudServices[]>;

  constructor(private services: CrudServices){}

  ngOnInit(){
    //this.services.list().subscribe(dados => this.data = dados);


    this.data$ = this.services.list();
  }

  

  


  }


  
  

  



