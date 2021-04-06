

// fibonices  0, 1, 1, 2, 3, 5, 8, 13, 21, 34   
let  ans = 0;
let  i = 0;
let  j =  1;

for(let x=1;x<9;x++){
    ans =  i + j;
    console.log('-----',ans);
    i = j;
    j = ans
}


 