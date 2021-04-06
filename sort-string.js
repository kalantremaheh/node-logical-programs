
let str11 = '4321546';

var str = str11.split('');


console.log('-----splitString-----', str.length);

console.log('-----splitString-----', str);
var i = 0,j;
while (i < str.length) {
    j = i+1;
    while(j < str.length){
        console.log(str[i] ,'------------------', str[j]);
        if(str[i] < str[j]){
           
            var temp = str[i];
            str[i] = str[j];
            str[j] = temp;
            console.log('-------str[j]------------',str[j]);
            console.log('-------MAIN-----------$$$',str);
        }
        console.log('--------END J----------');
        j++;
    }
    i++;
    console.log('***********END I*************');
}

console.log('-----reverse splitString-----', str)


console.log('---------__dirname----------',__dirname);



	

							
