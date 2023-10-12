const colorPalette = ["#26670A", "#2C780C", "#35910F", "#2E7D0C"];

const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data)
            fillTable(data);
        })
    })
}

//https://api.openligadb.de/getcurrentgroup/bl1
const loadGamesData = () => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data)
        })
    })
}

const fillTable = (data) => {
    const table = document.querySelector("#output");
    let html = `<div class="table-container">
    <div class="team-table">`;
    data.forEach((element, index) => {
        let random = Math.floor(Math.random() * colorPalette.length);
        let color = colorPalette[random];
        html +=
        `<div class="team-info" style="background-color: ${color}">
            <div class="team-place"><span>${index + 1}</span></div>
            <div class="team-name">${element.teamName}</div>
            <div><img class="team-icon" src="${element.teamIconUrl}"></div> 
            <div class="team-points"><span>${element.points}</span> PTS</div>
            <div class="team-game-stats">
                <div><span>${element.matches}</span> Pld</div>
                <div><span>${element.goals}</span> GS</div>
                <div><span>${element.opponentGoals}</span> GC</div>
                <div><span>${element.won}</span> W</div>
                <div><span>${element.draw}</span> D</div>
                <div><span>${element.lost}</span> L</div>
            </div>
        </div>`;
    });

    table.innerHTML = html;
}

const fillUpcomingEvents = (data) => {
    const eventsTable = document.querySelector("#events-content");
    
}

loadData();
loadGamesData();
fillUpcomingEvents()