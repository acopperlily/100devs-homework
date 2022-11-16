function bubbleSort(arr) {
  let loops = 0;
  let swaps = 1;
  let temp;
  while (swaps > 0) {
    loops++;
    swaps = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swaps++;
      }
    }
    console.log('swaps:', swaps);
  }
  console.log('loops:', loops);
  return arr;
}

console.log(bubbleSort([8, 7, 1, 3, 5, 9, 2]));
console.log(bubbleSort([1, 3, 4, 2, 5, 8, 9]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7]));
console.log(bubbleSort([9, 1, 2, 3, 4, 7, 8]));