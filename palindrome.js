

// palindrome 123456 , 11 , 121, 12321
// isPalandrom = true;
// MyNumber = [1,2,3,4,3,2,1];
// for(let i=0,j=MyNumber.length-1; i<MyNumber.length,j>=0;i++,j--){
//     console.log(i,'--',MyNumber[i] ,'----------',j,'---',MyNumber[j]);
//     if(MyNumber[i] != MyNumber[j]){
//         isPalandrom = false
//     }

// }

// if(isPalandrom){
//     console.log('Is a palindrom number');
// }else{
//     console.log('Not a palindrom number');
// }

// =====================================================================




// function palindrome(number){
//     var final = 0
//     var temp = number;
//     while(number > 0){
//         var reminder = parseInt( number % 10);
//         number = parseInt( number / 10);
//         final = final * 10 +reminder;
//     }
//     console.log('---------',final);
//     if(temp == final){
//         console.log('Is a palindrom number');
//     }else{
//         console.log('Not a palindrom number');
//     }
// }

// palindrome(1234321);


// ========================================================


// var palandrom = '12345';

// var palandromSplit = palandrom.split('').reverse().join();
// console.log(palandromSplit);



// var n =  123456789;
// var digits = (""+n).split("");
// console.log('------',digits);

const n = 123456;
console.log( n.map(Number));