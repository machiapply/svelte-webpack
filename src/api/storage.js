import gql from 'graphql-tag';
import { storageSchema, storageActivitySchema, ActivitySchema } from './';
import { getAllFields, getAllCropsForField } from 'api/field';

// Fragments
export const getAllStorages = `
getAllStorages(active: $active) {
  ${storageSchema}
}`;

// Queries
// retrieve all storages
export const FETCH_ALL_STORAGES = gql`
query ($active: Boolean) {
  ${getAllStorages}
}
`;

export const FETCH_ALL_FIELDS_AND_STORAGES = gql`
query ($season: Int, $active: Boolean) {
  ${getAllFields}
  ${getAllCropsForField}
  ${getAllStorages}
}`;

// Retrieves a Storage for the specified Storage id
export const FETCH_STORAGE = gql`
query ($id: ID!) {
  getStorage(id: $id) {
    ${storageSchema}
  }
}`;

export const FETCH_STORAGE_WITH_ACTIVITIES = gql`
query ($id: ID!, $season: Int, $sourceName: String) {
  getStorage(id: $id) {
    ${storageSchema}
  }
  getAllActivitiesForStorage(season: $season, sourceType: STORAGE, sourceName: $sourceName, destinationType: STORAGE, destinationName: $sourceName) {
    ${storageActivitySchema}
  }
}`;

export const FETCH_STORAGE_WITH_ALL_ACTIVITIES = gql`
query ($id: ID!, $season: Int, $sourceName: String) {
  getStorage(id: $id) {
    ${storageSchema}
  }
  getAllActivities(season: $season, sourceType: STORAGE, sourceName: $sourceName, destinationType: STORAGE, destinationName: $sourceName) {
    ${ActivitySchema}
  }
}`;

// Mutations
// Create a new Storage
export const MUTATION_CREATE_STORAGE = gql`
mutation createStorage($storageCreateInput: StorageCreateInput!) {
  createStorage(storage:$storageCreateInput) {
    ${storageSchema}
  }
}`;

export const MUTATION_RENAME_STORAGE = gql`
  mutation($id: ID!, $newName: String!) {
    renameStorage(id: $id, newName: $newName) {
      id
    }
  }
`;

export const MUTATION_UPDATE_STORAGE = gql`
mutation updateStorage($id: ID!, $storageUpdateInput: StorageUpdateInput!) {
  updateStorage(id: $id, storage: $storageUpdateInput) {
    ${storageSchema}
  }
}`;

export const MUTATION_DELETE_STORAGE = gql`
  mutation($id: ID!) {
    deleteStorage(id: $id) {
      id
    }
  }
`;
