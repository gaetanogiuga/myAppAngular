import { Component, OnInit } from '@angular/core';
import {Articolo} from './articolo'
@Component({
  selector: 'articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {
  
  articolo : Articolo;
  
  constructor() { 
	this.articolo = {
		titolo : "Creare Componenti Angular 2",
		autore : "Mario Rossi",
		descrizione : "Creare componenti con Angular 2 è molto semplice."
	};
  }

  ngOnInit() {
  }

}
