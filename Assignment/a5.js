function checkP(prop) {
    var obj = {
        name : "Himanshu",
        Sname : "Rawat",
        marks : 64 ,
        id : 007
    };
    if(obj.hasOwnProperty(prop))
    {
        console.log("True");
    }
    else 
    console.log("False");
}
checkP('id');