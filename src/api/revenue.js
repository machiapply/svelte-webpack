import { forecastSchema } from './';

export const getRevenueForecast = `
  getRevenueForecast(season: $season) {
    ${forecastSchema}
  }`;
