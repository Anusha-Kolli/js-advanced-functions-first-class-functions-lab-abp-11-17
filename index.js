// Code your solution in this file!
const returnFirstTwoDrivers =function returnFirstTwoDrivers(drivers){
  let newDrivers = drivers.slice(0,2);
  return newDrivers;
}

const returnLastTwoDrivers =function returnLastTwoDrivers(drivers){
  let newDrivers = drivers.slice(drivers.length-2);
  return newDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(number){
  return function(fare){
    return number * fare ;
  }

}

const fareDoubler = createFareMultiplier(2);
