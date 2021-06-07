import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  clicked!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
