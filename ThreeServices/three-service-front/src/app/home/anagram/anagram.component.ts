import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnagramService } from 'src/app/anagram.service';

export interface Anagram{
  subject: string;
  predicate: string;
}

@Component({
  selector: 'ts-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss'],
})
export class AnagramComponent implements OnInit {
  submited = false;
  anagram: Anagram = {subject: '' , predicate: ''};
  anagramSubmit(anagramForm: NgForm): void {
    this.anagramService.getTodos(this.anagram, (data: any, error: any) => {
      if (data) {
        console.log(data);
      }
      if (error) {
        console.log(error);
      }
    });
  }

  constructor(private anagramService: AnagramService) {}

  ngOnInit(): void {}
}
