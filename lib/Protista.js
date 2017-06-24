import Eukaryota from './Eukaryota.js';
export default class Protista extends Eukaryota{
  constructor(name, unicellular, asexual, mobile, heterotroph){
    super(name, unicellular, asexual, mobile, heterotroph);
    this._asexual = true;
  }
}
const TheQuestion = new Protista();
TheQuestion.getAsexual();