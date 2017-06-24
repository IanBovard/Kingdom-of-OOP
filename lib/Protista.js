import Eukaryota from './Eukaryota.js';
export default class Protista extends Eukaryota{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph){
    super(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph);
    this._name = name;
    this._unicellular = unicellular;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
    this._asexual = true;
  }
}
const TheQuestion = new Protista();
TheQuestion.getAsexual();