import IPresident from '~/IPresident';
import ICurrency from '~/ICurrency';

export default interface Country {
  president?: IPresident;
  name: string;
  capital: string;
  altSpellings: Array<string>;
  region: string;
  currencies: Array<ICurrency>;
}
