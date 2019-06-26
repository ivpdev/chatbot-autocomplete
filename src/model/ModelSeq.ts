import { Example, NGramSize, Model, NGram, Token, UtteranceTokenized } from '../types';

class ModelSeq {
    hmm;

    train(tokenizedU:  UtteranceTokenized[]) {
        //TODO normalized token => token

       // this.hmm = new HMM();
        this.hmm.initialize( tokenizedU, 3 );
    }

    retrain(seq: Token[]) {
        //TODO
    }

    predict(ngram: NGram) {

    }
}
