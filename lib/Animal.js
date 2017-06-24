import Eukaryota from './Eukaryota.js';
export default class Animal extends Eukaryota{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph, symmetry){
    super(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph, symmetry);
    this._name = name;
    this._symmetry = symmetry;
  }
  getSymmetry(){
    return this._symmetry;
  }
  setSymmetry(symmetry){
    if (typeof symmetry === 'string'){
      this._symmetry = symmetry;
    }
  }
}
const BwanaBeast = new Animal();
BwanaBeast.getSymmetry();