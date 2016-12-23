import Command from './Command';
import Sequence from './Sequence';

export default class Sequences {
  constructor(rawCommands) {
    this._sequences = [];
    this._currentIndex = 0;
    this._sequences.push(new Sequence());

    rawCommands.forEach(item => {
      const command = new Command(item);
      if (command.isEvaluate) {
        this._sequences.push(new Sequence());
      }
      this._sequences[this._sequences.length - 1].pushCommand(command);
    });
  }

  get isFinished() {
    return this._currentIndex > this._sequences.length - 1;
  }

  execute(scraper) {
    return this._sequences[this._currentIndex++].execute(scraper);
  }
}
