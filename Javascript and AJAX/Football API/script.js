const colorPalette = ["#26670A", "#2C780C", "#35910F", "#2E7D0C"];

const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            fillTable(data);
        })
    })
}

//https://api.openligadb.de/getcurrentgroup/bl1
const loadGamesData = () => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result) => {
        result.json().then((data) => {
            fillUpcomingEvents(data);
        })
    })
}

const fillTable = (data) => {
    const table = document.querySelector("#output");
    let html = `<div class="team-table">`;
    data.forEach((element, index) => {
        let random = Math.floor(Math.random() * colorPalette.length);
        let color = colorPalette[random];
        html += `<div class="team-info" style="background-color: ${color}">
            <div class="team-place"><span>${index + 1}</span></div>
            <div class="team-name">${element.teamName}</div>
            <div><img class="team-icon" src="${element.teamIconUrl}"></div> 
            <div class="team-points"><span>${element.points}</span> ${element.points = 1 ? "PT" : "PTS"}</div>
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
    const eventsTable = document.querySelector("#events");
    const currentTime = new Date();

    let upcomingGamesContent = ""
    let recentGamesContent = "";
    let amountOfUpcomingGames = 2;
    let amountOfRecentGames = 2;
    let upcomingGamesArray = [];
    let recentGamesArray = [];

    data.forEach(element => {
        let matchDate = Date.parse(element.matchDateTime);
        if (matchDate > currentTime) {
            upcomingGamesArray.push(element);
        } else {
            recentGamesArray.push(element);
        }
    })

    upcomingGamesArray.slice(0, amountOfUpcomingGames).forEach(element => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        upcomingGamesContent += `
        <div class="upcoming-games-team1-info">
            <div class="upcoming-games-team1-name">${element.team1.teamName}</div>
            <div class="upcoming-games-team1-img"><img class="upcoming-games-team-image" src="${element.team1.teamIconUrl}"></div>
        </div>
        <div class="upcoming-games-date">${new Date(element.matchDateTime).toLocaleDateString(options, { hour: '2-digit', minute: '2-digit' })}</div>
        <div class="upcoming-games-team2-info">
            <div class="upcoming-games-team2-name">${element.team2.teamName}</div>
            <div class="upcoming-games-team2-img"><img class="upcoming-games-team-image" src="${element.team2.teamIconUrl}"></div>
        </div>`
    })

    recentGamesArray.slice(-amountOfRecentGames).forEach(element => {
        recentGamesContent += `
        <div class="recent-games-team1-info">
            <div class="recent-games-team1-name">${element.team1.teamName}</div>
            <div class="recent-games-team1-img"><img class="recent-games-team-image" src="${element.team1.teamIconUrl}"></div>
        </div>
        <div class="recent-games-team1-result">${element.matchResults[1].pointsTeam1}</div>
        <div class="recent-games-team2-info">
            <div class="recent-games-team2-name">${element.team2.teamName}</div>
            <div class="recent-games-team2-img"><img class="recent-games-team-image" src="${element.team2.teamIconUrl}"></div>
        </div>
        <div class="recent-games-team2-result">${element.matchResults[1].pointsTeam2}</div>`
    })

    let html = `
        <div class="upcoming-games-container">
            <div class="upcoming-games-title">Upcoming Games</div>
                <div class="upcoming-games-content">
                    ${upcomingGamesContent}
                </div>    
            </div>
        </div>
        <div class="recent-games-container">
            <div class="recent-games-title">Recent Games</div>
            <div class="recent-games-content">
                    ${recentGamesContent}
            </div>
        </div>`
    eventsTable.innerHTML = html;
}

loadData();
loadGamesData();