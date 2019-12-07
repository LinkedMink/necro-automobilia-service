export interface ICrashEventModel {
  eventNumber?: number;
  vehicleNumberThisVehicle?: number;
  areaOfImpactThisVehicle?: number;
  areaOfImpactThisVehicleName?: string;
  sequenceOfEvents?: number;
  sequenceOfEventsName?: string;
  vehicleNumberOtherVehicle?: number;
  areaOfImpactOtherVehicle?: number;
  areaOfImpactOtherVehicleName?: string;
}
