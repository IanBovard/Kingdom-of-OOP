import LivingThing from './LivingThing.js';
export default class Bacteria extends LivingThing{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile){
    super(name, true, false, false, true, false);
    this._name = name;
  }
}
