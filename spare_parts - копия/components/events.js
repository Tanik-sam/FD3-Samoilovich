import {EventEmitter} from 'events';

let spEvents=new EventEmitter(); 
 
// в потоке voteEvents будут все события, связанные с голосованием
// событие "ClientClicked" - кликнут вариант ответа, его сэмиттирует VotesAnswer и примет VotesBlock
// событие "ClientTextChanged" - изменён текст свободного ответа, его сэмиттирует VotesAnswer и примет VotesBlock
// лучше работать не с текстовыми литералами, а объявить переменные с соответствующими значениями

export {spEvents};
