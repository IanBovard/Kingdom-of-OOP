import LivingThing from './LivingThing.js';
export default class Archaea extends LivingThing{
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    super(name, uniCellular, trueNucleus, anaerobic, asexual, mobile);
  }
}
const Spiderman = new Archaea('Spider-man', true, true, true, false, true);
Spiderman.setMobile(false);