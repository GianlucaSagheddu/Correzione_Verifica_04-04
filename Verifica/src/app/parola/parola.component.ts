import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parola',
  templateUrl: './parola.component.html',
  styleUrls: ['./parola.component.css']
})
export class ParolaComponent implements OnInit {
  
  @Input() parola: string= "";
  constructor() { }
  
  ngOnInit() {
  }

}
