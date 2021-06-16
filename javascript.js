function hideHistory() {
    var x = document.getElementById('hide_Singles');
    if (x.style.display === 'none'){
        x.style.display = 'inline-table';
    }
    else
        x.style.display = 'none';
}

// function calculate_age(Thiem) { 
//     var diff_ms = Date.now() - Thiem.getTime();
//     var age_dt = new Date(diff_ms); 
  
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }


function hideHistory_2() {
    var x = document.getElementById('hide_Doubles');
    if (x.style.display === 'none'){
        x.style.display = 'inline-table';
    }
    else
        x.style.display = 'none';
}

function hideHistory_3() {
    var x = document.getElementById('hide_Carrer tour-season');
    if (x.style.display === 'none'){
        x.style.display = 'inline-table';
    }
    else
        x.style.display = 'none';
}




// let array_first = [["2020","RUP","1ST","1ST","1ST"],
//             ["2019","2ND","RUP","1ST","1ST"],                    
//             ["2018","4TH","RUP","1ST","1"],                        
//             ["2017","4TH","SF","4TH","4TH"],                        
//             ["2016","3RD","SF","2ND","4TH"],                        
//             ["2015","1ST","2ND","2ND","3RD"],                        
//             ["2014","2ND","2ND","1ST","4TH"]];

// table = document.getElementById("single-table");

//    for(var i = 0; i < array_first.length; i++){
//        // create a new row
//        var newRow = table.insertRow(table.length);
//        for(var j = 0; j < array_first[i].length; j++){
//            // create a new cell
//            var cell = newRow.insertCell(j);

//            // add value to the cell
//            cell.innerHTML = array_first[i][j];
//        }
//    }

//    let array_second = [["2016","2ND","1ST","-","2ND"],
//                 ["2015","1ST","1ST","-","1ST"],
//                 ["2014","-","1ST","2ND","2ND"]];

// table = document.getElementById("doubles-table");

// for(var i = 0; i < array_second.length; i++){
//     var newRow = table.insertRow(table.length);
//     for(var j = 0; j < array_second[i].length; j++){
//         var cell = newRow.insertCell(j);
//         cell.innerHTML = array_second[i][j];
//     }
// }





let arrayTh = [
    ["2021","9","5","4"],
    ["2020","34","25","9"],
    ["2019","66","49","17"],
    ["2018","76","54","22"],
    ["2017","74","47","27"],
    ["2016","84","60","24"],
    ["2015","64","36","28"],
    ["2014","45","22","23"],
    ["2013","7","4","3"],
    ["2012","3","1","2"],
    ["2011","4","1","3"]];


table = document.getElementById("tour-table");

for(var i = 0; i < arrayTh.length; i++){
    var newRow = table.insertRow(table.length);
    for(var j = 0; j < arrayTh[i].length; j++){
        var cell = newRow.insertCell(j);
    cell.innerHTML = arrayTh[i][j];
        }
}



var wins = 0;
var loses = 0;
var matches = 0;
table_sum = document.getElementById("tour-table");

for (var i=0; i<table_sum.rows.length; i++){
    matches += parseInt(table_sum.rows[i].cells[1].innerHTML);
    wins += parseInt(table_sum.rows[i].cells[2].innerHTML);
    loses += parseInt(table_sum.rows[i].cells[3].innerHTML);
}
//console.log(wins);
///console.log(loses);
//console.log(matches);


function sortTableColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column +1  })`);
        const bColText = b.querySelector(`td:nth-child(${ column +1  })`);
        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });
    
    // remove all existing TRs from thev table

    while (tBody.firstChild){
        tBody.removeChild(tBody.firstChild)
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);



    //mexri edw kapws ok
    //Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column })`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column })`).classList.toggle("th-sort-desc", !asc);

}

//sortTableColumn(document.getElementById("hide_Carrer tour-season"), 1,true);

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableColumn(tableElement, headerIndex, !currentIsAscending);
    });
});


document.getElementById("matches").innerHTML = matches;
document.getElementById("wins").innerHTML = wins;
document.getElementById("lose").innerHTML = loses;

document.getElementById("age").innerHTML = calculate_age(new Date(1993, 11, 4));


