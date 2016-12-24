import Nightmare from 'nightmare';
import Itinerary from './Itinerary';
import co from 'co';

export default class Fool {
  constructor(options = {}) {
    const { show = true } = options;
    this.nightmare = Nightmare({ show });
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
