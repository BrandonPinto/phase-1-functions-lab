function distanceFromHqInBlocks(someValue) {
    if(someValue < 42) {
        return (42 - someValue);
    } else {
        return (someValue - 42);
    }
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}
function distanceTravelledInFeet(start, destination) {
   return Math.abs(start - destination) *264
//    const distanceTraveledInFeet = (start, destination) => math.abs(start - destination)
}
function calculatesFarePrice(start, destination) {
    let traveled = distanceTravelledInFeet(start, destination)
    if(traveled < 400) {
    return 0
} else if (traveled < 2000) {
    return (traveled - 400)*.02
} else if (traveled <= 2500) {
    return 25
} else {
    return 'cannot travel that far'
}
}
  //anon function const functionName = function(param, param) {
    //stuff
  //