import { Utterance, Token, TokenNormalized, NGramSize,
    Example, NGram, BiGram, TriGram, Corpus, UtteranceTokenized } from './types';

const tokenizeUtterance = (utterance: Utterance): Token[] => {
    return utterance.split(" ") //TODO
}

const tokenize = (corpus: Utterance[]): UtteranceTokenized[] => {
    //return corpus.flatMap(tokenizeUtterance)

    let result: Token[] = [];

    return corpus.map(utterance => {
        const tokens = tokenizeUtterance(utterance);
        return tokens;
        //result = result.concat(tokens);
    })

    //return result;
}

// type normalize = (token: Token) => TokenNormalized; //stem, lemma ? TO LOWER!!!

const normalizeToken = (token: Token): TokenNormalized => {
    return token;
}

/*const createNGram = (nGramSize: NGramSize): NGram => {
    if (nGramSize = 2) {
        return new BiGram();
    } else if (nGramSize = 2) {
        return new TriGram();
    }
}*/

const buildNGrams = (tokensInput: Token[] | TokenNormalized[],
                  tokensOutput: Token[],
                  nGramSize: NGramSize): Example<NGramSize>[] => {

    const result: Example<NGramSize>[] = [];
    let i;
    for (i=0; i<tokensInput.length; i++) {
        if (i < nGramSize) continue;

        const nGram = []; // createNGram(nGramSize);

        let j, sourceIndex;
        for (j = 0; j < nGramSize; j++) {
            sourceIndex = i - nGramSize + j;

            nGram[j] = tokensInput[sourceIndex];
        }

        result.push([nGram, tokensOutput[i], 1])
    }

    return result;
}

const buildNGramsForAll = (utteranceTokenizedInput: UtteranceTokenized[],
                        utteranceTokenizedOutput: UtteranceTokenized[],
                        nGramSize: NGramSize): Example<NGramSize>[] => {

     let result: Example<NGramSize>[] = [];
     let i, uInput, uOutput, nGrams;
     for (i=0; i<utteranceTokenizedInput.length; i++) {
        uInput = utteranceTokenizedInput[i];
        uOutput = utteranceTokenizedOutput[i];

        nGrams = buildNGrams(uInput, uOutput, nGramSize);

        result = result.concat(nGrams);
     }

     return result;
}


const toExamples = (corpus: Corpus, nGramSize: NGramSize): Example<NGramSize>[] => {
    const tokenized: UtteranceTokenized[] = tokenize(corpus);
    const tokenizedNormalized: UtteranceTokenized[] = tokenized.map(tokens => tokens.map(normalizeToken));
    return buildNGramsForAll(tokenizedNormalized, tokenized, nGramSize);
}

export { tokenize, normalizeToken, toExamples };