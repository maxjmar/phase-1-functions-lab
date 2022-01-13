// Code your solution in this file!
// function distanceFromHqInBlocks(someValue) {
//     let blocksAway
//     if (someValue >= 42) {
//         blocksAway = someValue - 42;
//     }
//     else if (someValue <= 42) {
//       blocksAway = 42 - someValue;
//     }
//     return blocksAway
// }
function distanceFromHqInBlocks(someValue) {
    let scuberHq = 42;
    let blocksAway;
    if (someValue >= scuberHq) {
        blocksAway = someValue -= scuberHq;
    }
    else if (someValue <= scuberHq) {
      blocksAway = scuberHq -= someValue;
    }
    return blocksAway
}

function distanceFromHqInFeet(someValue) {
    let dtBlocks = distanceFromHqInBlocks(someValue);
    let blocksFeet = dtBlocks *= 264;
    return blocksFeet
}

function distanceTravelledInFeet(start, destination) {
    let convFeet;
    if (start >= destination) {
        convFeet = (start -= destination) * 264;
    }
    else if (start <= destination) {
        convFeet = (destination -= start) * 264;
    }
    return convFeet
}

function calculatesFarePrice(start, destination) {
    let fareLength = distanceTravelledInFeet(start, destination);
    let farePrice;
    if (fareLength <= 400) {
        farePrice = 0;
    }
    else if (fareLength <= 2000) {
        farePrice = (fareLength -= 400)  * 0.02;
    }
    else if (fareLength <= 2499) {
        farePrice = 25;
    }
    else if (fareLength > 2500) {
        farePrice = 'cannot travel that far';
    }
    return farePrice
}