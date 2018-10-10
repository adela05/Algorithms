// Level 2 of Coding Dojo Algorithms, activity 8
var x=[2,4,6,3,7];
var y=x.length - 2; // y = 5 -2 -> 3
console.log(x[y]);
//my answer 3

// activity 9 of Level 2
var x = [2,4,6,3,7];
var y = x.length;  // 5 (as the length)
console.log(x[y-1]); // what is (y) 5-1 = 4
// my answer: console.log(x[4]); answer 7 because you count 4 (start with 0) from [2,4,6,3,7]

//activity 10 of Level 2
var x = [1,3,5,7];
x[0] = x[x.length-2];  // x[0] = x[4-2] = 5, x[0] = 5
console.log(x);
//my answer: console.log(x); = [5,3,5,7]

//activity 11 of Level 2
var x= [1,3,5,7,];
x[x.length-3] = x[x.length/2+x.length/4]; // x[1] = x[2 + 1] = x[3] (count from zero (1,3,5,7) answer is 7.
console.log(x);  // x[1] = [3] answer: [1,7,5,7]

//activity 12 Level 2
var x = [1,3,5,7]; // length is 4, replace 5 to 4 because of x[2].
var y = [2,4,6]; // length is 3, y[1] is 4
x[2] = y[x.length-3];  // work the inside brackets [x.length 4 - 3 = 1],  x[2] = y[1]
console.log(x);
// my answer: [1,3,4,7]

//activity 13, Level 2
var x = [1,3,5,7];  // replace 5 to 11
var y = [2,4,6];
x[2] = y[x.length-3] + x[x[0] + y[0]];
// x[2] = y[4-3= answer is (1)] + x[1] + y[2] = answer is (3)
//x[2] = y[1] + x[3] = answer 4+7 = 11
console.log(x);  // answer is [1,3,11,7]
