import gql from 'graphql-tag';
import { fieldActivitySchema, cropSchema, fieldSchema } from './';

// Fragments
export const getAllFields = `
getAllFields(active: $active) {
  ${fieldSchema}
}`;

export const getAllCropsForField = `
getAllCropsForField(season: $season) {
  ${cropSchema}
}`;

const getField = `
getField(id: $id) {
  ${fieldSchema}
}`;

// Queries
export const FETCH_ALL_FIELDS = gql`
query ($season: Int, $active: Boolean) {
  ${getAllFields}
  ${getAllCropsForField}
}`;

export const FETCH_ALL_CROPS_FOR_SEASON = gql`
  query($season: Int) {
    getAllCropsForField(season: $season) {
      season
      fieldName
      crop {
        name
        variety
      }
      expectedPrice {
        value
        currency
      }
    }
  }
`;

export const FETCH_FIELD_DETAILS_WITH_NAME = gql`
query fetchFieldData($season: Int, $name: String!, $id: ID!) {
  ${getField}
  getAllCropsForField(season: $season, fieldName: $name) {
    ${cropSchema}
  }
  getAllActivitiesForField(season: $season, fieldName: $name) {
    ${fieldActivitySchema}
  }
}`;

// TODO: this is deprecated
export const FETCH_ALL_FIELDS_FOR_SEASON = gql`
query ($active: Boolean) {
  ${getAllFields}
}`;

export const QUERY_GET_FIELD = gql`
query ($id: ID!) {
  ${getField}
}`;

// Mutations
export const MUTATION_CREATE_FIELD = gql`
mutation ($fieldCreateInput: FieldCreateInput!) {
  createField(field:$fieldCreateInput) {
    ${fieldSchema}
  }
}`;

export const MUTATION_UPDATE_FIELD = gql`
mutation ($id: ID!, $fieldUpdateInput: FieldUpdateInput!) {
  updateField(id: $id, field:$fieldUpdateInput) {
    ${fieldSchema}
  }
}`;

export const MUTATION_RENAME_FIELD = gql`
  mutation($id: ID!, $newName: String!) {
    renameField(id: $id, newName: $newName) {
      id
    }
  }
`;

export const MUTATION_DELETE_FIELD = gql`
  mutation($id: ID!) {
    deleteField(id: $id) {
      id
      size {
        size
        type
      }
    }
  }
`;

export const QUERY_CROPS_SIZE_FOR_FIELD = gql`
  query($fieldName: String) {
    getAllCropsForField {
      plantedArea {
        size
      }
    }
  }
`;
