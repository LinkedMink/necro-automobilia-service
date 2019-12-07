import { IPerson } from "../database/Person";
import { IPersonModel } from "../IPersonModel";
import { IModelConverter } from "./modelConverter";

export class PersonConverter implements IModelConverter<IPersonModel, IPerson> {
  public convertToFrontend = (data: IPerson): IPersonModel => {
    return {
      numberOfMotorVehiclesInTransportMvit: data.numberOfMotorVehiclesInTransportMvit,
      vehicleNumber: data.vehicleNumber,
      personNumber: data.personNumber,
      numberOfMotorVehicleStrikingNonMotorist: data.numberOfMotorVehicleStrikingNonMotorist,
      county: data.county,
      dayOfCrash: data.dayOfCrash,
      monthOfCrash: data.monthOfCrash,
      hourOfCrash: data.hourOfCrash,
      minuteOfCrash: data.minuteOfCrash,
      landUse: data.landUse,
      landUseName: data.landUseName,
      functionalSystem: data.functionalSystem,
      functionalSystemName: data.functionalSystemName,
      firstHarmfulEvent: data.firstHarmfulEvent,
      firstHarmfulEventName: data.firstHarmfulEventName,
      mannerOfCollision: data.mannerOfCollision,
      mannerOfCollisionName: data.mannerOfCollisionName,
      schoolBusRelated: data.schoolBusRelated,
      vehicleMake: data.vehicleMake,
      vehicleMakeName: data.vehicleMakeName,
      makeModelCombined: data.makeModelCombined,
      bodyType: data.bodyType,
      bodyTypeName: data.bodyTypeName,
      vehicleTrailing: data.vehicleTrailing,
      specialUse: data.specialUse,
      specialUseName: data.specialUseName,
      emergencyMotorVehicleUse: data.emergencyMotorVehicleUse,
      rollover: data.rollover,
      initialContactPoint: data.initialContactPoint,
      initialContactPointName: data.initialContactPointName,
      fireOccurrence: data.fireOccurrence,
      age: data.age,
      sex: data.sex,
      personType: data.personType,
      personTypeName: data.personTypeName,
      injurySeverity: data.injurySeverity,
      injurySeverityName: data.injurySeverityName,
      seatingPosition: data.seatingPosition,
      seatingPositionName: data.seatingPositionName,
      restraintSystemHelmetUse: data.restraintSystemHelmetUse,
      restraintSystemHelmetUseName: data.restraintSystemHelmetUseName,
      indicationOfMisuseOfRestraintSystemHelmet: data.indicationOfMisuseOfRestraintSystemHelmet,
      airBagDeployed: data.airBagDeployed,
      airBagDeployedName: data.airBagDeployedName,
      ejection: data.ejection,
      ejectionName: data.ejectionName,
      ejectionPath: data.ejectionPath,
      ejectionPathName: data.ejectionPathName,
      extrication: data.extrication,
      policeReportedAlcoholInvolvement: data.policeReportedAlcoholInvolvement,
      methodOfAlcoholDeterminationByPolice: data.methodOfAlcoholDeterminationByPolice,
      alcoholTestStatus1: data.alcoholTestStatus1,
      alcoholTestStatus2: data.alcoholTestStatus2,
      alcoholTestStatus3: data.alcoholTestStatus3,
      alcoholTestStatus3Name: data.alcoholTestStatus3Name,
      policeReportedDrugInvolvement: data.policeReportedDrugInvolvement,
      methodOfDrugDeterminationByPolice: data.methodOfDrugDeterminationByPolice,
      drugTestStatus: data.drugTestStatus,
      drugTestType1: data.drugTestType1,
      drugTestType2: data.drugTestType2,
      drugTestType3: data.drugTestType3,
      drugTestType4: data.drugTestType4,
      drugTestType4Name: data.drugTestType4Name,
      drugTestType5: data.drugTestType5,
      drugTestType5Name: data.drugTestType5Name,
      drugTestType6: data.drugTestType6,
      drugTestType6Name: data.drugTestType6Name,
      transportedToFirstTreatmentFacility: data.transportedToFirstTreatmentFacility,
      transportedToFirstTreatmentFacilityName: data.transportedToFirstTreatmentFacilityName,
      diedAtSceneEnRoute: data.diedAtSceneEnRoute,
      dayOfDeath: data.dayOfDeath,
      monthOfDeath: data.monthOfDeath,
      yearOfDeath: data.yearOfDeath,
      hourOfDeath: data.hourOfDeath,
      minuteOfDeath: data.minuteOfDeath,
      deathTime: data.deathTime,
      lagHours: data.lagHours,
      lagMinutes: data.lagMinutes,
      relatedFactorsPersonLevel1: data.relatedFactorsPersonLevel1,
      relatedFactorsPersonLevel2: data.relatedFactorsPersonLevel2,
      relatedFactorsPersonLevel3: data.relatedFactorsPersonLevel3,
      fatalInjuryAtWork: data.fatalInjuryAtWork,
      hispanicOrigin: data.hispanicOrigin,
      hispanicOriginName: data.hispanicOriginName,
      race: data.race,
      raceName: data.raceName,
      nonMotoristLocationAtTimeOfCrash: data.nonMotoristLocationAtTimeOfCrash,
      nonMotoristLocationAtTimeOfCrashName: data.nonMotoristLocationAtTimeOfCrashName,
      timestampOfCrash: data.timestampOfCrash,
    };
  }

  public convertToBackend = (
    model: IPersonModel,
    existing?: IPerson | undefined,
    modifier?: string): IPerson => {

    throw new Error("Unsupported Write: IPerson");
  }
}

export const personConverter = new PersonConverter();