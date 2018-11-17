import ICountry from '~/ICountry';
export default interface IPresident {
  name: string;
  age: number;
  id: number;
  country?: ICountry
}
