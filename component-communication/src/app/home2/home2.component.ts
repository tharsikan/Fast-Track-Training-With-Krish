import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

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
  }
  getFirstName(value: string): void{
    this.firstName = value;
  }
  constructor() { }

  ngOnInit(): void {}
}
