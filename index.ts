function heapSort(arr: number[]) {
  let len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, len, i);
  }
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, len, 0);
  }
  return arr;
}

function heapify(arr: number[], len: number, i: number) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, len, largest);
  }
}

function swap(arr: number[], a: number, b: number) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}


function bubbleSort(arr: number[]) {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}


function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// console.log(bubbleSort([5, 3, 8, 2, 1, 4]));

console.log(heapSort([11, 101, 2, 3, 400, 5, 6, 1, 8, 9]));

// console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

