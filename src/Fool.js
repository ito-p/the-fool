import Itinerary from './Itinerary';
import co from 'co';

export default class Fool {
  constructor(nightmare, options = {}) {
    if (!nightmare) throw new Error('Please give me Nightmare into constructor argument 1 !');

    this.nightmare = nightmare;
  }

  travel(json) {
    const itinerary = new Itinerary(json, this.nightmare);
    return this._departure(itinerary);
  }

  _departure(itinerary) {
    const guidance = itinerary.getGuidance();
    return guidance();
  }

  kill() {
    this.nightmare.halt();
  }
}
