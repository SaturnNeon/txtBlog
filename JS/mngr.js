var table = "./blogList.json"

var parsedTable = null

var xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
        var blogs = this.responseText; 
        
        parsedTable = JSON.parse(blogs)
        console.log(parsedTable)

        for (let i in parsedTable.name) {
            console.log(parsedTable.name[i])
        }

        //for (var i in parsedTable.length, i++) {
            //console.log(parsedTable[i].name)
        //};
    } 
  }; 

xhttp.open("GET", table, true); 
xhttp.send(); 