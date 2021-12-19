createCalendar(2021, 11);

function createCalendar(year, month){

let {firstDay, countDays} = getFirstDayAndCountMonth(year, month);
let table = document.createElement('table');
let headerTable = document.createElement('tr')
let days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    days.forEach(day => {
        let td = document.createElement('th');
        td.innerText = day;
        headerTable.append(td);
    });
table.append(headerTable);

if(firstDay + countDays >= 36){
        createRowsAndCels(6, table)
    }else if(firstDay + countDays >= 30){
        createRowsAndCels(5,table)
    }else{
        createRowsAndCels(4, table)
}

let cells = table.querySelectorAll('td');
let count = 1;
for(let i = firstDay; i < countDays + firstDay; i++){
    cells[i].innerText = count++;
}

document.body.append(table);

}

function getFirstDayAndCountMonth(year, month){
        let result = {};
        result.firstDay = new Date(year, month - 1).getDay();
        result.countDays = new Date(year, month, 0).getDate();
    return result;
}

function createRowsAndCels(numRows, curTable){
    for(let i = 0; i < numRows; i++){
        let row = document.createElement('tr');
        for(let x = 0; x < 7; x++){
            let cell = document.createElement('td');
            cell.innerText = "-";
            row.append(cell);
        }
        curTable.append(row);      
    }
}
