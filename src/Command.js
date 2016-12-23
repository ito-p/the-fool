export default class Command {
  constructor(command) {
    const [method, ...args] = command;
    this._method = method;
    this._args = args;
  }

  get method() {
    return this._method;
  }

  get args() {
    return this._args;
  }

  get isEvaluate() {
    switch (this._method) {
      case 'scrape':
      case 'snatch':
        return true;
      default:
        return false;
    }
  }
}
