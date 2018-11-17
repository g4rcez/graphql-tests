import { RESTDataSource } from 'apollo-datasource-rest';
import IPresident from '~/IPresident';
import Country from './Country';
import presidents from '../database/presidents';

export default class President extends RESTDataSource {
  async presidents() {
    return presidents.map((x) => this.reduce(x));
  }

  async president(id: number) {
    return new Promise((resolve, reject) => {
      return resolve(presidents.find((x) => x.id === id));
    });
  }

  async reduce(president: IPresident): Promise<IPresident> {
    return {
      id: president.id,
      age: president.age,
      name: president.name,
      country: await new Country().countryByName(president.country.name),
    };
  }
}
