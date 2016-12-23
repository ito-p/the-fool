import Command from './Command';
import Sequence from './Sequence';

export default class Sequences {
  constructor(rawCommands) {
    this._sequences = [];
    this._currentIndex = 0;
    this._sequences.push(new Sequence());

    rawCommands.forEach((item, index) => {
      const command = new Command(item);
      this._sequences[this._sequences.length - 1].pushCommand(command);
      if (command.isEvaluate && rawCommands.length - 1 > index) {
        this._sequences.push(new Sequence());
      }
    }, this);
  }

  get isFinished() {
    return this._currentIndex > this._sequences.length - 1;
  }

  execute(scraper) {
    return this._sequences[this._currentIndex++].execute(scraper);
  }
}
