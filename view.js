function viewfun()
{
        document.getElementById('info').innerHTML = "";
        var myTab = document.getElementById('myTable');

        for (i = 1; i < myTab.rows.length-2; i++) {

          
            var objCells = myTab.rows.item(i).cells;

            
            for (var j = 0; j < objCells.length-1; j++) {
                info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
            }
            info.innerHTML = info.innerHTML + '<br />';   
        }
    }
    function viewfun2()
    {
            document.getElementById('info').innerHTML = "";
            var myTab = document.getElementById('myTable');
    
            for (i = 2; i < myTab.rows.length-1; i++) {
    
              
                var objCells = myTab.rows.item(i).cells;
    
                
                for (var j = 0; j < objCells.length-1; j++) {
                    info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
                }
                info.innerHTML = info.innerHTML + '<br />';   
            }
        }
        function viewfun3()
        {
                document.getElementById('info').innerHTML = "";
                var myTab = document.getElementById('myTable');
        
                for (i = 3; i < myTab.rows.length; i++) {
        
                  
                    var objCells = myTab.rows.item(i).cells;
        
                    
                    for (var j = 0; j < objCells.length-1; j++) {
                        info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
                    }
                    info.innerHTML = info.innerHTML + '<br />';   
                }
            }