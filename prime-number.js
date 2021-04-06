

// Prime number example 2	3	5	7	11	13	17	19	23 29	31	37	41	43	47	53	59	61
for(let i=2;i<=100;i++){
    let countArray =[];
   for(j=1;j<=i;j++){ 
      if(i%j==0){
        countArray.push(i);  
      }   
   }
   if(countArray.length == 2){
       console.log(i,' is primer number');
   }
}


function isPrime(n)
{
    // Corner case
    if (n <= 1)
        return false;
  
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
}
  
// function
isPrime(10) ? console.log(" true" + "<br>") : console.log(" false" + "<br>");
 