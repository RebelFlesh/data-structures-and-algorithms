function insertShiftArray(array,value){
  if(Array.isArray(array)&& value){
    const shiftedArray = [];
    let middle;
       middle = array.length/2;
    for(let i=0;i<middle;i++){
      shiftedArray[i] = array[i];
    }

    shiftedArray[shiftedArray.length++] = value;

    for(let i=shiftedArray.length;i<array.length+1;i++){
      shiftedArray[i] = array[i-1];
    }

    return shiftedArray;
  }
  else{
    return null;
  }
}

module.exports= insertShiftArray;