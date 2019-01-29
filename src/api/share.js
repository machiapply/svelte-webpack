import gql from 'graphql-tag';

export const MUTATION_CREATE_SHARE = gql`
  mutation($id: ID!, $season: Int) {
    createShareForId(id: $id, season: $season)
  }
`;
