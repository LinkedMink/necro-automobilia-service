export interface IRouteRiskModel {
  source: number[];
  destination: number[];
  distance: number;
  averageMicromorts: number;
  modelCalculatedOn: Date;
}
