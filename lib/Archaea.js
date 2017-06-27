import LivingThing from './LivingThing.js';
export default class Archaea extends LivingThing{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile){
    super(name, true, false, true, true, false);
    this._name = name;
  }
}
