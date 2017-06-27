import Eukaryota from './Eukaryota.js';
export default class Plant extends Eukaryota{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph){
    super(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph);
    this._name = name;
    this._unicellular = false;
    this._asexual = true;
    this._mobile = false;
    this._heterotroph = false;
  }
}
