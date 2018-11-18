import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { search } from 'sinesp-api';
import IPlate from 'IPlate';
import States from '../utils/States';

export default class Plate extends RESTDataSource {
  constructor() {
    super();
  }

  async getPlate(plate: string): Promise<IPlate> {
    const res = await search(plate);
    return {
      municipio: res.municipio,
      modelo: res.modelo,
      mensagem: res.mensagemRetorno,
      marca: res.marca,
      uf: res.uf,
      estado: States.find((x) => x.uf === res.uf).state,
      cor: res.cor,
      chassi: res.chassi,
      anoModelo: res.anoModelo,
      ano: res.ano,
    };
  }
}
