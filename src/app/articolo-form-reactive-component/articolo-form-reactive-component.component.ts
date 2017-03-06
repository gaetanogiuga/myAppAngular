import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; 



@Component({
  selector: 'articolo-form-reactive-component',
  templateUrl: './articolo-form-reactive-component.component.html',
  styleUrls: ['./articolo-form-reactive-component.component.css']
})
export class ArticoloFormReactiveComponentComponent implements OnInit {
  @Input() model: Articolo;  
  myForm : FormGroup;     
  constructor(fb : FormBuilder) { 
	this.myForm = 	fb.group({
		txtTitolo :  ["Titolo dell'articolo",[Validators.required,Validators.maxLength(30)]],
		txtAutore : ["Autore dell'articolo",[Validators.required, Validators.maxLength(20)]],
		txtTesto : ["Testo dell'articolo",[Validators.required,Validators.minLength(10),Validators.maxLength(100)]]
	});
  }

  ngOnInit() {
  }
  visualizzaArticolo() { 
	console.log(this.myForm.controls["txtTitolo"].value);
	console.log(this.myForm.controls["txtAutore"].value);
	console.log(this.myForm.controls["txtTesto"].value);
  }  	
}
