import { Component } from '@angular/core';
import { ArticoloComponent } from './../app/articolo/articolo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  myArticolo;
  
  constructor(){
	  this.myArticolo = {
		    titolo: "Creare componenti Angular 2",
            autore: "Mario Rossi",
            descrizione: "Creare componenti con Angular 2 é molto semplice.",
			numApprezzamenti : 0
	  }
  }
  
  mostraMessaggioRingraziamento(event) { 
		alert("Numero di Like : "+event.numApprezzamenti); 
  }
}
