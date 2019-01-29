import gql from 'graphql-tag';
import { cropSchema } from './';

// Fragments
// Delete an existing specific Field Crop using the specified Field Crop id
export const MUTATION_DELETE_CROP = gql`
  mutation($id: ID!) {
    deleteCropForField(id: $id) {
      id
    }
  }
`;

// Create a new Field Crop
export const MUTATION_CREATE_CROP = gql`
mutation createCropForField($fieldCropCreateInput: FieldCropCreateInput!) {
  createCropForField(fieldCrop:$fieldCropCreateInput) {
    ${cropSchema}
  }
}`;

// Update an existing Field Crop using the specified Field Crop id
export const MUTATION_UPDATE_CROP = gql`
mutation updateCropForField($id: ID!, $fieldCropUpdateInput: FieldCropUpdateInput!) {
  updateCropForField(id: $id, fieldCrop: $fieldCropUpdateInput) {
    ${cropSchema}
  }
}`;

export const MUTATION_UPDATE_CROPS_FOR_FIELDS = gql`
  mutation($fieldCrops: [FieldCropBatchUpdateInput]!) {
    updateCropsForFields(fieldCrops: $fieldCrops) {
      id
      season
      expectedPrice {
        value
      }
    }
  }
`;

// Retrieves a Field Crop for the specified Field Crop id
export const FETCH_CROP = gql`
query ($id: ID!) {
  getCropForField(id: $id) {
    ${cropSchema}
  }
}`;

// Retrieve all the Field Crops associated with a specific season and field name.
// Season is optional and defaults to current year. fieldName is optional and will return crops for all fields within a season.
export const FETCH_CROPS = gql`
query {
  getAllCropsForField {
    ${cropSchema}
  }
}`;
