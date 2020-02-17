function up( str )
{
    var result = str.split(" ");
    for ( var i = 0; i < result.length; i++ )
    {
        var j = result[i].charAt(0).toUpperCase();
        result[i] = j + result[i].substr(1);
    }
    return result.join(" ");
}
console.log(up("himanshu is great"));
