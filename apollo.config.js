// local schema.graphql file
module.exports = {
  client: {
    includes: ['src/**/*.js', 'src/**/*.py', 'src/**/*.dart'],
    service: {
      name: 'local-schema',
      localSchemaFile: './schema.graphql',
    },
  },
};

// introspection query from running server
// module.exports = {
//   client: {
//     includes: ['src/**/*.js', 'src/**/*.py', 'src/**/*.dart'],
//     service: {
//       url: 'http://localhost:3000/graphiql',
//       // optional headers
//       headers: {
//       },
//       // optional disable SSL validation check
//       skipSSLValidation: true
//     }
//   }
// };