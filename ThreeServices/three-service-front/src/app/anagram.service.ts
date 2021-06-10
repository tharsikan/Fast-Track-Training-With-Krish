import { Injectable } from '@angular/core';
import { Anagram } from './home/anagram/anagram.component';

@Injectable({
  providedIn: 'root',
})
export class AnagramService {
  getTodos(anagram: Anagram, callback: any): any {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 201) {
        const data = JSON.parse(request.responseText);
        callback(data, undefined);
      } else if (request.readyState === 4) {
        callback(undefined, 'coluld not fetch data');
      }
    });
    request.open('POST', '/api/anagram', true);
    request.setRequestHeader('Content-Type' , 'application/json;charset=UTF-8');
    request.send(JSON.stringify(anagram));
    return callback;
  }

  constructor() {}
}
