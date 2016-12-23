import Fool from '../index';
import fs from 'fs';
import path from 'path';

const readPath = path.join(__dirname, './google.json');
const json = fs.readFileSync(readPath, 'utf8');
const googleItinerary = JSON.parse(json);

const fool = new Fool();
fool.travel(googleItinerary).then(results => {
  console.log(results);
});
