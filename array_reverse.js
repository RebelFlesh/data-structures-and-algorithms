function reverseArray(array){
  let answer = [];
  for(let i=0;i<array.length;i++){
    answer[i] = array[array.length-1-i];
  }
  return answer;
}