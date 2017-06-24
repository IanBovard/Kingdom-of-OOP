class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._asexual = asexual;
    this.__mobile = mobile;
  }
  getName(){
    return this._name;
  }
  setName(name){
    if (typeof name === "string"){
      this._name = name;
    }
  }
  getUnicellular(){
    return this._uniCellular;
  }
  setUnicellular(uniCellular){
    if (typeof uniCellular === "boolean"){
      this._uniCellular = uniCellular;
    }
  }
  getMultiCellular(){
    return this._uniCellular;
  }
  setMultiCellular(uniCellular){
    if (typeof uniCellular === "boolean"){
      this._uniCellular = uniCellular;
    }
  }
  getEukaryote(){
    return this._trueNucleus;
  }
  setEukaryote(trueNucleus){
    if (typeof trueNucleus === "boolean"){
      this._trueNucleus = trueNucleus;
    }
  }
  getProkaryote(){
    return this._trueNucleus;
  }
  setProkaryote(){
    if (typeof trueNucleus === "boolean"){
      this._trueNucleus = trueNucleus;
    }
  }
  getAsexual(){
    return this._asexual;
  }
  setAsexual(asexual){
    this._asexual = asexual;
  }
  getMobile(){
    return this.__mobile;
  }
  setMobile(mobile){
    this.__mobile = mobile;
  }
}

const WonderWoman = new LivingThing ("Wonder Woman", )