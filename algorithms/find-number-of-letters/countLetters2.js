let sent = "I'm Studying These Days.";
const wordArray = Array.from(sent.replace(/ /g,''));
// function counter1(wordArray){
//     const objAllRepition = {};
//     wordArray.forEach(c => {
//         objAllRepition[c] = (objAllRepition[c] || 0) +1;
//     });
//     return objAllRepition;
// }
function counter(wordArray){
    const mapAllRepition = new Map();
    wordArray.forEach(c => {
        mapAllRepition.set(c, (mapAllRepition.get(c) || 0) +1);
    });
    return mapAllRepition;
}

console.log(counter(wordArray));