import gql from 'graphql-tag';
import { contractSchema, ActivitySchema } from './';

// Fragments
// used for dashboard
export const getAllContracts = `
getAllContracts(season: $season, active: $active) {
  ${contractSchema}
}`;

const getAllContractsByCrops = `
getAllContracts(season: $season, cropName: $cropName, cropVariety: $cropVariety, active: $active) {
  ${contractSchema}
}`;

// Queries
// retrieve all contacts
export const FETCH_ALL_CONTRACTS = gql`
query ($season: Int, $cropName: String, $cropVariety: String, $active: Boolean) {
  ${getAllContractsByCrops}
}
`;

export const FETCH_CONTRACT = gql`
query ($id: ID!) {
  getContract (id: $id) {
    ${contractSchema}
  }
}`;

// Mutations
export const MUTATION_CREATE_CONTRACT = gql`
mutation createContract($contractCreateInput: ContractCreateInput!) {
  createContract(contract:$contractCreateInput) {
    ${contractSchema}
  }
}`;

export const MUTATION_UPDATE_CONTRACT = gql`
mutation updateContract($id: ID!, $contractUpdateInput: ContractUpdateInput!) {
  updateContract(id: $id, contract:$contractUpdateInput) {
    ${contractSchema}
  }
}`;

export const MUTATION_DELETE_CONTRACT = gql`
mutation ($id: ID!) {
  deleteContract (id: $id) {
    ${contractSchema}
  }
}`;

export const FETCH_CONTRACT_WITH_ACTIVITIES = gql`
  query($id: ID!, $season: Int, $contractName: String) {
    getContract (id: $id) {
      ${contractSchema}
    }
    getAllActivities(season: $season, destinationType: CONTRACT, destinationName: $contractName) {
      ${ActivitySchema}
    }
  }
`;
