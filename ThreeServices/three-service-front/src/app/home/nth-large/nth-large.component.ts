import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ts-nth-large',
  templateUrl: './nth-large.component.html',
  styleUrls: ['./nth-large.component.scss'],
})
export class NthLargeComponent implements OnInit {
  number!: number;
  list!: string;
  valid = true;
  nthLargeSubmit(nthLargeForm: NgForm): void {
    if ((this.list.match(/,/g) || []).length + 1 < this.number) {
      this.valid = false;
    }else{
      // logic
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
