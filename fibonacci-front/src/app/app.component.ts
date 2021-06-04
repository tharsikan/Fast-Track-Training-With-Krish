import { Component } from '@angular/core';

@Component({
  selector: 'fib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fibonacci-front';
  number!: number;
  result = '';

  clickme(): void {
    this.result = `${this.number} is ${
      this.isFibonacci(+this.number) ? 'fibonacii' : 'not a fibonacii'
    } and ${this.number}'th fibonacci is ${this.fib(+this.number)}`;
    this.fibb(+this.number);
  }

  isPerfectSquare(x: number): boolean {
    const s = Math.floor(Math.sqrt(x));
    return s * s === x;
  }

  isFibonacci(n: number): boolean {
    return (
      this.isPerfectSquare(5 * n * n + 4) || this.isPerfectSquare(5 * n * n - 4)
    );
  }

  fib(n: number): number {
    if (n <= 1) {
      return n;
    }
    return this.fib(n - 1) + this.fib(n - 2);
  }
  fibb(n: number): number {
    let firstSum = 0;
    let secoundSum = 1;
    let nextSum = 0;
    let temp = 0;
    for (let i = 0; i <= n; i++) {
      temp = firstSum;
      nextSum = firstSum + secoundSum;
      firstSum = secoundSum;
      secoundSum = nextSum;
    }
    return temp;
  }
}
