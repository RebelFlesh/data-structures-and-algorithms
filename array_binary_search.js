'use strict';

function binarySearch(arr,key) {

  function search(arr,key,min,max){
    var midIndex = Math.ceil((min+max)/2);
    if(key===arr[midIndex]){
      return midIndex;
    } 
    else if(key>arr[midIndex]){
      min = midIndex + 1; 
    }
    else if(key<arr[midIndex]){
      max = midIndex - 1;
    }
    if(min>max){
      return -1;
    }

    return search(arr,key,min,max);
  }

  var isArray = Array.isArray(arr)
  if(!arr || !key || !isArray || arr.length===0){
    return null;
  }
  if(key<arr[0] || key>arr[arr.length - 1]){
    return -1;
  }

  return search(arr,key,0,arr.length -1);
}


module.exports = binarySearch;