const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers (drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers (drivers) {
    return drivers.splice(2, 3);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer) {
    return function (fare) {
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
    if (fn === returnFirstTwoDrivers) {
      return drivers.slice(0, 2);
    } else if (fn === returnLastTwoDrivers) {
      return drivers.slice(-2);
    }
  }
  
  function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }