import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Images } from '../models/placeholder-model';
import { CrudServices } from './services/crud-services';
import {CommonModule} from '@angular/common/';


@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css'],
  preserveWhitespaces: true

})
export class InitialPageComponent implements OnInit {


  data: CrudServices[];

  constructor(private services: CrudServices){}

 
  ngOnInit(){
    this.services.list().subscribe(dados => this.data = dados);
  }

  


  }


  
  

  



