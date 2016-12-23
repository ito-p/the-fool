import vo from 'vo';
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
    const v = vo(function* (){
      while(sequences.isFinished === false) {
        const result = yield sequences.execute(scraper);
        console.log(result);
      }
    })
    .then(result => {
      console.log('resultdesu', result);
    })
    .catch(err => {
      console.error(err);
    });
    //   return results
    //     .filter(result => result && result.isRequired)
    //     .map(result => result.data);
    // }).then(status => {
    //   console.log(status);
    // }).catch(e => console.error(e));
  }
}
