import { gql } from 'apollo-server';

export default gql`
  type Query {
    countries: [Country]
    cep(cep: String): Cep
    presidents(length: Int): [President]
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
