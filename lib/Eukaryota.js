import LivingThing from './LivingThing.js';
export default class Eukaryota extends LivingThing{
  constructor(name, unicellular, asexual, mobile, heterotroph){
    super(name, unicellular, true, false, asexual, mobile, heterotroph);
    this._name = name;
    this._unicellular = unicellular;
    this._asexual = asexual;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
  }
  get heterotroph(){
    return this._heterotroph;
  }
  set heterotroph(heterotroph){
    if (typeof heterotroph === 'boolean'){
      this._heterotroph = heterotroph;
    }
  }
  get autotroph(){
    if (this._heterotroph === true){
      this._heterotroph = false;
      return this._heterotroph;
    } else {
      this._heterotroph = true;
      return this._heterotroph;
    }

  }
  set autotroph(heterotroph){
    if (heterotroph === true){
      this._heterotroph = false;
    } else {
      this._heterotroph = true;
    }
  }
}
