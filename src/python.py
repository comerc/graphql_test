def gql(x): return x


query = gql('''
  query getPeople {
    allPeople {
      people {
        id
        name
      }
    }
  }
''')
