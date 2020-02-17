function Lstr(length) {
   var result = '';
   var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charLength = alphabets.length;
   for ( var i = 0; i < length; i++ ) {
  
      result += alphabets.charAt(Math.floor(Math.random() * charLength));

   }
   return result;
}
console.log(Lstr(3));
