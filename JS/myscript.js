function check()
{
        var checkName = document.forms['myForm']['name'].value;
        var checkNo = document.forms['myForm']['number'].value;
        var myPass =  document.forms['myForm']['pass'].value;
        var checkpass= prompt("Confirm Password :");
        if(checkpass==myPass)
    {
        if(checkName=="Himanshu")
        {
            alert("Welcome Himanshu To smartData Enterprises!");
        }
        else 
        alert("Sorry! Wrong User!");
    }
}