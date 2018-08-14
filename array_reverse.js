function reverseArray(array){
  let answer = [];
  for(let i=0;i<array.length;i++){
    answer[i] = array.length - i;
  }
  return answer;
}