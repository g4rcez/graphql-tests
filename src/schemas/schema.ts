import { gql } from 'apollo-server';

export default gql`
  type Query {
    countries: [Country]
    presidents(length: Int): [President]
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
