import co from 'co';
import Fool from '../dist/Fool';
import fs from 'fs';
import path from 'path';
import Nightmare from 'nightmare';

const googleItineraryPath = path.join(__dirname, './google.json');
const googleItinerary = JSON.parse(fs.readFileSync(googleItineraryPath, 'utf8'));

const yahooItineraryPath = path.join(__dirname, './yahoo.json');
const yahooItinerary = JSON.parse(fs.readFileSync(yahooItineraryPath, 'utf8'));

const fool = new Fool(Nightmare({ show: true }));

co(function* () {
  const results = [];
  results.push(yield fool.travel(googleItinerary));
  results.push(yield fool.travel(yahooItinerary));
  fool.kill();
  return results;
}).then(results => {
  console.log(results);
});
