import LivingThing from './LivingThing.js';
export default class Eukaryota extends LivingThing{
  constructor(name, unicellular, asexual, mobile, heterotroph){
    super(name, unicellular, asexual, mobile);
    this._trueNucleus = true;
    this._anaerobic = false;
    this._heterotroph = heterotroph;
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