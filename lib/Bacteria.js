import LivingThing from './LivingThing.js';
export default class Bacteria extends LivingThing{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile){
    super(name, unicellular, trueNucleus, anaerobic, asexual, mobile);
    this._name = name;
    this._unicellular = true;
    this._trueNucleus = false;
    this._anaerobic = false;
    this._asexual = true;
    this._mobile = false;
  }
}
const DetectiveChimp = new Bacteria();
DetectiveChimp.getMobile();