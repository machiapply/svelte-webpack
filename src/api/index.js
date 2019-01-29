import * as auth from './auth';
// import * as field from './field';
export { auth };

export const fieldActivitySchema = `
__typename
id
activityDate
activityType
createdAt
fieldName
notes
season
fieldActivityType
crop { name variety __typename}
yield { harvested size __typename}
harvesting {
  __typename
  amount { size type __typename}
  destination { id name type __typename}
}
location { lat lng __typename}
observations {
  __typename
  name
  value {
    __typename
    severity
    notes
  }
}
fertilizing {
  __typename
  name
  value {
    __typename
    nitrogen
    phosphorus
    potassium
    sulfur
    zinc
    notes
  }
}
chemicals {
  name
  value {
    brand
    type
    notes
  }
}
sprayingRate
`;

export const storageActivitySchema = `
__typename
id
activityDate
activityType
createdAt
notes
season
crop { name variety __typename}
source { id name type __typename}
destinations {
  __typename
  amount { size type __typename}
  destination { id name type __typename}
}
`;

export const deliveryActivitySchema = `
__typename
id
activityDate
activityType
createdAt
crop { name variety __typename}
notes
source { id name type __typename}
destination { amount { size type __typename} destination { id name type __typename} __typename}
`;

export const contractSchema = `
__typename
id
active
basePrice { value __typename}
company
contractDate
contractNumber
crop { name variety __typename}
deliveryDate
quantity {
  __typename
  contracted { size type __typename}
  delivered { size type __typename}
  pending { size type __typename}
}
notes
season
`;

export const cropSchema = `
__typename
id
createdAt
season
modifiedAt
fieldName
crop { name variety __typename}
expectedYield {
  __typename
  timestamp
  yield { harvested size type per __typename}
}
harvestDate
seedDate
plantedArea { size type __typename}
expectedPrice {
  __typename
  currency
  value
}
`;

export const fieldSchema = `
__typename
id
active
name
identification
createdAt
modifiedAt
identification
location { lat lng __typename}
notes
ownership
shape { lat lng __typename}
size { size type __typename}
`;

export const storageSchema = `
__typename
id
active
name
capacity { size used type __typename}
contentValue { currency value __typename}
crop { name variety __typename}
location { lat lng __typename}
notes 
`;

export const ActivitySchema = `
  __typename
  id
  activityDate
  activityType
  createdAt
  notes
  season
  ... on FieldActivity {
    __typename
    fieldName
    fieldActivityType
    harvesting { amount { size type __typename} destination { id name type __typename} __typename}
  }
  ... on DeliveryActivity {
    __typename
    crop { name variety __typename}
    notes
    source { id name type __typename}
    destination { amount { size type __typename} destination { id name type __typename} __typename}
  } 
  ... on StorageActivity {
    crop { name variety }
    source { id name type }
    destinations { amount { size type } destination { id name type } }
  }  
`;

export const forecastSchema = `
  __typename
  crop {
    __typename
    name
    variety
  }
  contractedQuantity
  contractedRevenue
  deficitQuantity
  expectedQuantity
  lostRevenue
  uncontractedQuantity
  uncontractedRevenue
`;

export const fertilizerSchema = `
__typename
id
name
nitrogen
phosphorus
potassium
sulfur
zinc
`;

export const chemicalSchema = `
  __typename
  id
  name
  brand
  type
`;
