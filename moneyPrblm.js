const denomination = [2000,500,200,100,50,20,10,5,1]
let amount = 9999;
let notes = [];

for (let index = 0; index < denomination.length; index++) {
  if(denomination[index] <= amount){
    notes[index] = Math.floor(amount/denomination[index]);
    amount = amount - (notes[index]*denomination[index])
  }
  else{
    notes[index] = 0
  }
}

for (let j = 0 ; j < denomination.length;j++){
  if(notes[j] != 0){
    console.log(`${notes[j]} denomination of ${denomination[j]}  denomination` )
  }
}
