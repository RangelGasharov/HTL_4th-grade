const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data)
            fillTable(data);
        })
    })
}

const fillTable = (data) => {
    const table = document.querySelector("#output");
    let html = `<div class="table-container">
    <img class="football-img" src="Football Germany.jpeg">
    <div class="team-table">`;
    data.forEach((element, index) => {
        html += `<div class="team-info">
        <div class="team-place">${index + 1}.</div>
        <div class="team-name">${element.teamName}</div>
        <div>${element.points} points</div>
        <div><img class="team-icon" src="${element.teamIconUrl}"></div> 
        </div>`;
    });
    html += "</div></div>"
    table.innerHTML = html;
}

loadData();