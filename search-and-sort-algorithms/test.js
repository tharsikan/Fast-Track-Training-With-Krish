import {bubbleSort, bubbleSortString} from './bubble';
import {insertionSort} from './insertion';
import {selectionSort} from './selection';
import {quickSort} from './quick';
import {mergeSort} from './merge2';



function addQuestionToDom(headding,data,cb){
    const div = document.createElement('div');
    div.className = 'mydiv';
    const head = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const text = document.createTextNode(headding);
    const input = document.createTextNode(`the input data: ${data}`);
    let output = document.createTextNode(`the result : ${cb(data)}`);
    if (headding == 'Quick Sort' ||headding == 'Merge Sort'){
        cb(data,0,data.length-1);
        output = document.createTextNode(`the result : ${data}`);
    }; 
    head.appendChild(text);
    p1.appendChild(input);
    p2.appendChild(output);
    div.appendChild(head);
    div.appendChild(p1);
    div.appendChild(p2);

    document.querySelector('#myDiv')
    .appendChild(div);
}
const numArr = [7, 6, 10, 5, 9, 2,  1, 15, 7];
const nums = [ 12, 11, 13];
const stringArr = ["Emily","Hannah","Abcdzccaa","Abcdxbb","Abcdya","Madison","Ashley","Sarah","Alexis","Emily","Hannah","Madison","Samantha","Jessica","Taylor"];

addQuestionToDom('Bubble Sort',[...numArr],bubbleSort);
addQuestionToDom('Bubble Sort String',[...stringArr],bubbleSortString);
addQuestionToDom('Insertion Sort',[...numArr],insertionSort);
addQuestionToDom('Selection Sort',[...numArr],selectionSort);
addQuestionToDom('Quick Sort',[...numArr],quickSort);
addQuestionToDom('Merge Sort',[...nums],mergeSort);