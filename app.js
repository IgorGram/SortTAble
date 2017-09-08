"use strict"
var table = document.getElementById("grid");

table.onclick = function (event) {
    var target = event.target;
    if(target.tagName !== "TH"){
        return
    }
    var cellIndex = target.cellIndex;                 //номер ячейки в строке
    var dataType =target.getAttribute('data-type');   // взяли атрибут и узнали число это или строка
    sortColumn(cellIndex,dataType);
}


function sortColumn(index,type) {
    var tbody = grid.getElementsByTagName('tbody')[0];
    var rowsArray = [].slice.call(tbody.rows);
    var compare;

    switch (type) {
        case 'number':
            compare = function(rowA, rowB) {
                return rowA.cells[index].innerHTML - rowB.cells[index].innerHTML;
            };
            break;
        case 'string':
            compare = function(rowA, rowB) {
                return rowA.cells[index].innerHTML > rowB.cells[index].innerHTML ? 1 : -1;
            };
            break;
    }
    // сортировать
    rowsArray.sort(compare);

    // Убрать tbody из большого DOM документа для лучшей производительности
    grid.removeChild(tbody);

    // добавить результат в нужном порядке в TBODY
    // они автоматически будут убраны со старых мест и вставлены в правильном порядке
    for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
    }

    grid.appendChild(tbody);
}