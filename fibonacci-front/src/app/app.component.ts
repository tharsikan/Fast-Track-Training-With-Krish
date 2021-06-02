import { Component } from '@angular/core';

@Component({
  selector: 'fib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fibonacci-front';
  number!: number;
  // tslint:disable-next-line:no-inferrable-types
  result: string = '';
  // tslint:disable-next-line:typedef
  clickme() {
    this.result = `${this.number} is ${this.isFibonacci(+this.number) ? 'fibonacii' : 'not a fibonacii'} and ${this.number}'th fibonacci is ${this.fib(+this.number)}`;
  }
  // tslint:disable-next-line:typedef
  isPerfectSquare( x: number){
    const s = Math.floor(Math.sqrt(x));
    return (s * s === x);
  }

  // tslint:disable-next-line:typedef
  isFibonacci( n: number){
    return (this.isPerfectSquare(5 * n * n + 4) || this.isPerfectSquare(5 * n * n - 4));
  }

  // tslint:disable-next-line:typedef
  fib(n: number): number {
    if (n <= 1) {
        return n;
    }
    return this.fib(n - 1) + this.fib(n - 2);
  }
}
