function maxChar(str) {
const charObj = {};
let max = 0;
let maxChar = '';

for(let char of str){
    if(charObj[char]){
        charObj[char]++;
    }else{
        charObj[char] = 1;
    }
}

for(let char in charObj){
    if(charObj[char] > max){
        max = charObj[char];
        maxChar = char;
    }
}
return maxChar; 
}
console.log(maxChar("Welcome To smartData!"));