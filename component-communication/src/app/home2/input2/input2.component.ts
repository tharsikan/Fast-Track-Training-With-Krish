import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.scss'],
})
export class Input2Component implements OnInit {
  firstName!: string;
  focusOutFunction(): void {
    console.log(' focus out');
  }
  constructor() {}

  ngOnInit(): void {}
}
