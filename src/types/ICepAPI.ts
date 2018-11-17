export default interface ICepAPI {
  bairro: string;
  cidade: string;
  logradouro: string;
  estado_info: EstadoInfo;
  cep: string;
  cidade_info: CidadeInfo;
  estado: string;
}

interface EstadoInfo {
  area_km2: string;
  codigo_ibge: string;
  nome: string;
}

interface CidadeInfo {
  area_km2: string;
  codigo_ibge: string;
}
