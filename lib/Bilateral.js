import Animal from './Animal.js';
export default class Bilateral extends  Animal{
  constructor(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph, symmetry, body){
    super(name, unicellular, trueNucleus, anaerobic, asexual, mobile, heterotroph, symmetry, body);
    this._name = name;
    this._body = body;
    this._symmetry = symmetry;
  }
  getBody(){
    return this._body;
  }
  setBody(body){
    if (typeof body === 'string'){
      this._body = body;
    }
  }
}
