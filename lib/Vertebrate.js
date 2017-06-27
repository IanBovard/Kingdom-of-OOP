import Bilateral from './Bilateral.js';
export default class Vertebrate extends Bilateral{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph, symmetry, body){
    super(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph, symmetry, body);
    this._name = name;
    this._body = 'vertebral-column';
  }
}
