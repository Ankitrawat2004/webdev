//Qs1. Write a JS program to delete all occurrences of element‘num’in a given array.
let arr=[1,2,3,4,5,6,2,3];
let num =2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,num);
    }
}
console.log(arr);
//Example:ifarr=[1,2,3,4,5,6,2,3]&num=2 Result should be arr=[1,3,4,5,6,3]

//Qs2.Write a JS program to find the no of digits in a number.Example:if number=287152,count=6
let number =287152;
let count=0;
let copy=number;
while(copy>0){
    
    copy=Math.floor(copy/10);// this code is to remove the lastdigit from array
    count++;
}
console.log("The number of digits in", number, "is:", count);
//Qs3.Write a JS program to find the sum of digits in a number.Example:if number=287152,sum=25
let numberr=287152;
let countt=0;
let sum=0;
let copy1=numberr;
while(copy1>0){
    countt++;
    let digit = copy1 % 10;//this code is to get the lastdigit from array
    sum = sum + digit;
    copy1=Math.floor(copy1/10);

}
console.log("The sum of the digits in", number, "is:", sum);
//Qs4.Print the factorial of a number n.[Factorial of a number n is the product of all positive integers 
// less than or equal to a given positive integer and denoted by that integer.]
//Example:7!(factorialof7)=1x2x3x4x5x6x7=50405!(factorialof5)=1x2x3x4x5=1203!(factorialof3)=1x2x3=60!Isalways1
let n=5;
let factorial=1;
for(let i =0;i<=n;i++){
    factorial=factorial*i;
}
console.log(`factorial of ${n} is ${factorial}`);
//Qs5.Find the largest number in an array with only positive numbers.
let arr1=[2,5,10,6,8,9];
let largest=0;
for(let i =0;i<=arr1.length;i++){
    if(largest<arr[i]){
        largest=arr[i];
    }
}
console.log(largest);

