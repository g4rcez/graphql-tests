import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import Masks from '../utils/Masks';
import ICep from '~/ICep';
import ICepAPI from '~/ICepAPI';

export default class Cep extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.postmon.com.br/v1/cep/';
  }

  async getCep(cep: string): Promise<ICep> {
    if (Masks.cepMask.test(cep)) {
      const response = await this.get(cep);
      return this.reduce(response);
    }
  }

  reduce(cep: ICepAPI): ICep {
    return {
      logradouro: cep.logradouro,
      cidade: cep.cidade,
      bairro: cep.bairro,
      estado: cep.estado,
      uf: cep.estado_info.nome,
      cep: cep.cep,
    };
  }
}
