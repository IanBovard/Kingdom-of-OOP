import LivingThing from './LivingThing.js';
export default class Archaea extends LivingThing{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile){
    super(name, unicellular, trueNucleus, anaerobic, asexual, mobile);
    this._unicellular = true;
    this._trueNucleus = false;
    this._anaerobic = true;
    this._asexual = true;
    this._mobile = false;
  }
}
const PlasticMan = new Archaea();
PlasticMan.getUnicellular();