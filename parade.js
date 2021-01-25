const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves){
 
let paradeCoords = [0,0];

for(const move of moves){

if(move === 'north'){
  paradeCoords[1]++;
}else if(move === 'south'){
  paradeCoords[1]--;
}else if(move === 'east'){
  paradeCoords[0]++;
}else if(move === "west"){
  paradeCoords[0]--;
}
}
return paradeCoords;
}

console.log(finalPosition(moves));
