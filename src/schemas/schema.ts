import { gql } from 'apollo-server';

export default gql`
  type Query {
    countries: [Country]
    cep(cep: String): Cep
    presidents(length: Int): [President]
    plate(plate: String): Plate
  }

  type Plate {
    cor: String
    mensagem: String
    modelo: String
    marca: String
    ano: String
    anoModelo: String
    place: String
    estado: String
    uf: String
    chassi: String
    municipio: String
  }

  type Cep {
    bairro: String
    cidade: String
    logradouro: String
    estado: String
    cep: String
    uf: String
  }

  type President {
    name(length: Int): String
    age: Int
    country: Country
  }

  type Country {
    president(id: Int): President
    name: String
    capital: String
    altSpellings: [String]!
    region: String
    currencies: [Currency]
  }

  type Currency {
    code: String
    name: String
    symbol: String
  }
`;
