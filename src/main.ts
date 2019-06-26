import { readData } from './fileIO';
import { toExamples } from './processing';
import { train, predict } from './model/model';

const inputData = "data/1.txt";

const corpus = readData(inputData);
const examples = toExamples(corpus, 2);
const model = train(examples);

const testNGram = ["you", "are"];
const predicted = predict(model, testNGram);

console.log(predicted);



