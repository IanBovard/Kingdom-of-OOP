export default class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._asexual = asexual;
    this._anaerobic = anaerobic;
    this._mobile = mobile;
  }
  get name(){
    return this._name;
  }
  set name(name){
    if (typeof name === 'string'){
      this._name = name;
    } else {
      return false;
    }
  }
  get uniCellular(){
    return this._uniCellular;
  }
  set uniCellular(uniCellular){
    if (typeof uniCellular === 'boolean'){
      this._uniCellular = uniCellular;
    } else {
      return false;
    }
  }
  get multiCellular(){
    if (this._uniCellular === true){
      this._uniCellular = false;
      return this._uniCellular;
    } else {
      this._uniCellular = true;
      return this._uniCellular;
    }

  }
  set multiCellular(uniCellular){
    if (uniCellular === true){
      this._uniCellular = false;
    } else {
      this._uniCellular = true;
    }
  }
  get eukaryote(){
    return this._trueNucleus;
  }
  set eukaryote(trueNucleus){
    if (typeof trueNucleus === 'boolean'){
      this._trueNucleus = trueNucleus;
    } else {
      return false;
    }
  }
  get prokaryote(){
    if (this._trueNucleus === true){
      this._trueNucleus = false;
      return this._trueNucleus;
    } else {
      this._trueNucleus = true;
      return this._trueNucleus;
    }

  }
  set prokaryote(trueNucleus){
    if (trueNucleus === true){
      this._trueNucleus = false;
    } else {
      this._trueNucleus = true;
    }
  }
  get anaerobic(){
    return this._anaerobic;
  }
  set anaerobic(anaerobic){
    if (typeof anaerobic === 'boolean'){
      this._anaerobic = anaerobic;
    }
  }
  get aerobic(){
    if (this._anaerobic === true){
      this._anaerobic = false;
      return this._anaerobic;
    } else {
      this._anaerobic = true;
      return this._anaerobic;
    }

  }
  set aerobic(anaerobic){
    if (anaerobic === true){
      this._anaerobic = false;
    } else {
      this._anaerobic = true;
    }
  }
  get asexual(){
    return this._asexual;
  }
  set asexual(asexual){
    if (typeof asexual === 'boolean'){
      this._asexual = asexual;
    }
  }
  get sexual(){
    if (this._asexual === true){
      this._asexual = false;
      return this._asexual;
    } else {
      this._asexual = true;
      return this._asexual;
    }

  }
  set sexual(asexual){
    if (asexual === true){
      this._asexual = false;
    } else {
      this._asexual = true;
    }
  }
  get mobile(){
    return this._mobile;
  }
  set mobile(mobile){
    if (typeof mobile === 'boolean'){
      this._mobile = mobile;
    }
  }
  get immobile(){
    if (this._mobile === true){
      this._mobile = false;
      return this._mobile;
    } else {
      this._mobile = true;
      return this._mobile;
    }

  }
  set immobile(mobile){
    if (mobile === true){
      this._mobile = false;
    } else {
      this._mobile = true;
    }
  }
}
