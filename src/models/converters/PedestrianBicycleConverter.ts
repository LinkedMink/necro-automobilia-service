import { IPedestrianBicycle } from "../database/PedestrianBicycle";
import { IPedestrianBicycleModel } from "../IPedestrianBicycleModel";
import { IModelConverter } from "./IModelConverter";

export class PedestrianBicycleConverter implements IModelConverter<IPedestrianBicycleModel, IPedestrianBicycle> {
  public convertToFrontend = (data: IPedestrianBicycle): IPedestrianBicycleModel => {
    return {
      vehicleNumber: data.vehicleNumber,
      personNumber: data.personNumber,
      personType: data.personType,
      personTypeName: data.personTypeName,
      age: data.age,
      sex: data.sex,
      markedCrosswalkPresent: data.markedCrosswalkPresent,
      sidewalkPresent: data.sidewalkPresent,
      schoolZone: data.schoolZone,
      crashTypePedestrian: data.crashTypePedestrian,
      crashTypePedestrianName: data.crashTypePedestrianName,
      crashTypeBicycle: data.crashTypeBicycle,
      crashTypeBicycleName: data.crashTypeBicycleName,
      crashLocationPedestrian: data.crashLocationPedestrian,
      crashLocationBicycle: data.crashLocationBicycle,
      pedestrianPosition: data.pedestrianPosition,
      bicyclistPosition: data.bicyclistPosition,
      pedestrianInitialDirectionOfTravel: data.pedestrianInitialDirectionOfTravel,
      bicyclistInitialDirectionOfTravel: data.bicyclistInitialDirectionOfTravel,
      motoristInitialDirectionOfTravel: data.motoristInitialDirectionOfTravel,
      motoristManeuver: data.motoristManeuver,
      intersectionLeg: data.intersectionLeg,
      pedestrianScenario: data.pedestrianScenario,
      pedestrianScenarioName: data.pedestrianScenarioName,
      crashGroupPedestrian: data.crashGroupPedestrian,
      crashGroupPedestrianName: data.crashGroupPedestrianName,
      crashGroupBicycle: data.crashGroupBicycle,
      crashGroupBicycleName: data.crashGroupBicycleName,
    };
  }

  public convertToBackend = (
    model: IPedestrianBicycleModel,
    existing?: IPedestrianBicycle | undefined,
    modifier?: string): IPedestrianBicycle => {

    throw new Error("Unsupported Write: IPedestrianBicycle");
  }
}

export const pedestrianBicycleConverter = new PedestrianBicycleConverter();
