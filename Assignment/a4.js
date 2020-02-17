var obj = [ 
    {
        book: "Html",
        author: 'Himanshu',
        status: true
    }, 
    {
        book:"Css" ,
        author: 'Himanshu',
        status: true
    },
    {
        book: "Bootstrap",
        author: 'Shivam',
        status: false
    }];

for (var i = 0; i < obj.length; i++) 
   {
    if (obj[i].status) {
      console.log("Read " + "'" + obj[i].book + "'" + ' by ' + obj[i].author + ".");
        } 
    else
        {
        console.log("Still need to read " + "'" + obj[i].book + "'" + ' by ' + obj[i].author + ".");
        }
    }

