import Fool from '../Fool';
import co from 'co';
import fs from 'fs';
import path from 'path';

it('get title from github page', () => {

  const githubPath = path.join(__dirname, './github.json');
  const githubItinerary = JSON.parse(fs.readFileSync(githubPath, 'utf8'));

  const fool = new Fool({ show: false });

  return co(function* () {
    const results = [];
    results.push(yield fool.travel(githubItinerary));
    fool.kill();
    return results;
  }).then(results => {
    expect(results).toEqual([[]]);
  });

});
