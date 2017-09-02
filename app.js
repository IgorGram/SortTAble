"use strict"
var table = document.getElementById("grid");

table.onclick = function (event) {
    var target = event.target;
    if(target.tagName !== "TH"){
        return
    }
    debugger
}