import {bubbleSort, bubbleSortString} from './bubble.js';


function addQuestionToDom(headding,data,cb){
    const div = document.createElement('div');
    div.className = 'mydiv';
    const head = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const text = document.createTextNode(headding);
    const input = document.createTextNode(`the input data: ${data}`);
    const output = document.createTextNode(`the result : ${cb(data)}`);
    head.appendChild(text);
    p1.appendChild(input);
    p2.appendChild(output);
    div.appendChild(head);
    div.appendChild(p1);
    div.appendChild(p2);

    document.querySelector('#myDiv')
    .appendChild(div);
}
addQuestionToDom('Bubble Sort',[15, 16, 6, 8, 5],bubbleSort);
let stringArr = ["Emily","Hannah","Abcdzccaa","Abcdxbb","Abcdya","Madison","Ashley","Sarah","Alexis","Emily","Hannah","Madison","Samantha","Jessica","Elizabeth","Taylor"];
addQuestionToDom('Bubble Sort',stringArr,bubbleSortString);
addQuestionToDom('Bubble Sort',stringArr,bubbleSortString);
addQuestionToDom('Bubble Sort',stringArr,bubbleSortString);