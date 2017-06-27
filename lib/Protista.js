import Eukaryota from './Eukaryota.js';
export default class Protista extends Eukaryota{
  constructor(name, unicellular, mobile, heterotroph){
    super(name, unicellular, true, mobile, heterotroph);
  }
}
