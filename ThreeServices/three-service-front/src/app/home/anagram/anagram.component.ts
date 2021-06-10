import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnagramService } from 'src/app/anagram.service';

export interface Anagram {
  subject: string;
  predicate: string;
}

@Component({
  selector: 'ts-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss'],
})
export class AnagramComponent implements OnInit {
  isAnagram!: boolean;
  error!: string;
  tempSubject!: string;
  tempPredicate!: string;
  anagram: Anagram = { subject: '', predicate: '' };
  anagramSubmit(anagramForm: NgForm): void {
    this.tempSubject = this.anagram.subject;
    this.tempPredicate = this.anagram.predicate;
    this.anagramService.getTodos(this.anagram, (data: any, error: any) => {
      if (data !== undefined) {
        this.isAnagram = data;
      }
      if (error) {
        this.error = error;
      }
    });
  }

  constructor(private anagramService: AnagramService) {}

  ngOnInit(): void {}
}
