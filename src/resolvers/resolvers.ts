export default {
  Query: {
    async countries(obj: any, args: any, context: any) {
      return context.dataSources.country.countries(args, obj);
    },
    presidents(obj: any, args: any, context: any) {
      return context.dataSources.president.presidents();
    },
  },
};
