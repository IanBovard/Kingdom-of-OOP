import Animal from './Animal.js';
export default class Cnidarian extends Animal{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph, symmetry){
    super(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph, symmetry);
    this._symmetry = 'radial';
  }
}
const CrazyQuilt = new Cnidarian();
CrazyQuilt.getSymmetry();