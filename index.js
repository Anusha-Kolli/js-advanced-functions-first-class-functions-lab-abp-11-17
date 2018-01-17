// Code your solution in this file!
const returnFirstTwoDrivers =function returnFirstTwoDrivers(drivers){
  let newDrivers = drivers.slice(0,2);
  return newDrivers;
}

const returnLastTwoDrivers =function returnLastTwoDrivers(drivers){
  let newDrivers = drivers.slice(drivers.length-1,2);
  return newDrivers;
}
