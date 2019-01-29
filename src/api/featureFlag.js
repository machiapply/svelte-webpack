import gql from 'graphql-tag';
import { featureSchema } from './';

// Fragment
export const GET_FEATURE_FLAG = gql`
  query($features: [String]!) {
    getFeatureFlags(features: $features) {
      ${featureSchema}
    }
  }
`;
