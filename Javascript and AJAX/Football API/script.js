const colorPalette = ["#26670A", "#2C780C", "#358600", "#35910F", "#2E7D0C", "#359C1E"];

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
                <div><span>6</span> Pld</div>
                <div><span>15</span> GS</div>
                <div><span>7</span> GC</div>
                <div><span>5</span> W</div>
                <div><span>1</span> D</div>
                <div><span>0</span> L</div>
            </div>
        </div>`;
    });

    table.innerHTML = html;
}

loadData();