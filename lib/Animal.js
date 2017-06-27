import Eukaryota from './Eukaryota.js';
export default class Animal extends Eukaryota{
  constructor(name, symmetry){
    super(name, symmetry);
    this._symmetry = symmetry;
  }
  get Symmetry(){
    return this._symmetry;
  }
  set Symmetry(symmetry){
    if (typeof symmetry === 'string'){
      this._symmetry = symmetry;
    }
  }
}
