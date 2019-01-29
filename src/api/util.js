import { toAcres } from 'util/conversions';
import { getHarvestedFlag } from 'common/utils';

export function getFieldsListFromData(data) {
  // NB: response objects from Apollo are immutable, so we need to make deep copies to support the original implementation.
  const { getAllFields: frzFields, getAllCropsForField: frzCrops } = data;

  // This is apparently the fastest way to create deep copies...
  // HOWEVER, this is going to be inefficient as there's no limit on the API side yet.
  // That is, with large numbers of crops/fields...
  const fields = JSON.parse(JSON.stringify(frzFields));
  const crops = JSON.parse(JSON.stringify(frzCrops));

  const indexedFields = {};

  fields.forEach(field => {
    if (field && field.name) {
      // we have sane field data
      // add crops and planted area attributes
      field.crops = [];
      field.plantedArea = 0;
      field.harvested = getHarvestedFlag(
        crops.filter(crop => crop.fieldName === field.name)
      );
      indexedFields[field.name] = field;
    }
  });

  crops.forEach(fieldCrop => {
    const field = indexedFields[fieldCrop.fieldName];
    if (field) {
      field.crops.push(fieldCrop);
      // acres or hectares
      field.plantedArea += toAcres(
        fieldCrop.plantedArea.size,
        fieldCrop.plantedArea.type
      );
    }
  });

  // sort the fields in descending order of plantedArea
  fields.sort((field1, field2) => field1.plantedArea < field2.plantedArea);

  // sort the crops list for each fields
  fields.forEach(field =>
    field.crops.sort(
      (crop1, crop2) =>
        toAcres(crop1.plantedArea.size, crop1.plantedArea.type) <
        toAcres(crop2.plantedArea.size, crop2.plantedArea.type)
    )
  );

  return fields;
}
