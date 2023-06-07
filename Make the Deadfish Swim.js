/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.
*/

function parse(data) {
  data = data.split('').filter(x => x == 'i' || x == 'd' || x == 's' || x == 'o');
  let arr = [], p = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == 'i') p++;
    if (data[i] == 'd') p--;
    if (data[i] == 's') p *= p;
    if (data[i] == 'o') arr.push(p);
  }
  return arr;
}
