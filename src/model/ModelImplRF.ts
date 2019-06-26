import { Example, NGramSize, Model, NGram, Token } from '../types';

class ModelImplRF<NGramSize> {
    examples: Example<NGramSize>[] = [];
    model: any;

    train(examples: Example<NGramSize>[]) {
        this.examples = examples;
    }

    retrain(newExamples: Example<NGramSize>[]) {
        this.examples = this.examples.concat(newExamples);
    }

    predict(nGram: NGram): Token {
        //TODO check arity

        return "TODO";
    }

}