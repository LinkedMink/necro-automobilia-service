export interface IRouteRiskModel {
  source: number[];
  destination: number[];
  distance: number;
  totalMicromorts: number;
  averageMicromorts: number;
  modelCalculatedOn: Date;
}
