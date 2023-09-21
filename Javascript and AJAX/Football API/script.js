const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            fillTable(data);
        })
    })
}

const fillTable = (data) => {
    let html = "";
    data.forEach(element => {
        html += `<div>${element.points} by ${element.teamName}</div>`;
    });
    document.querySelector("#output").innerHTML = html;
}

loadData();