export const RADIUS_OF_EARTH_KM = 6371;

export const radiansToDegrees = (radians: number) => {
  return 180 / Math.PI * radians;
};

export const degreesToRadians = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

export const getHaversineDistance = (point1: number[], point2: number[]) => {
  const dLat = degreesToRadians(point2[1] - point1[1]);
  const dLon = degreesToRadians(point2[0] - point1[0]);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(point1[1])) * Math.cos(degreesToRadians(point2[1])) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return RADIUS_OF_EARTH_KM * c;
};
