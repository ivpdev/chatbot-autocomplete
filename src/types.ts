type NGramSize = 2 | 3;

type Utterance = string;
type Token = string;
type TokenNormalized = string;
type UtteranceTokenized = Token[] | TokenNormalized[];
type Corpus = Utterance[];

type BiGram = [Token, Token]
type BiGramNormalized = [TokenNormalized, TokenNormalized]
type TriGram = any
type TriGramNormalized = any
type NGram = BiGram | TriGram

type Weight = number;
type Example<NGramSize> = [NGram, Token, Weight]; //Normalized ?
type Model<NGramSize> = any;
type Confidence = number;
type Prediction = [Token, Confidence];

type retrain = (model: Model<NGramSize>, examples: Example<NGramSize>[]) => Model<NGramSize>;
type predict = (model: Model<NGramSize>, ngram: NGram) => Prediction[];

export { NGramSize, Utterance, Corpus, Token, TokenNormalized, UtteranceTokenized,
    BiGram, BiGramNormalized, TriGram, TriGramNormalized, NGram,
    Weight, Example, Model, Confidence, Prediction };

/*

let model = trainFromCorpus(corpus);
model = loadFromFile(file);
writeModelInFile(model, file);
let model = updateModel(model, utterance)
let model = updateModel(model, ngram)



----
main

//load data
//split to examples
//train classifier (bayes?)
//export classifier */