// Code your solutions in this file
//for loop
const guestNames = ["Ada", "Brendan", "Ali"];

function writeCards(guestNames,  eventName) {
    const cards = [];
  for (let i = 0; i < guestNames.length; i++) {
    cards[i] = (`Thank you, ${guestNames[i]}, for the wonderful ${eventName} gift!`);
    debugger;
  }
  return cards;
}
console. log (writeCards(guestNames, "birthday"));

//while loop
function countDown(count){
    while (count >= 0) {
      console.log(count--);
    };
    return count;
}
countDown("11");