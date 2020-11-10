import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs-outputs',
  templateUrl: './inputs-outputs.component.html',
  styleUrls: ['./inputs-outputs.component.scss']
})
export class InputsOutputsComponent implements OnInit {

  outputData: number;

  constructor() { }

  ngOnInit(): void {
  }

  outputTesting(){
    this.outputData = Math.random();
    console.log('Holaaaaaaa, this is an input, and no we can send data to oter components');
    console.log(this.outputData);
  }

}
