import LivingThing from './LivingThing.js';
export default class Eukaryota extends LivingThing{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph){
    super(name, unicellular, trueNucleus, anaerobic, asexual, mobile);
    this._name = name;
    this._unicellular = unicellular;
    this._asexual = asexual;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
    this._trueNucleus = true;
    this._anaerobic = false;
  }
  getHeterotroph(){
    return this._heterotroph;
  }
  setHeterotroph(heterotroph){
    if (typeof heterotroph === 'boolean'){
      this._heterotroph = heterotroph;
    }
  }
  getAutotroph(){
    return this._heterotroph;
  }
  setAutotroph(heterotroph){
    if (typeof heterotroph === 'boolean'){
      this._heterotroph = heterotroph;
    }
  }
}
const TheSpectre = new Eukaryota();
TheSpectre.getHeterotroph();