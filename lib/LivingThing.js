export default class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._asexual = asexual;
    this._anaerobic = anaerobic;
    this._mobile = mobile;
  }
  getName(){
    return this._name;
  }
  setName(name){
    if (typeof name === 'string'){
      this._name = name;
    }
  }
  getUnicellular(){
    return this._uniCellular;
  }
  setUnicellular(uniCellular){
    if (typeof uniCellular === 'boolean'){
      this._uniCellular = uniCellular;
    }
  }
  getMultiCellular(){
    return this._uniCellular;
  }
  setMultiCellular(uniCellular){
    if (typeof uniCellular === 'boolean'){
      this._uniCellular = uniCellular;
    }
  }
  getEukaryote(){
    return this._trueNucleus;
  }
  setEukaryote(trueNucleus){
    if (typeof trueNucleus === 'boolean'){
      this._trueNucleus = trueNucleus;
    }
  }
  getProkaryote(){
    return this._trueNucleus;
  }
  setProkaryote(trueNucleus){
    if (typeof trueNucleus === 'boolean'){
      this._trueNucleus = trueNucleus;
    }
  }
  getAnaerobic(){
    return this._anaerobic;
  }
  setAnaerobic(anaerobic){
    if (typeof anaerobic === 'boolean'){
      this._anaerobic = anaerobic;
    }
  }
  getAerobic(){
    return this._anaerobic;
  }
  setAerobic(anaerobic){
    if (typeof anaerobic === 'boolean'){
      this._anaerobic = anaerobic;
    }
  }
  getAsexual(){
    return this._asexual;
  }
  setAsexual(asexual){
    if (typeof asexual === 'boolean'){
      this._asexual = asexual;
    }
  }
  getSexual(){
    return this._asexual;
  }
  setSexual(asexual){
    if (typeof asexual === 'boolean'){
      this._asexual = asexual;
    }
  }
  getMobile(){
    return this._mobile;
  }
  setMobile(mobile){
    if (typeof mobile === 'boolean'){
      this._mobile = mobile;
    }
  }
  getImmobile(){
    return this._mobile;
  }
  setImmobile(mobile){
    if (typeof mobile === 'boolean'){
      this._mobile = mobile;
    }

  }
}

const WonderWoman = new LivingThing ('Wonder Woman', false, false, true, true);
WonderWoman.getAsexual();