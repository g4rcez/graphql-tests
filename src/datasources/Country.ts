import ICountry from '~/ICountry';
import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import ICurrency from '~/ICurrency';
import countries from '../database/countries';

export default class Country extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://restcountries.eu/rest/v2/';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  async countries(args: any, obj: any, info: any) {
    const res = await this.get('all');
    return res && res.length ? res.map((x: ICountry) => this.reduce(x)) : [];
  }

  async countryByName(name: string): Promise<ICountry> {
    return new Promise((resolve, reject) => resolve(countries.find(x => x.name === name));
  }

  async reduce(country: ICountry) {
    return {
      president: {},
      name: country.name,
      capital: country.capital,
      altSpellings: country.altSpellings,
      region: country.region,
      currencies: country.currencies.map((x: ICurrency) => ({
        code: x.code,
        name: x.name,
        symbol: x.symbol,
      })),
    };
  }
}
