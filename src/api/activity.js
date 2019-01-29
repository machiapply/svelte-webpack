import gql from 'graphql-tag';
import {
  fieldActivitySchema,
  storageActivitySchema,
  deliveryActivitySchema,
  contractSchema,
  fertilizerSchema,
  chemicalSchema
} from './';
import { getAllFields, getAllCropsForField } from 'api/field';
import { getAllStorages } from './storage';
// import { getAllContracts } from 'api/contract';

// Fragments
const getActivityForField = `
getActivityForField(id: $id) {
  ${fieldActivitySchema}
}`;

const getAllActivitiesForField = `
getAllActivitiesForField(season: $season) {
  ${fieldActivitySchema}
}`;

export const getActivityForStorage = `
  getActivityForStorage(id: $id) {
    ${storageActivitySchema}
  }
`;

const getAllActivitiesForStorage = `
getAllActivitiesForStorage(season: $season) {
  ${storageActivitySchema}
}`;

export const getActivityForDelivery = `
  getActivityForDelivery(id: $id) {
    ${deliveryActivitySchema}
  }
`;

export const getAllActivitiesForDelivery = `
  getAllActivitiesForDelivery(season: $season) {
    ${deliveryActivitySchema}
  }
`;

// Queries
// Retrieves a Field Crop for the specified Field Crop id
export const FETCH_ACTIVITY = gql`
query ($id: ID!) {
  ${getActivityForField}
}`;

export const FETCH_STORAGE_ACTIVITY_WITH_FIELDS = gql`
query ($season: Int, $id: ID!, $active: Boolean) {
  ${getActivityForStorage}
  ${getAllFields}
  ${getAllCropsForField}
  ${getAllStorages}
}`;

export const FETCH_HARVESTING_ACTIVITY_WITH_FIELDS = gql`
query ($season: Int, $id: ID!, $active: Boolean) {
  ${getActivityForField}
  ${getAllFields}
  ${getAllCropsForField}
}`;

export const FETCH_DELIVERY_ACTIVITY_WITH_FIELDS = gql`
  query ($season: Int, $id: ID!, $active: Boolean){
    ${getActivityForDelivery}
    ${getAllFields}
    ${getAllCropsForField}
    ${getAllStorages}
  }
`;

export const FETCH_DELIVERY_ACTIVITY_BY_CONTRACT = gql`
  query ($season: Int, $contractId: String){
    getAllActivitiesForDelivery(season: $season, contractId: $contractId) {
      ${deliveryActivitySchema}
    }
  }
`;

export const FETCH_ALL_ACTIVITIES_WITH_FIELDS = gql`
query ($season: Int, $active: Boolean) {
  ${getAllActivitiesForDelivery}
  ${getAllActivitiesForStorage}
  ${getAllFields}
  ${getAllCropsForField}
  ${getAllActivitiesForField}
}`;

export const FETCH_ALL_EXCEPT_ACTIVITIES = gql`
query ($season: Int, $active: Boolean) {
  ${getAllFields}
  ${getAllCropsForField}
  ${getAllStorages}
  getAllContracts(season: $season) {
    ${contractSchema}
  }
}`;

export const FETCH_ALL_FERTILIZERS = gql`
query {
  getAllFertilizers {
    ${fertilizerSchema}
  }
}`;

export const FETCH_ALL_CHEMICALS = gql`
query {
  getAllChemicals {
    ${chemicalSchema}
  }
}`;

// Mutations
export const MUTATION_CREATE_FIELD_ACTIVITY = gql`
mutation ($fieldActivityCreateInput: FieldActivityCreateInput!) {
  createActivityForField(activity: $fieldActivityCreateInput) {
    ${fieldActivitySchema}
  }
}`;
export const MUTATION_CREATE_STORAGE_ACTIVITY = gql`
mutation ($storageActivityCreateInput: StorageActivityCreateInput!) {
  createActivityForStorage(activity: $storageActivityCreateInput) {
    ${storageActivitySchema}
  }
}`;
export const MUTATION_CREATE_DELIVERY_ACTIVITY = gql`
mutation ($deliveryActivityCreateInput: DeliveryActivityCreateInput!) {
  createActivityForDelivery(activity: $deliveryActivityCreateInput) {
    ${deliveryActivitySchema}
  }
}`;
export const MUTATION_CREATE_FERTILIZER = gql`
mutation ($fertilizerCreateInput: FertilizerCreateInput!) {
  createFertilizer(fertilizer: $fertilizerCreateInput) {
    ${fertilizerSchema}
  }
}`;

export const MUTATION_CREATE_CHEMICAL = gql`
mutation ($chemicalCreateInput: ChemicalCreateInput!) {
  createChemical(chemical: $chemicalCreateInput) {
    ${chemicalSchema}
  }
}`;
