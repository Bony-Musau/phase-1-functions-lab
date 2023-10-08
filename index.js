// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
   const hq = 42; 
   const distance = Math.abs(pick - hq);
   return distance;
 }
 function distanceFromHqInFeet(pick) {
   const blocks = distanceFromHqInBlocks(pick);
   const feet = 264;
   return blocks * feet;
 }

 function distanceTravelledInFeet(start, end) {
   const blocksperfeet = Math.abs(end - start);
   const feetT = 264;
   return blocksperfeet * feetT;
 }

 const pick = 50;
 const destinationBlock = 38;
 const blocks = distanceFromHqInBlocks(pick);
 const feet = distanceFromHqInFeet(pick);
 const feetT = distanceTravelledInFeet(pick, destinationBlock);
 console.log(blocks); 
 console.log(`Blocks away: ${blocks}`);
 console.log(`Feet away: ${feet}`);
 console.log(`Feet t: ${feetT}`);

