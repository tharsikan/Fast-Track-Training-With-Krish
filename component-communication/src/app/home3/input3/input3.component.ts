import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-input3',
  templateUrl: './input3.component.html',
  styleUrls: ['./input3.component.scss']
})
export class Input3Component implements OnInit {
  firstName!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
