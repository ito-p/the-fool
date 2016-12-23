import co from 'co';
import Sequences from './Sequences';

export default class Itinerary {
  constructor(json, scraper) {
    if (Array.isArray(json.data) === false) {
      throw new Error('json.data is must be array.');
    }

    this._sequences = new Sequences(Array.from(json.data));
    this._scraper = scraper;
  }

  getGuidance() {
    const sequences = this._sequences;
    const scraper = this._scraper;

    return co.wrap(function* (){
      const results = [];
      while(sequences.isFinished === false) {
        const result = yield sequences.execute(scraper);
        results.push(result);
      }
      return results
        .filter(result => result && result.isRequired)
        .map(result => result.data);;
    });
  }
}
