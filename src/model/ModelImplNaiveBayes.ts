§import { Example, NGramSize, Model, NGram, Token } from '../types';
import { MultinomialNB } from 'machinelearn/naive_bayes';

class ModelImplNaiveBayes<NGramSize> {
    examples: Example<NGramSize>[] = [];
    model: any;


    train(examples: Example<NGramSize>[]) {
        this.examples = examples;
        this.model = new MultinomialNB();

        const X = this.examples.map(example => example[0]);
        const y = this.examples.map(example => example[1]);

        this.model.fit( X, y );
    }

    retrain(newExamples: Example<NGramSize>[]) {
        const examples = this.examples.concat(newExamples);

        this.train(examples);
    }

    predict(nGram: NGram) {
        //TODO check arity


        return this.model.predict( [nGram] );
    }

}

export default ModelImplNaiveBayes;