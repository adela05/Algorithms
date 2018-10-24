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

//Advance Array Multi.
// activity 1,  Level 3
var x = [1,3,5]; // [5,3,5] 2nd value
x[0] = x[2]; // set x[0] to be the value of x[2], answer is 5, [5,3,5]
x[1] = x[0]; // set x[1] to be the value of x[0], answer is 5, [5,5,5]
console.log(x); // answer [5,5,5]

//activity 2, Level 3
var x = [1,3,5];
var y = [0,5,7];
x[0] = x[1] + y[2]; //(3+7=10) set [0] to be the value of 10, [10,3,5]
y[1] = y[2] - x[0]; //(7-1=6) set [1] to be the value of 6, [0,6,7]
console.log(x);  // answer is [10,3,5]

//activity 3, Level 3
var x = [1,3,5,8];
x[0] = x[x.length-1]; // (4-1=3) set [0] to be the value of [3], answer is 8
// set [0] to be the value of 8
console.log; // answer is [8,3,5,8]

//activity 4, Level 3
var x =[1,3,5,8];
var temp = x[x.length-1]; // temp = x[4-1] (4-1=3), temp = x[3], temp = [8]
x[x.length-1] = x[0];  // x[4-1] (x(3)), x[3] = 1 (setting x[3] to be 1).
console.log(x); // answer is [1,3,5,1]

//activity 5, Level 3
var x = [1,3,5,8]; // is now [1,3,5,1]
var temp = x[x.length-1];
// temp = x[3] which is 8
x[x.lenght-1] = x[0];
// x[3] = x[0]
// x[3] = 1
// answer is  [1,3,5,1]
x[0] = temp;
// answer is [8,3,5,1]

//activity 6, Level 3
var x = [1,3,5,8];
x.pop(); //  the last value of the array is removed.
// answer is [1,3,5]
x.push(7); // to add at the end of the array.
// answer is [1,3,5,7]
console.log(x);
//answer is 1,3,5,7

//activity 7, Level 3
var x = [1,3,5];
x[0] = 15;
// new var x = [15,3,5]
x[3] = 77;
// there is no 3rd value to replace but in JS it push the value, another new var x = [15, 3,5,77]
console.log(x); // answer is [15,3,5,77]

//activity 7, Level 3
