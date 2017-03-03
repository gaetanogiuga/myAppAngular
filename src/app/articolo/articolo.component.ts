import { Component, OnInit, Input } from '@angular/core';
import {Articolo} from './articolo'
@Component({
  selector: 'articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {
  
  @Input() articolo : Articolo;
  
  constructor() {}

  ngOnInit() {
  }

}
