export default class Sequence {
  constructor() {
    this._commands = [];
  }

  pushCommand(command) {
    this._commands.push(command);
  }

  execute(scraper) {
    return this._chainExecution(scraper, 0);
  }

  _chainExecution(chainObject, index) {
    const result = this._executeCommand(chainObject, this._commands[index]);
    if (index >= this._commands.length - 1) {
      return result;
    }

    return this._chainExecution(chainObject, index + 1);
  }

  _executeCommand(scraper, command) {
    if (command.method === 'scrape') {
      return scraper.evaluate(function(query, property) {
        console.log(query);
        return {
          isRequired: true,
          data: document.querySelector(query)[property]
        };
      }, ...command.args);
    }

    if (command.method === 'snatch') {
      return scraper.evaluate(function(query, property) {
        const elements = Array.from(document.querySelectorAll(query));
        return {
          isRequired: true,
          data: elements.map(element => element[property])
        };
      }, ...command.args);
    }
    return scraper[command.method](...command.args);
  }
}
