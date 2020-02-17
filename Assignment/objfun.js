{    
var obj = {
    a : 8 ,
    b : 10 ,
    c : function() {
        return this.a*this.b;
    }  
};
console.log(obj.c());
        }
