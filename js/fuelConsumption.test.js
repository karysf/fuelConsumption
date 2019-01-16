import {distanceEstimate} from "./fuelConsumption";

test('It should calculate distance correctly', ()=> {
    const fuelCons = 9;
    const fuelVolume= 35;
    const result = distanceEstimate(fuelCons,fuelVolume);
    expect(result).toBe(4);
});