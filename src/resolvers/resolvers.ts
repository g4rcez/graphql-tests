export default {
  Query: {
    async countries(obj: any, args: any, context: any) {
      return context.dataSources.country.countries(args, obj);
    },
    presidents(obj: any, args: any, context: any) {
      return context.dataSources.president.presidents();
    },
    cep(obj: any, { cep }: any, context: any) {
      return context.dataSources.cep.getCep(cep);
    },
    plate(obj: any, { plate }: any, context: any) {
      return context.dataSources.plate.getPlate(plate);
    },
  },
};
