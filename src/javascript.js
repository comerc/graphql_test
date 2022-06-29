var gql = (x) => x

var query = gql`
  query getPeople {
    allPeople {
      people {
        id
        name
      }
    }
  }
`;
