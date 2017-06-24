import Eukaryota from './Eukaryota.js';
export default class Fungi extends Eukaryota{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph){
    super(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph);
    this._name = name;
    this._unicellullar = false;
    this._asexual = true;
    this._mobile = false;
    this._heterotroph = true;
  }
}
const ElongatedMan = new Fungi();
ElongatedMan.getHeterotroph();