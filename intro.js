if("serviceWorker" in navigator)
    {
    navigator.serviceWorker.register("service.js").then(register=>
    {
    console.log("SW Registerd!");
    console.log(registration);

    }).catch(error => {
        console.log("SW Registerd Faild!");
        console.log(error);
    });
}


function passIntroValues() {
    var FirstName = document.getElementById('IntroFirstName').value;
    var LastName = document.getElementById('IntroLastName').value;
    var Country = document.getElementById('IntroCountry').value;
    var SingleRank = document.getElementById('IntroSingleRank').value;
    var DoubleRank = document.getElementById('IntroDoubleRank').value;
    var Age = document.getElementById('IntroAge').value;
    var Weight = document.getElementById('IntroWeight').value;
    var Height = document.getElementById('IntroHeight').value;
    var Coach = document.getElementById('IntroCoach').value;
    var Birth = document.getElementById('Birth').value;
    var Pro = document.getElementById('pro').value;
    var Plays = document.getElementById('play').value;
    var Birthplace = document.getElementById('place').value;
    var Residence = document.getElementById('residence').value;
    // var Link = document.getElementById('Link').value;

    let KeyName = localStorage.setItem(
        FirstName,
        JSON.stringify({
            TFirstName: FirstName,
            TLastName: LastName,
            TCountry: Country,
            TSingleRank: SingleRank,
            TDoubleRank: DoubleRank,
            TAge: Age,
            TWeight: Weight,
            THeight: Height,
            TCoach: Coach,
            TBirth: Birth,
            TPlays: Plays,
            TPro: Pro,
            TBirthplace: Birthplace,
            TResidence: Residence,
            SingleHistory: [],
            DoubleHistory: [],
        })
    );

    var key = document.getElementById('IntroFirstName').value;
    dataFromStorage = JSON.parse(window.localStorage.getItem(key));
    table = document.getElementById('single-table');

    for (var i = 0; i < dataFromStorage.SingleHistory.length; i++) {
        // create a new row
        var newRow = table.insertRow(table.length);
        for (var j = 0; j < dataFromStorage.SingleHistory[i].length; j++) {
            // create a new cell
            var cell = newRow.insertCell(j);

            // add value to the cell
            cell.innerHTML = dataFromStorage.SingleHistory[i][j];
        }
    }

    for (var i = 0; i < dataFromStorage.DoubleHistory.length; i++) {
        // create a new row
        var newRow = table.insertRow(table.length);
        for (var j = 0; j < dataFromStorage.DoubleHistory[i].length; j++) {
            // create a new cell
            var cell = newRow.insertCell(j);

            // add value to the cell
            cell.innerHTML = dataFromStorage.DoubleHistory[i][j];
        }
    }


    document.getElementById('firstName').innerHTML = dataFromStorage.TFirstName;
    document.getElementById('lastName').innerHTML = dataFromStorage.TLastName;
    document.getElementById('country').innerHTML = dataFromStorage.TCountry;
    document.getElementById('single-rank').innerHTML = dataFromStorage.TSingleRank;
    document.getElementById('double-rank').innerHTML = dataFromStorage.TDoubleRank;
    document.getElementById('info-value-age').innerHTML = dataFromStorage.TAge;
    document.getElementById('info-value-coach').innerHTML = dataFromStorage.TCoach;
    document.getElementById('info-value-weight').innerHTML = dataFromStorage.TWeight;
    document.getElementById('info-value-height').innerHTML = dataFromStorage.THeight;
    document.getElementById('birth-ap').innerHTML = dataFromStorage.TBirth;
    document.getElementById('pro-ap').innerHTML = dataFromStorage.TPro;
    // document.getElementById('birth-ap').innerHTML = dataFromStorage.TDate;
    document.getElementById('play-ap').innerHTML = dataFromStorage.TPlays;
    document.getElementById('place-ap').innerHTML = dataFromStorage.TBirthplace;
    document.getElementById('residence-ap').innerHTML = dataFromStorage.TResidence;
    
    // document.getElementById('link-img').innerHTML = dataFromStorage.TLink;

    document.getElementById('header').style.display = 'block';
    document.getElementById('form').style.display = 'none';

    return false;
}

function retrieveRecords() {
    var key = document.getElementById('retrieveKey').value;
    dataFromStorage = JSON.parse(window.localStorage.getItem(key));

    if (dataFromStorage === undefined || dataFromStorage === null) {
        alert('Your Player is not stored, please fill the following form. (The input is case-sensitive)');
        document.getElementById('form').style.display = 'block';
        document.getElementById('pre-form').style.display = 'none';
        document.getElementById('intro-w').style.display = 'none';
    } else {
        document.getElementById('header').style.display = 'block';
        document.getElementById('pre-form').style.display = 'none';
        document.getElementById('intro-w').style.display = 'none';
    }
    dataFromStorage = JSON.parse(window.localStorage.getItem(key));
    document.getElementById('firstName').innerHTML = dataFromStorage.TFirstName;
    document.getElementById('lastName').innerHTML = dataFromStorage.TLastName;
    document.getElementById('country').innerHTML = dataFromStorage.TCountry;
    document.getElementById('single-rank').innerHTML = dataFromStorage.TSingleRank;
    document.getElementById('double-rank').innerHTML = dataFromStorage.TDoubleRank;
    document.getElementById('info-value-age').innerHTML = dataFromStorage.TAge;
    document.getElementById('info-value-coach').innerHTML = dataFromStorage.TCoach;
    document.getElementById('info-value-weight').innerHTML = dataFromStorage.TWeight;
    document.getElementById('info-value-height').innerHTML = dataFromStorage.THeight;
    document.getElementById('birth-ap').innerHTML = dataFromStorage.TBirth;
    document.getElementById('pro-ap').innerHTML = dataFromStorage.TPro;
    document.getElementById('play-ap').innerHTML = dataFromStorage.TPlays;
    document.getElementById('place-ap').innerHTML = dataFromStorage.TBirthplace;
    document.getElementById('residence-ap').innerHTML = dataFromStorage.TResidence;
    // document.getElementById('link-img').innerHTML = dataFromStorage.TLink;

    table = document.getElementById('single-table');
    for (var i = 0; i < dataFromStorage.SingleHistory.length; i++) {
        // create a new row
        var newRow = table.insertRow(table.length);
        for (var j = 0; j < dataFromStorage.SingleHistory[i].length; j++) {
            // create a new cell
            var cell = newRow.insertCell(j);
            // add value to the cell
            cell.innerHTML = dataFromStorage.SingleHistory[i][j];
        }
    }

    table2 = document.getElementById('doubles-table');
    for (var i = 0; i < dataFromStorage.DoubleHistory.length; i++) {
        // create a new row
        var newRow = table2.insertRow(table2.length);
        for (var j = 0; j < dataFromStorage.DoubleHistory[i].length; j++) {
            // create a new cell
            var cell = newRow.insertCell(j);
            // add value to the cell
            cell.innerHTML = dataFromStorage.DoubleHistory[i][j];
        }
    }
    
}

function addRowSingleHistory() {
    var len = dataFromStorage.SingleHistory.length;
    var testTable = document.getElementById('hide_Singles');
    var row = testTable.insertRow(len + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    var cellOne = document.querySelector('#newCellOneText').value;
    var cellTwo = document.querySelector('#newCellTwoText').value;
    var cellThree = document.querySelector('#newCellThreeText').value;
    var cellFour = document.querySelector('#newCellFourText').value;
    var cellFive = document.querySelector('#newCellFifthText').value;

    cell1.innerHTML = cellOne;
    cell2.innerHTML = cellTwo;
    cell3.innerHTML = cellThree;
    cell4.innerHTML = cellFour;
    cell5.innerHTML = cellFive;

    var itemToAppend = [cellOne, cellTwo, cellThree, cellFour, cellFive];
    dataFromStorage.SingleHistory = [...dataFromStorage.SingleHistory, itemToAppend];
    // dataFromStorage.SingleHistory.push(itemToAppend);

    var key = document.getElementById('retrieveKey').value;
    localStorage.setItem(key, JSON.stringify(dataFromStorage));
    // localStorage.tableDatag=tableg.innerHTML;
}




function addRowDoubleHistory() {
    var len = dataFromStorage.DoubleHistory.length;
    var testTableDouble = document.getElementById('hide_Doubles');
    var row = testTableDouble.insertRow(len + 1);
    var dcell1 = row.insertCell(0);
    var dcell2 = row.insertCell(1);
    var dcell3 = row.insertCell(2);
    var dcell4 = row.insertCell(3);
    var dcell5 = row.insertCell(4);

    var cellOne2 = document.querySelector('#newCellOneText2').value;
    var cellTwo2 = document.querySelector('#newCellTwoText2').value;
    var cellThree2 = document.querySelector('#newCellThreeText2').value;
    var cellFour2 = document.querySelector('#newCellFourText2').value;
    var cellFive2 = document.querySelector('#newCellFifthText2').value;

    dcell1.innerHTML = cellOne2;
    dcell2.innerHTML = cellTwo2;
    dcell3.innerHTML = cellThree2;
    dcell4.innerHTML = cellFour2;
    dcell5.innerHTML = cellFive2;

    var itemToAppend2 = [cellOne2, cellTwo2, cellThree2, cellFour2, cellFive2];
    dataFromStorage.DoubleHistory = [...dataFromStorage.DoubleHistory, itemToAppend2];
    // dataFromStorage.SingleHistory.push(itemToAppend);

    var key = document.getElementById('retrieveKey').value;
    localStorage.setItem(key, JSON.stringify(dataFromStorage));
    // localStorage.tableDatag=tableg.innerHTML;
}

//ensures the page is loaded before functions are executed.




function filterTable() {
    let dropdown, table, rows, cells, opponent, filter;
    dropdown = document.getElementById("filter");
    table = document.getElementById("hide_Singles");
    rows = table.getElementsByTagName("tr");
    filter = dropdown.value;

    for (let row of rows) { 
        cells = row.getElementsByTagName("td");
        opponent = cells[4] || null; 
        if (filter === "Reset" || !opponent || (filter === opponent.textContent)) {
        row.style.display = "";
        }
        else {
        row.style.display = "none";
        }}
}

function filterTable2() {
    let dropdown, table, rows, cells, opponent, filter;
    dropdown = document.getElementById("filter2");
    table = document.getElementById("hide_Doubles");
    rows = table.getElementsByTagName("tr");
    filter = dropdown.value;
    
    for (let row of rows) { 
        cells = row.getElementsByTagName("td");
        opponent = cells[4] || null; 
        if (filter === "Reset" || !opponent || (filter === opponent.textContent)) {
        row.style.display = "";
        }
        else {
        row.style.display = "none";
        }}
}








window.onload = function () {
    document.getElementById('retrieveButton').onclick = retrieveRecords;
    document.getElementById('sumbitButton').onclick = passIntroValues;
    // document.getElementById("removeButton").onclick = removeItem
    // document.getElementById("retrieveButton").onclick = retrieveRecords
};
