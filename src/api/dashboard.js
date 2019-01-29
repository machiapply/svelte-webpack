import gql from 'graphql-tag';
import { getAllFields, getAllCropsForField } from 'api/field';
import { getRevenueForecast } from 'api/revenue';
import { getAllStorages } from 'api/storage';
import { getAllContracts } from 'api/contract';

// Fragment
// returns array of IDs for contracts and storages
const getReferencesByCrop = `
getReferencesByCrop(crop: $crop, season: $season) {
  contracts
  storage
}`;

export const FETCH_DASHBOARD_DATA = gql`
query ($season: Int!, $active: Boolean) {
  ${getAllFields}
  ${getAllCropsForField}
  ${getRevenueForecast}
  ${getAllStorages}
  ${getAllContracts}
}`;

export const FETCH_DASHBOARD_BY_CROP = gql`
query ($season: Int, $crop: CropIdentifierInput) {
  ${getReferencesByCrop}
}`;
