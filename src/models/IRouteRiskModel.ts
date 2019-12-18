export interface ISegmentRiskModel {
  start: number[];
  distance: number;
  micromorts: number;
}

export interface IRouteRiskModel {
  source: number[];
  destination: number[];
  distance: number;
  totalMicromorts: number;
  averageMicromorts: number;
  segments: ISegmentRiskModel[];
  modelCalculatedOn: Date;
}
