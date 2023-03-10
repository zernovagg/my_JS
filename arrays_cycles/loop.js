/****
 * for loop
 */

let sum = 0;

for (let i = 0; i < 6; i++) {
  sum += i;
}

console.log(sum);

const arr = [1, 2, 3, 4, 5];
arrsum = 0;

for (let i = 0; i < arr.length; i++) {
  arrsum += arr[i];
}

console.log(`arrsum is ${arrsum}`)

/////////////////////////////
/****
 * for..in
 */

const obj = {
    name: "John",
    lastName: "Doe"
};

for (let key in obj){
    console.log(key + ' : ' + obj[key]);
}

/*****
 * for..of
 */

const arr1 = [1, 6, 3, 11, 5];
let sum2 = 0;
for (let el of arr1){
    sum2 += el;
}
console.log(sum2);

/****
 * while loop
 */

let sumw=0;
let sumd=0;
let j =0, k =0;

while (j<5){
    j++;
    sumw += j;
}

console.log(sumw);

do {
    k++;
    sumd += k;
} while (k<6);

console.log(sumd);