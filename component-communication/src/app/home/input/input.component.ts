import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  firstName!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
