import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fib-vowels',
  templateUrl: './vowels.component.html',
  styleUrls: ['./vowels.component.scss'],
})
export class VowelsComponent implements OnInit {
  paragraph = '';
  words: string[] = [];
  private vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  showCount = true;
  vowelWords: string[] = [];
  vowelMap = {};
  taggle(): void{
    this.showCount = !this.showCount;
  }

  bigFun(words: string[], vowels: string[]): string[]{
    const vowelWords: string[] = [];
    let i = 0;
    let pushed = false;
    function pushVowelWord(word: string): void {
      while (!pushed && i < vowels.length ){
        if (word.includes(vowels[i])){
          vowelWords.push(word);
          pushed = true;
        }
        else{
          i++;
          pushVowelWord(word);
        }
      }
    }
    words.forEach(word => {
      i = 0; pushed = false;
      pushVowelWord(word);
    });
    return vowelWords.sort(this.compare);
  }
  compare( a: string, b: string ): number {
    try {
      return( a.localeCompare( b, undefined, { numeric: true } ) );
    } catch ( error ) {
      return( a.localeCompare( b ) );
    }
  }
  counter(wordArray: string[]): Map<string, number>{
    const mapAllRepition = new Map();
    wordArray.forEach( c => {
        mapAllRepition.set(c, (mapAllRepition.get(c) || 0) + 1);
    });
    return mapAllRepition;
  }
  submit(vowelForm: NgForm): void {
    this.paragraph = vowelForm.value.paragraph;
    this.words = this.paragraph.split(' ');
    this.vowelWords = this.bigFun(this.words, this.vowels);
    this.vowelMap = this.counter(this.vowelWords);
  }

  // vowelTest(s: string): any {
  //   return (/^[aeiou]$/i).test(s);
  // }
  constructor() {
  }

  ngOnInit(): void {}
}
