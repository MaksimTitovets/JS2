/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function(size) {
  let arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push([i]);
    for (let j = 2; j <= size; j++) {
       arr[i - 1].push(i * j);
    }
  }
  return arr;  
}
