import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Articolo } from '../articolo/articolo';

@Component({
  selector: 'app-articolo-form',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.css']
})
export class ArticoloFormComponent implements OnInit {
  
  model;
  @Output submit =  new EventEmitter<Articolo>();	
  constructor() { 
	this.model = new Articolo(); 
  }
  
  ngOnInit() {
  }
  
  inviaArticolo(){
	  this.submit.emit(this.model);
  }

}
