import { Corpus, Model, NGramSize } from './types';
import fs from 'fs';

type readModel = (filename: string) => null
type writeModel = (model: Model<NGramSize>, fileName: string) => null
const readData = (filename: string): Corpus => {
  const file = fs.readFileSync(filename, 'utf8');
  return file.split('\n');
}

export { readData, writeModel };
