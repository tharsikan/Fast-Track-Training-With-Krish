import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'cc-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.scss'],
})
export class Input2Component implements OnInit {
  @Output() firstNameEmitter = new EventEmitter();
  firstName!: string;
  focusOut(): void {
    this.firstNameEmitter.emit(this.firstName);
  }
  constructor() {}

  ngOnInit(): void {}
}
