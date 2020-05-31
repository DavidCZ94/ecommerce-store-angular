import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-classes',
  templateUrl: './demo-classes.component.html',
  styleUrls: ['./demo-classes.component.scss']
})
export class DemoClassesComponent implements OnInit {

  title = 'Say hello to David';
  input = '';
  counter = 0;
  power = 10;
  names = ['Pilar', 'Henry', 'Ana maria', 'Gael', 'Nicole'];
  items = [0];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.items.push(++this.counter);
  }
  deleteItem(index: number){
    this.items.splice(index, 1);
    this.counter--;
  }

}
