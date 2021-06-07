import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'cc-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.scss']
})
export class Button2Component implements OnInit {
  @Output() clickEmitter = new EventEmitter();
  clicked!: boolean;
  buttonClick(): void{
    this.clicked = true;
    this.clickEmitter.emit(this.clicked);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
