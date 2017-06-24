import Bilateral from './Bilateral.js';
export default class Mollusk extends Bilateral{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph, symmetry, body){
    super(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph, symmetry, body);
    this._name = name;
    this._body = 'soft-bodied';
  }
}
const RedLanternSuperGirl = new Mollusk();
RedLanternSuperGirl.getBody();