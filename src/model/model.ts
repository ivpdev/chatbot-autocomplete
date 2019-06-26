import { Example, NGramSize, Model, NGram, Token } from '../types';
import ModelImplNaiveBayes from './ModelImplNaiveBayes';

const train = (examples: Example<NGramSize>[]): Model<NGramSize> => {
    const model = new ModelImplNaiveBayes();
    model.train(examples);

    return model;
};

const retrain = (model: Model<NGramSize>, examples: Example<NGramSize>[]): Model<NGramSize> => {
    model.retrain(examples);

    return model;
};

const predict = (model: Model<NGramSize>, ngram: NGram): Model<NGramSize> => {
    return model.predict(ngram);
};


enum ModelEvaluationMetric {
    Perplexity
};

const evaluate = (model: Model<NGramSize>, metric: ModelEvaluationMetric, data: any) => {
    //TODO
}

export { train, retrain, predict, ModelEvaluationMetric };