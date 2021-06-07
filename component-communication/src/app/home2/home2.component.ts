import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Button2Component} from './button2/button2.component';
import { Input2Component } from './input2/input2.component';

@Component({
  selector: 'cc-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
  firstName!: string;
  clicked!: boolean;
  buttonClicked(value: boolean): void{
    this.clicked = value;
    console.log(this.clicked);
  }
  constructor() { }

  ngOnInit(): void {}
}
