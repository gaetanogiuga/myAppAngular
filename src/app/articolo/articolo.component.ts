import { Component, OnChanges, Input,EventEmitter,Output,SimpleChange } from '@angular/core';
import { Articolo }  from './articolo';
@Component({
  selector: 'articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnChanges {
  
  @Input() articolo : Articolo;
  @Output() like = new EventEmitter<{numApprezzamenti: number}>();	
  
  constructor() {}
  
  incrementaApprezzamenti(event){
	  console.log(this.articolo.numApprezzamenti);
	  this.articolo.numApprezzamenti =  this.articolo.numApprezzamenti+1;
	  this.like.emit({numApprezzamenti: this.articolo.numApprezzamenti});
	  event.preventDefault();
  }
  
  ngOnChanges(changes : {[propertyName : string] : SimpleChange}){
	  
	  if(changes["articolo"] && changes["articolo"].currentValue.testo){
		  let testoArticolo = changes["articolo"].currentValue.testo;
		  changes["articolo"].currentValue.testo = testoArticolo.replace("é","\xE9");
	  }
  }
 
}
